"use client"

import React, { createContext, useState } from 'react'
import CharacterInputs from '../Molecules/CharacterInputs'
import CharacterDisplay from '../Molecules/CharacterDisplay'
import { ICharacter } from '@/Models/CharacterModel';
import { initialCharacterContext } from '@/Context/CharacterContext';

export const CharacterContext = createContext<ICharacter>(initialCharacterContext);

export default function CharacterCreator() {

    const [character, setCharacter] = useState<ICharacter>(initialCharacterContext)

    return (
        <div className='flex gap-4'>
            <CharacterContext.Provider value={character}>
                <div className='rounded-lg border p-2 w-full flex flex-col'>
                    <h2 className='font-extrabold'> Editor</h2>
                    <CharacterInputs setCharacterState={setCharacter}/>
                </div>
                <div className='rounded-lg border p-2 w-full'>
                    <h2 className="font-extrabold pb-2"> Preview </h2>
                    <CharacterDisplay />
                </div>
            </CharacterContext.Provider>
        </div>
    )
}
