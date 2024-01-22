"use client"
import AttributesContainer from "../Molecules/AttributesContainer";
import StatsContainer from "../Molecules/StatsContainer";
import SkillsContainer from "../Molecules/SkillsContainer";
import AbilitiesContainer from "../Molecules/AbilitiesContainer";
import { defaultCharacter } from "@/Models/CharacterModel";
import { PlayerCharacter } from "@/Models/Types/CharacterTypes";
import EquipmentContainer from "../Molecules/EquipmentContainer";
import CharacterIdentityBox from "../Atoms/CharacterIdentityBox";
import { useState } from "react";

interface CharacterSheetProps {
    characterData?: PlayerCharacter
}

function CharacterSheet({ characterData = defaultCharacter }: CharacterSheetProps) {
    const { characterAbilities, characterIdentity, characterStats, characterSkills, characterEquipment } = characterData;

    const { might, speed, intellect } = characterStats
    const characterAttributes = { might, speed, intellect }

    const [isOpen, setIsOpen] = useState<boolean>(true)

    return (
        <div className="flex gap-4 flex-col sm:flex-row">
            <div className="rounded-lg border p-3 w-full gap-3 flex flex-shrink-[2]">
                <CharacterIdentityBox characterIdentity={characterIdentity} />
            </div>

            <div className="w-full gap-4 h-auto flex flex-col sm:flex-row">
                <div className="flex flex-col w-full rounded-lg border p-2">
                    <StatsContainer characterStats={characterStats} />
                    <AttributesContainer characterAttributes={characterAttributes} />
                    <p
                        onClick={() => { setIsOpen(!isOpen) }}
                        className={`mt-3 mb-1 sm:hidden self-center border rounded-lg px-5 py-2 hover:cursor-pointer`}
                    > Skills & Abilities </p>

                    <div className={`m-0 p-0 sm:block ${isOpen ? "block" : "hidden"}`}>
                        <SkillsContainer characterSkills={characterSkills} />
                        <AbilitiesContainer characterAbilities={characterAbilities} />
                    </div>
                </div>
                <div className="flex flex-col w-full rounded-lg border p-3">
                    <EquipmentContainer characterEquipment={characterEquipment} />
                </div>
            </div>
        </div>
    )
}

export default CharacterSheet