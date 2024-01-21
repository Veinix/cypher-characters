"use client"
import { Skill } from "@/Models/Types/SkillsAbilitiesTypes"
import React, { useState } from 'react'

interface SkillBarProps {
    skill: Skill
}

function SkillBar({ skill }: SkillBarProps) {
    const { skillCapability, skillDescription, skillEffect, skillName } = skill
    const [isOpen, setIsOpen] = useState<boolean>(true);

    const openSkill = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div onClick={openSkill} className="hover:cursor-pointer">
            <p className="font-bold text-md"> {skillName} </p>
            {isOpen &&
                <>
                    <span className="text-sm"> {skillDescription} </span>
                    {skillEffect && <p className="text-sm italic"> {skillEffect} </p>}
                </>
            }
        </div>
    )
}

export default SkillBar