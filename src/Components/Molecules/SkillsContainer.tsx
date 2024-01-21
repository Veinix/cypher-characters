import React from 'react'
import SkillBar from "../Atoms/SkillBar"
import { Skill } from "@/Models/Types/SkillsAbilitiesTypes"

interface SkillsContainerProps {
    characterSkills: Skill[]
}
function SkillsContainer({ characterSkills }: SkillsContainerProps) {
    return (
        <div className="flex flex-col m-1">
            <h2 className="text-2xl font-bold pb-1"> Skills</h2>
            <div className="flex gap-1 flex-col">
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