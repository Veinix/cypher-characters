"use client"
import { Item } from "@/Models/Types/ItemTypes"
import SkillBar from "../Atoms/SkillBar"
import EquipmentBar from "../Atoms/EquipmentBar"
import BasicButton from "../Atoms/Buttons"
import { useState } from "react"

interface EquipmentContainer {
    characterEquipment: Item<any>[]
}

function EquipmentContainer({ characterEquipment }: EquipmentContainer) {
    const [isOpen, setIsOpen] = useState<boolean>(true)

    return (
        <div className="flex flex-col m-1">
            <div className="m-0 p-0">
                <h2 className="text-2xl font-bold pb-1 pr-2 inline">  Equipment </h2>
                <span
                    onClick={() => { setIsOpen(!isOpen) }}
                    className={`px-5 py-2 sm:hidden border rounded-lg hover:cursor-pointer`}
                > {isOpen ? "Close" : "Open"} </span>
            </div>
            <div className={`sm:block ${isOpen ? "block" : "hidden"}`}>

                {characterEquipment.map(item => {
                    return (
                        <EquipmentBar
                            key={item.itemName}
                            item={item}
                        />)
                })}
            </div>
        </div>
    )
}

export default EquipmentContainer