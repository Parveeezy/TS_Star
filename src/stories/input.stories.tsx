import React, {ChangeEvent, useRef, useState} from "react";
import {action} from "@storybook/addon-actions";

export default {
    title: 'input'
}

export const UncontrolledInput = () => <input/>
export const TrackValueOfUncontrolledInput = () => {
    const [value, setValue] = useState('');
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        const actualValue = e.currentTarget.value;
        setValue(actualValue)
    }

    return (
        <>
            <input onChange={onChange}/> - {value}
        </>
    )
}
export const GetValueOfUncontrolledInputByButtonPress = () => {
    const [value, setValue] = useState('');
    const inputRef = useRef<HTMLInputElement>(null)

    const save = () => {
        const el = inputRef.current as HTMLInputElement;
        setValue(el.value)
    }

    return (
        <>
            <input ref={inputRef}/>
            <button onClick={save}>
                save
            </button>
            - actual value: {value}
        </>
    )
}
export const ControlledInput = () => {
    const [parentValue, setParentValue] = useState('')
    const onChange = (e: ChangeEvent<HTMLInputElement>) => setParentValue(e.currentTarget.value)

    return <><input value={parentValue} onChange={onChange}/> - {parentValue}</>
}
export const ControlledCheckbox = () => {

    const [parentValue, setParentValue] = useState<boolean>(false)
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.checked)
    }

    return (<><input type={"checkbox"} onChange={onChange} checked={parentValue}/> - value: {parentValue}</>)
}
export const ControlledSelect = () => {
    const [parentValue, setParentValue] = useState<string | undefined>(undefined)
    const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setParentValue(e.currentTarget.value)
    }

    return (
        <>
            <select value={parentValue} onChange={onChange}>
                <option>none</option>
                <option value={'1'}>Dushanbe</option>
                <option value={'2'}>Moscow</option>
                <option value={'3'}>NY</option>
            </select>
            -
            {parentValue}
        </>
    )
}

export const ControlledInputWithFixedValue = () => <input value={'hello world'}/>
