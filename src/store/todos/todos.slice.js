import { createSlice } from "@reduxjs/toolkit";
import { LOCAL_STORAGE_KEY as storageKey } from "../../utils/constants";

const initialState = {
    todos: [],
}

const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        setTodos: (state, action) => {
            state.todos = action.payload;

            localStorage.setItem(storageKey, JSON.stringify(state.todos));
        },
        addTodo: (state, action) => {
            state.todos.push(action.payload);

            localStorage.setItem(storageKey, JSON.stringify(state.todos));
        },
        updateTodo: (state, action) => {
            const index = state.todos.findIndex(todo => todo.id === +action.payload.id);
            state.todos = state.todos.filter(todo => todo.id !== +action.payload.id);
            state.todos.splice(index, 0, action.payload);

            localStorage.setItem(storageKey, JSON.stringify(state.todos));
        },
        dragTodo: (state, action) => {
            state.todos = state.todos.filter(todo => todo.id !== +action.payload.id);
            state.todos.push(action.payload);

            localStorage.setItem(storageKey, JSON.stringify(state.todos));
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== +action.payload);

            localStorage.setItem(storageKey, JSON.stringify(state.todos));
        },
    },
})

const todosAction = todosSlice.actions
const todosReducer = todosSlice.reducer

export { todosSlice, todosAction, todosReducer }
