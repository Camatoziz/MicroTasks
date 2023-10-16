import React from 'react'

type ButtonPropsType = {
    name: string

    callback: ()=>void
}

const Button = (props: ButtonPropsType) => {
    return (
        <button onClick={props.callback}>{props.name}</button>
    );
};

export default Button;