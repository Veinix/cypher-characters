import { Item } from "@/Models/Types/ItemTypes"
import SkillBar from "../Atoms/SkillBar"
import EquipmentBar from "../Atoms/EquipmentBar"

interface EquipmentContainer {
    characterEquipment: Item<any>[]
}

function EquipmentContainer({ characterEquipment }: EquipmentContainer) {
    return (
        <div className="flex flex-col m-1">
            <h2 className="text-2xl font-bold pb-1">  Equipment </h2>
            {characterEquipment.map(item => {
                return (
                    <EquipmentBar
                        key={item.itemName}
                        item={item}
                    />)
            })}
        </div>
    )
}

export default EquipmentContainer