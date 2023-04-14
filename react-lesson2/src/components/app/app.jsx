import React from 'react';
import {Title} from '../title/title';
import  TodoList from '../todo-list/todo-list';
import {list} from '../../data/list';


function App (){
    return (
        <>
            <Title></Title>
            <TodoList data={list}></TodoList>
        </>
    )
}

export default App;