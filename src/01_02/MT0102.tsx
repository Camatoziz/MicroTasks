import React, {useState} from 'react';
import FullInput from './FullInput';

export const MT0102 = () => {
    const [messageList, setMessageList]=useState([
        {message: "Hello"},
        {message: "My"},
        {message: "World"}
    ])

    const addMessage =(newMessage: string)=>{
        setMessageList([{message: newMessage}, ...messageList])
    }

    return (
        <div>
            <h3>FullInput</h3>
            <FullInput addMessage={addMessage} buttonName={"+"}/>
            <ul>
                {messageList.map(m=><li>{m.message}</li>)}
            </ul>
        </div>
    )
};

