// Gaining training in a specific skill or task, such as French or Lockpicking
// They are a broad category of things your character can learn and accomplish.
// Passive, not an attack. They can decrease the difficulty of a Task.
// Can also choose a skill based on your character's special abilities.
export type Skill = {
    skillName: string,
    skillDescription: string,
    skillCapability: "Trained" | "Specialized" | "Inable",
    skillEffect?: string
}

// Types and Foci grant PCs special abilities at each new tier. Using the abilities usually costs points from the stat Pools. 
// Some are actions, some are enabler (Always active/Passives)
export type Ability = {
    abilityName: string,
    abilityDescription: string,
    abilityCapability?: "Trained" | "Specialized" | "Inable",
    abilityCost?: { cost: number, pool: "Might" | "Speed" | "Intellect" },
    isEnabler?: boolean,
    abilityEffect?: string
} 

export const defaultCharacterSkills1: Skill[] = [
    {
        skillName: "Management",
        skillDescription: "As the editor-in-chief of the Daily Bugle, you have a vast knowledge of beaucracy and people management - all in order to bring the best out of them.",
        skillCapability: "Trained",
        skillEffect: "Your companions gain +1 in all their stats."
    },
    {
        skillName: "Under Pressure",
        skillDescription: "Your time as a war correspondent in Europe provided you with the tools and skills to work under pressure and, unfortunately, under fire.",
        skillCapability: "Trained",
        skillEffect: "While in combat, tasks have their difficulty reduced by 1"
    }
]

export const defaultCharacterAbilities1: Ability[] = [
    {
        abilityName: "Physical Nature",
        abilityDescription: "You have an Intellect Edge of 1, a Might Edge of 0, and a Speed Edge 0.",
    },
    {
        abilityName: "Cypher Use",
        abilityDescription: "You can bear two cyphers at a time.",
    },
    {
        abilityName: "Practiced with Light Weapons",
        abilityCapability: "Trained",
        abilityDescription: "You can use light weapons without penalty. If you wield a medium weapon, increase the difficulty of the attack by one step. If you wield a heavy weapon, increase it by two steps. You also start with one light weapon of your choice. Enabler",
        isEnabler: true,
    },
    {
        abilityName: "Starting Equipment",
        abilityDescription: "Appropriate clothing and a light weapon of your choice, plus two expensive items, two moderately priced items, and up to four inexpensive items.",
    },
    {
        abilityName: "Aggression",
        abilityCapability: "Trained",
        abilityDescription: "Your words twist the mind of a character within short range who is able to understand you, unlocking their more primitive instincts. As a result, they gain an asset on their Might-based attack rolls for one minute. Action to initiate.",
        abilityCost: {
            cost: 2,
            pool: "Intellect"
        },
    },
]
