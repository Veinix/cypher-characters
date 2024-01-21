import { Ability } from "@/Models/Types/SkillsAbilitiesTypes"
import React from 'react'
import AbilityBar from "../Atoms/AbilityBar"

interface AbilitiesContainerProps {
    characterAbilities: Ability[]
}
function AbilitiesContainer({characterAbilities}: AbilitiesContainerProps) {
  return (
    <div className="flex flex-col m-1">
        <h2 className="text-2xl font-bold pb-1">  Abilities </h2>
        {characterAbilities.map(ability => {
            return ( <AbilityBar key={ability.abilityName} ability={ability}/>)
        })}
    </div>
  )
}

export default AbilitiesContainer