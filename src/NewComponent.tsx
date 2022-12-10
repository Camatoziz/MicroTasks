import {Button} from './components/Button';
import React from 'react';
import app from './App';
type NewComponentType = {
    filteredArray: Array<NewComponentTypeArray>
    callBack:any
}
type NewComponentTypeArray = {
    banknots: string
    value: number
    number: string
}
export const NewComponent = (props: NewComponentType) => {
    const onAllButtonClick = () => {
        props.callBack('All')
    }

    const onRublslButtonClick = () => {
        props.callBack('RUBLS')
    }

    const onDollarsButtonClick = () => {
        props.callBack('Dollars')
    }

    return (
        <div>
            <ul>
                {props.filteredArray.map((el, index) => {
                    return <li key={index}>
                        <span>{el.banknots}</span>
                        <span>{el.value}</span>
                        <span>{el.number}</span>
                    </li>
                })}
            </ul>
            <Button name={'All'} callBack={props.callBack}/>
            <Button name={'RUBLS'} callBack={props.callBack}/>
            <Button name={'Dollars'} callBack={props.callBack}/>
        </div>
    )
}