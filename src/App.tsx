import React, {useState} from 'react';
import './App.css';
import {TaskPropsType, Todolist, TopCarsType} from './Todolist';
import {Button} from "./Button";

export type ManyProps = {
    banknots: string
    value: number
    number: string

}

function App() {
    const mainTitle = "What to learn&";
    const mainTitle2 = "What to Bya"
    const tasks: Array<TaskPropsType> = [
        {id: 1, title: "HTML", isDone: true},
        {id: 2, title: "re", isDone: false},
        {id: 3, title: "fd", isDone: true}
    ];
    const tasks2: Array<TaskPropsType> = [
        {id: 1, title: "qqqqqqq", isDone: true},
        {id: 2, title: "eeeeeeee", isDone: false},
        {id: 3, title: "rrrrrr", isDone: true}
    ]

    const topCars: TopCarsType[] = [
        {manufacturer: 'BMW', model: 'm5cs'},
        {manufacturer: 'Mercedes', model: 'e63s'},
        {manufacturer: 'Audi', model: 'rs6'}
    ]
    const topCars2 = [
        {manufacturer: 'BMW', model: 'm5cs'},
        {manufacturer: 'Mercedes', model: 'e63s'},
        {manufacturer: 'Audi', model: 'rs6'}
    ]


    const [money, setMoney] = useState ([
        {banknots: 'Dollars', value: 100, number: ' a1234567890'},
        {banknots: 'Dollars', value: 50, number: ' z1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' w1234567890'},
        {banknots: 'Dollars', value: 100, number: ' e1234567890'},
        {banknots: 'Dollars', value: 50, number: ' c1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' r1234567890'},
        {banknots: 'Dollars', value: 50, number: ' x1234567890'},
        {banknots: 'RUBLS', value: 50, number: ' v1234567890'},
    ])

    // let filterMany = money.filter(f => f.banknots === "RUBLS");
    // console.log(filterMany)

    let [namee, setName] = useState("all");

    let filterMany = money;

    if (namee === "RUBLS") {
        filterMany = money.filter(f => f.banknots === "RUBLS");
    }
    if (namee === "Dollars") {
        filterMany = money.filter(f => f.banknots === "Dollars");
    }


    return (
        <div className="App">
            <Button filterMany={filterMany} setName={setName}/>
            <Todolist title={mainTitle} tasks={tasks} topCars={topCars}/>
            <Todolist title={mainTitle2} tasks={tasks2} topCars={topCars2}/>



        </div>
    );
}


export default App;
