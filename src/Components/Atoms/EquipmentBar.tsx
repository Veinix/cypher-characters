import { Item, ItemTypeEnum } from "@/Models/Types/ItemTypes"
interface EquipmentBarProps {
    item: Item<any>
}

function EquipmentBar({ item }: EquipmentBarProps) {
    const { itemDescription, itemName, itemPrice, itemStats } = item
    const isArmor = "effortCost" in itemStats
    const isWeapon = "damage" in itemStats

    return (
        <div className="m-1 p-1">
            <span className="text-md font-bold"> {itemName} </span>
            <span className="text-md"> {itemPrice} </span>
            <p className="text-sm"> {itemDescription}</p>
            {isArmor &&
                <>
                    <p className="text-sm">{itemStats.type}</p>
                    <p className="text-sm">{itemStats.effortCost}</p>
                </>
            }
            {isWeapon &&
                <div className="w-1/2 flex text-sm">
                    <span className="pr-3">{itemStats.category} Weapon</span>
                    <span className="pr-3"> Damage: {itemStats.damage}</span>
                    {itemStats.attackDifficultyModifier && <span>Modifier: {itemStats.attackDifficultyModifier}</span>}
                    <span>{itemStats.isRanged}</span>
                    {itemStats.isExplosive && <span>{itemStats.isExplosive}</span>}
                </div>
            }
            {(!isWeapon && !isArmor) &&
                <p className="text-sm italic"> {itemStats.function} </p>
            }
        </div>
    )
}

export default EquipmentBar