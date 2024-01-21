import { Skill } from "@/Models/Types/CharacterTypes"
import React from 'react'

interface AttackBarProps {
    skill: Skill
}

function AttackBar({ skill }: AttackBarProps) {
    const { skillName, pool, capability } = skill
    return (
        <div className="flex border border-black rounded-md">
            <div className="flex grow-[4] w-2 pl-2">
                <span> {skillName} </span>
            </div>
            <div className="flex grow-[2] w-2 border-l border-l-black justify-center">
                <span> {capability}</span>
            </div>
        </div>
    )
}

export default AttackBar