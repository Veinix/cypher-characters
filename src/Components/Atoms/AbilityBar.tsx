"use client"
import { Ability } from "@/Models/Types/SkillsAbilitiesTypes"
import React, { useState } from 'react'

interface AbilityBarProps {
    ability: Ability
}

function AbilityBar({ ability }: AbilityBarProps) {
    const { abilityCapability, abilityCost, abilityDescription, abilityEffect, abilityName } = ability
    const [isOpen, setIsOpen] = useState<boolean>(true);

    const openAbility = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div onClick={openAbility} className="flex flex-col pb-2 hover:cursor-pointer">
            <div className="flex gap-4 px-2 items-center">
                <span className="font-bold text-md"> {abilityName} </span>
                {isOpen &&
                    <>
                        {abilityCapability &&
                            <span className="text-sm"> {abilityCapability}</span>}
                        {abilityCost &&
                            <span className="text-sm"> {`${abilityCost.cost} ${abilityCost.pool} point` + `${abilityCost.cost > 1 ? "s" : ""}`} </span>}
                    </>
                }
            </div>
            {isOpen && <p className="text-sm"> {abilityDescription} </p>}
        </div>
    )
}

export default AbilityBar