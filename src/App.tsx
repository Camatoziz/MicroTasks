import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

const App=()=>{
    const firstSubscriber=()=>{
        console.log("Hello, I am Vasya!")
    }
    return(
        <div>
            <button onClick={firstSubscriber}>YouTube-1</button>
            {/*<button onClick={()=>{console.log("Hello!")}}>YouTube-2</button>*/}
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