import { Skill } from "@/Models/Types/SkillsAbilitiesTypes"

type InitialStats = {
    effort: number,
    typeBonus: {
        abilityName: string,
        abilityDescription: string
    },
    edge: {
        mightEdge: number,
        speedEdge: number,
        intellectEdge: number
    },
    cypherLimit: number,
    startingEquipment: string,
}

class InitialStatsGenerator {
    private initialWarriorStats: InitialStats = {
        effort: 1,
        typeBonus: {
            abilityName: "Physical Nature",
            abilityDescription: "You have a Might Edge of 1 and a Speed Edge of 0, or you have a Might Edge of 0 and a Speed Edge of 1. Either way, you have an Intellect Edge of 0."
        },
        edge: {
            mightEdge: 1,
            speedEdge: 1,
            intellectEdge: 0
        },
        cypherLimit: 2,
        startingEquipment: "Appropriate clothing and two weapons of your choice, plus one expensive item, two moderately priced items, and up to four inexpensive items.",
    }

    private initialAdeptStats: InitialStats = {
        effort: 0,
        typeBonus: {
            abilityName: "",
            abilityDescription: ""
        },
        edge: {
            mightEdge: 0,
            speedEdge: 0,
            intellectEdge: 0
        },
        cypherLimit: 0,
        startingEquipment: "",
    }

    private initialSpeakerStats: InitialStats = {
        effort: 1,
        typeBonus: {
            abilityName: "Practiced With Light Weapons",
            abilityDescription: "You can use light weapons without penalty. If you wield a medium weapon, increase the difficulty of the attack by one step. If you wield a heavy weapon, increase it by two steps. You also start with one light weapon of your choice. Enabler."
        },
        edge: {
            mightEdge: 1,
            speedEdge: 0,
            intellectEdge: 1
        },
        cypherLimit: 2,
        startingEquipment: "",
    }

    private initialExplorerStats: InitialStats = {
        effort: 0,
        typeBonus: {
            abilityName: "",
            abilityDescription: ""
        },
        edge: {
            mightEdge: 0,
            speedEdge: 0,
            intellectEdge: 0
        },
        cypherLimit: 0,
        startingEquipment: "",
    }
}

const initialStatsGenerator = new InitialStatsGenerator()
export default initialStatsGenerator