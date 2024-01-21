import React from 'react'
import PageHeader from "../Atoms/PageHeader"
import CharacterSheet from "../Organisms/CharacterSheet"

function ActiveCharacterSheet() {
    return (
        <>
            <PageHeader text={"Character Sheet"} />
            <CharacterSheet characterData={undefined} />
        </>
    )
}

export default ActiveCharacterSheet