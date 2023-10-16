import React, {useState} from 'react';
import FullInput from './FullInput';

const Mt0102 = () => {
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
            <FullInput addMessage={addMessage} buttonName={"+"}/>
            <ul>
                {messageList.map(m=><li>{m.message}</li>)}
            </ul>
        </div>
    )
};

export default Mt0102;