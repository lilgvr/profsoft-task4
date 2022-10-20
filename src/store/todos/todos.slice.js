import { createSlice } from "@reduxjs/toolkit";
import { LS_KEY } from "../../utils/constants";

const initialState = {
    todos: [],
}

const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        setTodos: (state, action) => {
            state.todos = action.payload;
            localStorage.setItem(LS_KEY, JSON.stringify(state.todos));
        },
        addTodo: (state, action) => {
            state.todos.push(action.payload);
            localStorage.setItem(LS_KEY, JSON.stringify(state.todos));
        },
        updateTodo: (state, action) => {
            const index = state.todos.findIndex(todo => todo.id === +action.payload.id);
            state.todos = state.todos.filter(todo => todo.id !== +action.payload.id);
            state.todos.splice(index, 0, action.payload);
            localStorage.setItem(LS_KEY, JSON.stringify(state.todos));
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== +action.payload);
            localStorage.setItem(LS_KEY, JSON.stringify(state.todos));
        },
    },
})

const todosAction = todosSlice.actions
const todosReducer = todosSlice.reducer

export { todosSlice, todosAction, todosReducer }
