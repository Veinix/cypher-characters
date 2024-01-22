import { Ability } from "@/Models/Types/SkillsAbilitiesTypes"
import React, { useState } from 'react'
import AbilityBar from "../Atoms/AbilityBar"

interface AbilitiesContainerProps {
    characterAbilities: Ability[]
}
function AbilitiesContainer({ characterAbilities }: AbilitiesContainerProps) {
    const [isOpen, setIsOpen] = useState<boolean>(true)

    return (
        <div className="flex flex-col m-1">
            <div className="mb-3 sm:mb-0 p-0">
                <h2 className="text-2xl font-bold pr-2 inline">  Abilities </h2>
                <span
                    onClick={() => { setIsOpen(!isOpen) }}
                    className={`px-5 py-2 sm:hidden border rounded-lg hover:cursor-pointer`}
                > {isOpen ? "Close" : "Open"} </span>
            </div>
            <div className={`flex gap-1 flex-col border rounded-lg p-2 sm:block ${isOpen ? "block" : "hidden"}`}>
                {characterAbilities.map(ability => {
                    return (<AbilityBar key={ability.abilityName} ability={ability} />)
                })}
            </div>
        </div>
    )
}

export default AbilitiesContainer