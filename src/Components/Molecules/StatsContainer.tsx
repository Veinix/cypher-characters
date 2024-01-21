"use client"
import React, { useState } from 'react'
import StatBox from "../Atoms/StatBox"
import { CharacterStats } from "@/Models/Types/CharacterTypes"

interface StatsContainerProps {
    characterStats: CharacterStats,
    characterIdentity?: { descriptor: string, type: string, focus: string }
}

function StatsContainer({ characterStats }: StatsContainerProps) {
    const { tier, effort, xp } = characterStats
    const [pointValue, setPointValue] = useState(xp)

    const increase = () => {
        setPointValue(pointValue + 1)
    }
    const decrease = () => {
        if (pointValue >= 1) setPointValue(pointValue - 1)
    }

    return (
        <div className="flex items-center justify-between">
            <p className="font-bold text-3xl self-center">Tier {tier}</p>
            <div className="flex gap-2 flex-grow-[2] justify-center">
                <span className={`font-bold text-3xl self-center `}> XP: {pointValue} </span>
                <div className="flex justify-center items-center flex-col">
                    <p onClick={increase} className="font-bold text-xl hover:cursor-pointer">+</p>
                    <p onClick={decrease} className={`${pointValue < 1 && `invisible`} hover:cursor-pointer font-bold text-xl`}>-</p>
                </div>
            </div>
            <StatBox stat={"Effort"} statValue={effort} />
        </div>
    )
}

export default StatsContainer