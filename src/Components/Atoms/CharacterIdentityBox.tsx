"use client"
import { CharacterIdentity } from "@/Models/Types/CharacterTypes"
import { useState } from "react"

interface CharacterIdentityBoxProps {
    characterIdentity: CharacterIdentity
}
function CharacterIdentityBox({ characterIdentity }: CharacterIdentityBoxProps) {
    const lowerCasedDescriptor = characterIdentity.descriptor.toLowerCase()

    const [isOpen, setIsOpen] = useState<boolean>(true)
    const handleClick =()=>{
        setIsOpen(!isOpen)
    }

    return (
        <div className="flex flex-col">
            <span onClick={handleClick} className="text-2xl hover:cursor-pointer sm:hover:cursor-default"> <span className="text-3xl font-bold" > {characterIdentity.name}</span> is </span>
            <div className={`m-0 p-0 sm:block ${isOpen ? "block" : "hidden"}`}>
                <p className="text-xl"> {["a", "e", "i", "o", "u"].includes(lowerCasedDescriptor[0]) ? "an" : "a"} {characterIdentity.descriptor} {characterIdentity.type} who {characterIdentity.focus} </p>
                <p className="py-2 whitespace-pre-line text-sm"> {characterIdentity.background}</p>
            </div>
        </div>
    )
}

export default CharacterIdentityBox