import React from 'react'

interface TextInputProps {
    inputType: string,
    labelName: string,
    inputName: string,
    inputID: string,
    onChange?: (any?: any) => void
}

export default function TextInput({ inputID, inputName, labelName,inputType, onChange }: TextInputProps) {
    return (
        <>
            <label htmlFor={inputID}> {labelName}
                <input className="p-1 m-2" id={inputID} name={inputName} type={inputType} placeholder={inputName} onChange={onChange} />
            </label>
        </>
    )
}

