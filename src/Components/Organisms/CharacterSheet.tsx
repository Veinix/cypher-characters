import AttributesContainer from "../Molecules/AttributesContainer";
import StatsContainer from "../Molecules/StatsContainer";
import SkillsContainer from "../Molecules/SkillsContainer";
import AbilitiesContainer from "../Molecules/AbilitiesContainer";
import { defaultCharacter } from "@/Models/CharacterModel";
import { PlayerCharacter } from "@/Models/Types/CharacterTypes";
import EquipmentContainer from "../Molecules/EquipmentContainer";

interface CharacterSheetProps {
    characterData?: PlayerCharacter
}

function CharacterSheet({ characterData = defaultCharacter }: CharacterSheetProps) {
    const { characterAbilities, characterIdentity, characterStats, characterSkills, characterEquipment } = characterData;

    const { might, speed, intellect } = characterStats
    const characterAttributes = { might, speed, intellect }

    const lowerCasedDescriptor = characterIdentity.descriptor.toLowerCase()
    return (
        <div className="flex gap-4">
            <div className="rounded-lg border p-3 w-full gap-3 flex flex-shrink-[2]">
                <div className="flex flex-col">
                    <span className="text-2xl"> <span className="text-3xl font-bold" > {characterIdentity.name}</span> is </span>
                    <p className="text-xl"> {["a", "e", "i", "o", "u"].includes(lowerCasedDescriptor[0]) ? "an" : "a"} {characterIdentity.descriptor} {characterIdentity.type} who {characterIdentity.focus} </p>
                    <p className="py-2 whitespace-pre-line text-sm"> {characterIdentity.background}</p>
                </div>
            </div>

            <div className="rounded-lg border p-4 w-full h-auto grid grid-cols-2">
                <div className="flex flex-col w-full">
                    <StatsContainer characterStats={characterStats} />
                    <SkillsContainer characterSkills={characterSkills} />
                    <EquipmentContainer characterEquipment={characterEquipment}/>
                </div>
                <div className="flex flex-col w-full">
                    <AttributesContainer characterAttributes={characterAttributes} />
                    <AbilitiesContainer characterAbilities={characterAbilities} />
                </div>
            </div>
        </div>
    )
}

export default CharacterSheet