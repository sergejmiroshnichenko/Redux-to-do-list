import React from 'react';
import styles from './TodoItem.module.scss'
import { removeNote, toggleCompleted } from "../../store/todoSlice";
import { useDispatch } from "react-redux";


const TodoItem = ({ id, completed, value }) => {

    const dispatch = useDispatch()

    return (
        <>
            <li key={id} className={styles.todo}>
                <input onChange={() => dispatch(toggleCompleted({ id }))}
                       type="checkbox"
                       checked={completed}
                />
                <span>&nbsp;{value}</span>
                <span className={styles.todo_delete}
                      onClick={() => dispatch(removeNote({ id }))}>&nbsp; &#10008;</span>
            </li>
        </>
    );
};

export default TodoItem;