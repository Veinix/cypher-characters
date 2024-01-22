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

    return (
        <>
            <h2 className="text-2xl font-bold sm:pr-2 sm:inline">  Abilities </h2>
            <div className="flex mb-3 gap-8 justify-center items-center sm:mb-0 p-0">
                <StatBox stat={"Tier"} statValue={tier} />
                <StatBox stat={"XP"} statValue={xp} />
                <StatBox stat={"Effort"} statValue={effort} />
            </div>
        </>
    )
}

export default StatsContainer