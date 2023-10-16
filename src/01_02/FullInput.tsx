import React, {ChangeEvent, useState} from 'react';

type FullInputPropsType = {
    buttonName: string

    addMessage: (newMessage: string)=>void
}


const FullInput = (props:FullInputPropsType ) => {

    const [inputValue, setInputValue] = useState<string>('')

    const onChangeInputHadler = (e: ChangeEvent<HTMLInputElement>) =>{
        setInputValue(e.currentTarget.value)
    }
    const onClickButtonHandler = () =>{
        props.addMessage(inputValue)
        setInputValue('')
    }

    return (
        <div>
            <input value={inputValue} onChange={onChangeInputHadler}/>
            <button onClick={onClickButtonHandler} >{props.buttonName}</button>
        </div>
    );
};

export default FullInput;