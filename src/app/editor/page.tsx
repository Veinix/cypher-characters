import PageHeader from '@/Components/Atoms/PageHeader'
import CharacterCreator from '@/Components/Organisms/CharacterCreator'
import React from 'react'

function CharacterEditorPage() {
    return (
        <>
            <PageHeader text="Character Creator and Editor" />
            <CharacterCreator/>
        </>
    )
}

export default CharacterEditorPage