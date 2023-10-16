import React, {ChangeEvent} from 'react';

type InputPropsType = {
    inputValue: string

    setInputValue: (value: string)=>void
}

const Input = (props: InputPropsType) => {

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>)=>{
        props.setInputValue(e.currentTarget.value)
    }

    return (
        <input value={props.inputValue} onChange={onChangeHandler}/>
    );
};

export default Input;