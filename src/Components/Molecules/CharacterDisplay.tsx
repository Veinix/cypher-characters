import AttributeBox from "../Atoms/AttributeBox"
import { useContext } from "react"

function CharacterDisplay() {
    // const {characterInfo, characterAttributes} = useContext(CharacterContext)
    
    return (
        <>
            {/* <p> <span className='font-bold'>{characterInfo.name}</span> is a <span className='font-bold'>{characterInfo.descriptor}</span> <span className='font-bold'>{characterInfo.type}</span> who <span className='font-bold'>{characterInfo.focus}</span> </p>
            <div className="flex gap-3">
                <AttributeBox
                    attribute={"Might"}
                    pool={characterAttributes.might.pool}
                    edge={characterAttributes.might.edge}
                />
                <AttributeBox
                    attribute={"Intellect"}
                    pool={characterAttributes.intellect.pool}
                    edge={characterAttributes.intellect.edge} 
                />
                <AttributeBox
                    attribute={"Speed"}
                    pool={characterAttributes.speed.pool}
                    edge={characterAttributes.speed.edge} 
                />
            </div> */}
        </>
    )
}

export default CharacterDisplay