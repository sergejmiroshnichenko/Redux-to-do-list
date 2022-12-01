import React from 'react';
import TodoItem from '../todoItem/TodoItem';
import { useSelector } from 'react-redux'


const TodoList = () => {

    const todo = useSelector(state => state.todo.todo)

    return (
        <ul>
            {
                todo.map(item => <TodoItem key={item.id} {...item} />)
            }
        </ul>
    );
};

export default TodoList;