import { type } from '@testing-library/user-event/dist/type';
import React from 'react';
import './App.css';
import {Button} from "./Button";



export type TaskPropsType = {
 id: number
 title: string
 isDone: boolean
}

type TodolistPropsType = {
 title: string
 tasks: Array<TaskPropsType>
    topCars: TopCarsType[]
}
export type TopCarsType={
    manufacturer: string
    model: string
}

export function Todolist(props: TodolistPropsType) {

    const listTasks = props.tasks.length 
    ? 
    props.tasks.map(task => {
        return (
            <li key={task.id}><input type="checkbox" checked={task.isDone} /> <span>{task.title}</span></li>
        )
    }) : <span>List is empty</span>

    const listCars = props.topCars.map(c => {
            return (
                <li>{c.manufacturer} {c.model}</li>
            )
        });
    const foo = (name:string) => {
        console.log(name);
    }

    const foo2 = (name:string) => {
        console.log(name);
    }

    return (
       
            <div>
                <h3>{props.title}</h3>


                {/*<Button />*/}
                <div>
                    <input />
                    <button>+</button>
                </div>
                <ul>
                    {listTasks }
                </ul>

                <ul>
                    {listCars }
                </ul>
                <div>
                    <button>All</button>
                    <button>Active</button>
                    <button>Completed</button>
                </div>
            </div>
    
    );
}
