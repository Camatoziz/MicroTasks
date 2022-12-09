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
    const Filter = (banknots: string) => {
        props.callBack()
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
            <Button name={'All'} callBack={() => Filter('All')}/>
            <Button name={'RUBLS'} callBack={() => Filter('RUBLS')}/>
            <Button name={'Dollars'} callBack={() => Filter('Dollars')}/>
        </div>
    )
}