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
            <span className="font-bold text-md"> {skillName} </span>
            {isOpen &&
                <p className="text-sm"> {skillDescription} </p>
            }
            {skillEffect && <span className="text-sm italic"> {skillEffect} </span>}

        </div>
    )
}

export default SkillBar