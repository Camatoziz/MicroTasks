import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {Button} from './components/Button';
import {NewComponent} from './NewComponent';
/*
const App = () => {
    const Button1Foo=(subscriber: string)=>{
        console.log(subscriber)
    }
    const Button2Foo=(subscriber: string)=>{
        console.log(subscriber)
    }
    const Button3Foo=()=>{
        console.log("Im stupid button")
    }
    return (
        <div className='App'>
            <Button name={'YoutubeChanel-1'} callBack={()=>Button1Foo('Im Vasya')}/>
            <Button name={'YoutubeChanel-2'} callBack={()=>Button2Foo('Im Ivan')}/>
            <Button name={'WTF?'} callBack={Button3Foo}/>
        </div>
    )
}*/
/*
const App = () => {
    let [a, setA]=useState(0)

    const onClickHandler=()=>{
        setA(++a)
        console.log(a)
    }
    const onClickHandler0=()=>{
        setA(a=0)
        console.log(a)
    }
    return (<div>
            <h1>{a}</h1>
        <button onClick={onClickHandler}>+1</button>
        <button onClick={onClickHandler0}>0</button>
        </div>
    )
}
*/
type FilterType = 'All' | 'RUBLS' | 'Dollars'
const App = () => {
    const [money, setMoney] = useState([
        {banknots: 'Dollars', value: 100, number: ' a1234567890'},
        {banknots: 'Dollars', value: 50, number: ' z1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' w1234567890'},
        {banknots: 'Dollars', value: 100, number: ' e1234567890'},
        {banknots: 'Dollars', value: 50, number: ' c1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' r1234567890'},
        {banknots: 'Dollars', value: 50, number: ' x1234567890'},
        {banknots: 'RUBLS', value: 50, number: ' v1234567890'},
    ])
    const [filter, setFilter] = useState('All')
    let currentMoney = money
    if (filter === 'RUBLS') {
        currentMoney = money.filter(el => el.banknots === 'RUBLS')
    }
    if (filter === 'Dollars') {
        currentMoney = money.filter(el => el.banknots === 'Dollars')
    }
    const Filter = (banknots: string) => {
        setFilter(banknots)
    }


    return (
        <div>
            <NewComponent filteredArray={currentMoney} callBack={Filter}/>
        </div>
    )
}

/*import {Header} from './site/Header';
import {Footer} from './site/Footer';
import {Body} from './site/Body';

function App() {
  return (
   <div>
     <Header title={'NEW HEADER'}/>
     <Body titleForBody={'NEW BODY'}/>
     <Footer titleForFooter={'NEW FOOTER'}/>
   </div>
  );
}

export default App;*/

/*function App() {
    const topCars = [
        {manufacturer: 'BMW', model: 'm5cs'},
        {manufacturer: 'Mercedes', model: 'e63s'},
        {manufacturer: 'Audi', model: 'rs6'}
    ]

    return (
        <div>
            <NewComponent cars={topCars}/>
        </div>
    )*/

/*const [students, setStudents] = useState([
        {id: 1, name: "James", age: 8},
        {id: 2, name: "Robert", age: 18},
        {id: 3, name: "John", age: 28},
        {id: 4, name: "Michael", age: 38},
        {id: 5, name: "William", age: 48},
        {id: 6, name: "David", age: 58},
        {id: 7, name: "Richard", age: 68},
        {id: 8, name: "Joseph", age: 78},
        {id: 9, name: "Thomas", age: 88},
        {id: 10, name: "Charles", age: 98},
        {id: 11, name: "Christopher", age: 100},
    ]
)
return (
<div>
    <NewComponent students={students}/>
</div>
)*/


export default App;