import React, { useState } from 'react';
import styles from './App.module.scss';
import Input from '../Input/Input'
import TodoList from '../todoList/TodoList'
import { useDispatch } from 'react-redux'
import { addNote } from '../../store/todoSlice'


const App = () => {

    const [value, setValue] = useState('');
    const dispatch = useDispatch();

    const addTask = () => {
        if (value.length) {
            dispatch(addNote({ value }));
            setValue('')
        }
    }

    return (
        <div className={styles.root}>
            <Input addTask={addTask} setValue={setValue} value={value}/>
            <TodoList/>
        </div>
    );
}

export default App;
