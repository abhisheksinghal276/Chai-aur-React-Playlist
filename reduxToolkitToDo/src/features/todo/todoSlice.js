// Nanoid is used to create unique IDs
import {createSlice, nanoid} from '@reduxjs/toolkit'

const initialState = {
    todos: [{id: 1, text: "Hello World!"}]
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },
    }
})

// Exporting individual reducers to be used in components
export const {addTodo, removeTodo} = todoSlice.actions

// Registering the reducers into the store for store updation
export default todoSlice.reducer