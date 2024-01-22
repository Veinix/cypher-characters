"use client"
import AttributesContainer from "../Molecules/AttributesContainer";
import StatsContainer from "../Molecules/StatsContainer";
import SkillsContainer from "../Molecules/SkillsContainer";
import AbilitiesContainer from "../Molecules/AbilitiesContainer";
import { defaultCharacter } from "@/Models/CharacterModel";
import { PlayerCharacter } from "@/Models/Types/CharacterTypes";
import EquipmentContainer from "../Molecules/EquipmentContainer";
import CharacterIdentityBox from "../Atoms/CharacterIdentityBox";

interface CharacterSheetProps {
    characterData?: PlayerCharacter
}

function CharacterSheet({ characterData = defaultCharacter }: CharacterSheetProps) {
    const { characterAbilities, characterIdentity, characterStats, characterSkills, characterEquipment } = characterData;

    const { might, speed, intellect } = characterStats
    const characterAttributes = { might, speed, intellect }


    return (
        <div className="flex gap-4 flex-col sm:flex-row">
            <div className="rounded-lg border p-3 w-full gap-3 flex flex-shrink-[2]">
                <CharacterIdentityBox characterIdentity={characterIdentity} />
            </div>
            <div className="w-full gap-4 h-auto flex flex-col sm:flex-row">
                <div className="flex gap-4 flex-col sm:w-1/2 select-none">
                    <div className="flex flex-col gap-2 rounded-lg border p-2 sm:pb-4">
                        <StatsContainer characterStats={characterStats} />
                        <AttributesContainer characterAttributes={characterAttributes} />
                    </div>
                    <div className="flex flex-col rounded-lg border p-2">
                        <SkillsContainer characterSkills={characterSkills} />
                        <AbilitiesContainer characterAbilities={characterAbilities} />
                    </div>
                </div>
                <div className="flex flex-col sm:w-1/2 rounded-lg border p-3">
                    <EquipmentContainer characterEquipment={characterEquipment} />
                </div>
            </div>
        </div>
    )
}

export default CharacterSheet