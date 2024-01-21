import { Item } from "./ItemTypes"
import { Ability, Skill } from "./SkillsAbilitiesTypes"

export type CharacterTypes = "Speaker" | "Warrior" | "Adept" | "Explorer"

export type Attribute = {
pool: number,
edge: number
}

export type CharacterAttributes = {
    might: Attribute,
    speed: Attribute,
    intellect: Attribute,
}

export type CharacterStats = {
    might: Attribute,
    speed: Attribute,
    intellect: Attribute,
    effort: number,
    tier: number,
    xp: number
}

export type CharacterIdentity = {
    genderIdentity?: string,
    name: string,
    type: CharacterTypes | string,
    descriptor: string,
    focus: string,
    background: string
}

export interface PlayerCharacter {
    characterIdentity: CharacterIdentity,
    characterStats: CharacterStats,
    characterSkills: Skill[],
    characterAbilities: Ability[],
    characterEquipment: Item<any>[],
    characterBackground?: string,
    characterCompanions?: string,
    characterCompanionBackground?: string,
    characterPortrait?: string,
}

