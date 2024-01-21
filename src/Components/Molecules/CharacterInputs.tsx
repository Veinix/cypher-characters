import React, { Dispatch, SetStateAction, useState } from 'react'
import DropdownSelect from '../Atoms/DropdownSelect'
import TextInput from '../Atoms/TextInput'
import BasicButton from '../Atoms/Buttons';
import { ICharacter, CharacterInfo, CharacterAttributes } from "@/Models/Types/CharacterTypes";

interface CharacterInputsProps {
    setCharacterState: Dispatch<SetStateAction<ICharacter>>
}
export default function CharacterInputs({ setCharacterState }: CharacterInputsProps) {

    const [formValues, setFormValues] = useState<CharacterInfo>({
        genderIdentity: "",
        name: "",
        descriptor: "",
        type: "",
        focus: ""
    })

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFormValues({ ...formValues, [event.target.name]: event.target.value });
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const getAttributes = (type: string): CharacterAttributes => {
            let initialAttributes: CharacterAttributes = {
                might: {
                    pool: 0,
                    edge: 0
                },
                speed: {
                    pool: 0,
                    edge: 0
                },
                intellect: {
                    pool: 0,
                    edge: 0
                }
            }
            switch (type) {
                case "Warrior":
                    initialAttributes = {
                        might: {
                            pool: 10,
                            edge: 0
                        },
                        speed: {
                            pool: 10,
                            edge: 0
                        },
                        intellect: {
                            pool: 8,
                            edge: 0
                        }
                    }
                    break;
                case "Adept":
                    initialAttributes = {
                        might: {
                            pool: 7,
                            edge: 0
                        },
                        speed: {
                            pool: 9,
                            edge: 0
                        },
                        intellect: {
                            pool: 12,
                            edge: 0
                        }
                    }
                    break;
                case "Speaker":
                    initialAttributes = {
                        might: {
                            pool: 8,
                            edge: 0
                        },
                        speed: {
                            pool: 9,
                            edge: 0
                        },
                        intellect: {
                            pool: 11,
                            edge: 0
                        }
                    }
                    break;
                case "Explorer":
                    initialAttributes = {
                        might: {
                            pool: 10,
                            edge: 0
                        },
                        speed: {
                            pool: 9,
                            edge: 0
                        },
                        intellect: {
                            pool: 9,
                            edge: 0
                        }
                    }
                    break;
            }

            return initialAttributes
        }

        const characterAttributes = getAttributes(formValues.type)

        const freshCharacter: ICharacter = {
            characterInfo: { ...formValues },
            characterAttributes: { ...characterAttributes },
            characterStats: {
                tier: 1,
                effort: 0,
                xp: 0
            },
            characterSkills: []
        }

        console.log(freshCharacter)
        setCharacterState(freshCharacter)
    }

    return (
        <form name={"characterInputsForm"} onSubmit={(e) => handleSubmit(e)} className='w-full flex flex-col'>
            <div>
                <TextInput
                    inputType='text'
                    inputName='name'
                    labelName='Name'
                    inputID='characterName'
                    onChange={handleChange}
                />

                <DropdownSelect
                    optionsArr={["Male", "Female", "Non-Binary", "Custom"]}
                    selectID="characterGender"
                    selectName="genderIdentity"
                    onChange={handleChange}
                    labelName={'Gender Identity'}
                />
            </div>

            <DropdownSelect
                optionsArr={["Warrior", "Adept", "Explorer", "Speaker"]}
                selectID={"characterType"}
                selectName={"type"}
                onChange={handleChange}
                labelName={'Type'}
            />
            <TextInput
                inputType={'text'}
                labelName='Descriptor'
                inputName={'descriptor'}
                inputID={'characterDescriptor'}
                onChange={handleChange}
            />
            <TextInput
                inputType={'text'}
                labelName='Focus'
                inputName={'focus'}
                inputID={'characterFocus'}
                onChange={handleChange}
            />

            <BasicButton
                theme={'Basic'}
                text={'Update Character Sheet'}
                size={'Large'}
            />
        </form>
    )
}
