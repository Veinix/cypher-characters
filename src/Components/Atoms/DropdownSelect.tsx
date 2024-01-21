
interface DropdownSelectProps {
    optionsArr: string[],
    selectID: string,
    selectName: string,
    labelName: string,
    onChange?: (any?: any)=> void
}

export default function DropdownSelect({selectID, optionsArr, labelName, selectName, onChange}: DropdownSelectProps) {
    return (
        <>
            <label htmlFor={selectID}> {labelName}
            <select id={selectID} className='p-1 m-2' name={selectName} onChange={onChange}>
                <option value={""} selected disabled> Select </option>
                {optionsArr.map(option =>{
                    return (<option key={option} value={option}> {option} </option>)
                })}
            </select>
            </label>
        </>
    )
}
