import React from "react";
import './todo-list.css';
import { Thead } from "./thead/thead";
import Task from "./task/task";


const TodoList = ({data}) => {
    const headers = ["№", "Назва задачі", "Статус", "Дата зміни"];
    return (
        <table lang='uk'>
            <Thead headers={headers}></Thead>
            <tbody>
                {
                    Array.isArray(data) ? data.map((e, i) => {
                    return <Task task={e}></Task>})
                    : null
                }
                
            </tbody>  
        </table>
    )
}


export default TodoList;