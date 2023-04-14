import React from "react";

function Task ({task}){
    const {id, title, completed} = task;
    const date = new Date();
    return (
        <tr>
            <td>{id}</td>
            <td>{title}</td>
            <td>{completed? 'Завдання виконане' : 'Позначити виконаним?'}</td>
            <td>{`${date.getFullYear()}-${date.getMonth()+1 > 10 ? date.getMonth()+1 : "0" + (date.getMonth()+1)}-${date.getDate()}`}</td>
        </tr>
       
    )
}

export default Task;
