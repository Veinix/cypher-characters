import React from 'react'
import PageHeader from "../Atoms/PageHeader"
import CharacterSheet from "../Organisms/CharacterSheet"

function ActiveCharacterSheet() {
    return (
        <div className="mb-2">
            <PageHeader text={"Character Sheet"} />
            <CharacterSheet characterData={undefined} />
        </div>
    )
}

export default ActiveCharacterSheet