import React from 'react'
import AttributeBox from "../Atoms/AttributeBox"
import { CharacterAttributes } from "@/Models/Types/CharacterTypes"

interface AttributesContainerProps {
    characterAttributes: CharacterAttributes
}
function AttributesContainer({ characterAttributes }: AttributesContainerProps) {
    const { might, intellect, speed } = characterAttributes
    return (
        <>
            <div className="flex gap-5 justify-center">
                <AttributeBox
                    attribute={"Might"}
                    pool={might.pool}
                    edge={might.edge}
                />
                <AttributeBox
                    attribute={"Intellect"}
                    pool={intellect.pool}
                    edge={intellect.edge}
                />
                <AttributeBox
                    attribute={"Speed"}
                    pool={speed.pool}
                    edge={speed.edge}
                />
            </div>
        </>

    )
}

export default AttributesContainer