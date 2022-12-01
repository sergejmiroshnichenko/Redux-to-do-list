import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: 'todo',
    initialState: {
        todo: [],
    },
    reducers: {
        addNote(state, action) {
            state.todo.push({
                value: action.payload.value,
                id: Math.random(),
                completed: false,
            })
        },
        removeNote(state, action) {
            state.todo = state.todo.filter(({ id }) => id !== action.payload.id)
        },
        toggleCompleted(state, action) {
            // state.todo = state.todo.map(item => {
            //     if (item.id !== action.payload.id) return item
            //     return {
            //         ...item,
            //         completed: !item.completed
            //     }
            // })
            const toggledTodo = state.todo.find(({ id }) => id === action.payload.id);
            toggledTodo.completed = !toggledTodo.completed;
        },
    }
})

export const { addNote, removeNote, toggleCompleted } = todoSlice.actions;

export default todoSlice.reducer