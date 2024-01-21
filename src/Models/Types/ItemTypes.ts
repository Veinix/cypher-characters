export enum ItemTypeEnum {
    Weapon = "Weapon",
    Armor = "Armor",
    Cypher = "Cypher",
    Artificact = "Artifact",
    OtherItem = "OtherItem"
}

export type PriceCategory = "Inexpensive" | "Moderately Priced" | "Expensive" | "Very Expensive" | "Exorbitant"

export type Armor = { type: "Light", effortCost: 1 } | { type: "Medium", effortCost: 2 } | { type: "Heavy", effortCost: 3 }

// An attacks damage is based on the weapon used, the chance of success is based on the dice roll + modifiers
export type Weapon = {
    category: "Light" | "Medium" | "Heavy",
    damage: number,
    attackDifficultyModifier?: number,
    isRanged: boolean,
    isExplosive?: boolean,
    bonus?: number,
}

export type Cypher = { function: string, cost: string }

export type Artifact = {function: string}

export type OtherItem = {function: string}

export type ItemTypesList = Armor | Weapon | Cypher | Artifact | OtherItem

export type Item<T extends ItemTypesList> = {
    itemName: string,
    itemPrice: PriceCategory,
    itemDescription: string,
    itemStats: T
}

export type MiscService = { serviceName: string, servicePrice: PriceCategory }

const defaultWeapon1: Item<Weapon> = {
    itemName: "Hot Coffee",
    itemPrice: "Inexpensive",
    itemDescription: "A somehow-freshly brewed cup of coffee, ready for drinking - but probably for throwing at your enemies who dare criticize your ability as an editor.",
    itemStats: {
        category: "Light",
        damage: 2,
        attackDifficultyModifier: -1,
        isRanged: true,
    }
}

const defaultWeapon2: Item<Weapon> = {
    itemName: "Rolled-Up Newspaper",
    itemPrice: "Inexpensive",
    itemDescription: "A newspaper (edited by yours truly, of course) rolled tightly by anger and hatred. You can see the ink near the center of the newspaper has faded away. Most likely the result of months of failed anger-management classes",
    itemStats: {
        category: "Light",
        damage: 2,
        attackDifficultyModifier: -1,
        isRanged: false,
    }
}

const defaultClothing1: Item<OtherItem> = {
    itemName: "Editor's Outfit",
    itemPrice: "Moderately Priced",
    itemDescription: "A striped shirt, adorned by a black tie and suspenders. Tucked into pleat pants, accompanied by black dress socks and leather loafers. Your age is really noticing.",
    itemStats: {function: "Makes you look smart"}
}
export const defaultEquipment: Item<ItemTypesList>[] = [
    defaultClothing1,
    defaultWeapon1,
    defaultWeapon2
]