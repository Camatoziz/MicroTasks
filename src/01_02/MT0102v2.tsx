import React, {useState} from 'react';
import Button from './Button';
import Input from './Input';

export const MT0102v2 = () => {
    const [messageList, setMessageList]=useState([
        {message: "Hello"},
        {message: "My"},
        {message: "World"}
    ])

    const [inputValue, setInputValue]=useState('')

    const addMessage =()=>{
        setMessageList([{message: inputValue }, ...messageList])
        setInputValue('')
    }

    return (
        <div>
            <h3>Universal Button and Input</h3>
            <Input inputValue={inputValue} setInputValue={setInputValue} />
            <Button callback={addMessage} name={"+"}/>
            <ul>
                {messageList.map(m=><li>{m.message}</li>)}
            </ul>
        </div>
    )
};

