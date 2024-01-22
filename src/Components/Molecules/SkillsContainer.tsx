"use client"
import React, { useState } from 'react'
import SkillBar from "../Atoms/SkillBar"
import { Skill } from "@/Models/Types/SkillsAbilitiesTypes"

interface SkillsContainerProps {
    characterSkills: Skill[]
}
function SkillsContainer({ characterSkills }: SkillsContainerProps) {
    const [isOpen, setIsOpen] = useState<boolean>(true)
    return (
        <div className="flex flex-col p-1">
            <div className="mb-3 sm:mb-0 p-0">
                <h2 className="text-2xl font-bold pb-1 pr-2 inline"> Skills</h2>
                <span
                    onClick={() => { setIsOpen(!isOpen) }}
                    className={`px-5 py-2 sm:hidden border rounded-lg hover:cursor-pointer`}
                > {isOpen ? "Close" : "Open"} </span>
            </div>
            <div className={`flex gap-1 flex-col border rounded-lg p-2 sm:block ${isOpen ? "block" : "hidden"}`}>
                {characterSkills.map(skill => {
                    return (
                        <SkillBar
                            key={skill.skillName}
                            skill={skill}
                        />)
                })}
            </div>
        </div>
    )
}

export default SkillsContainer