import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todos: [],
}

const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        setTodos: (state, action) => {
            state.todos = action.payload;
            localStorage.setItem("kanban/todos", JSON.stringify(state.todos));
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload);
            localStorage.setItem("kanban/todos", JSON.stringify(state.todos));
        },
        addTodo: (state, action) => {
            state.todos.push(action.payload);
            localStorage.setItem("kanban/todos", JSON.stringify(state.todos));
        },
    },
})

const todosAction = todosSlice.actions
const todosReducer = todosSlice.reducer

export { todosSlice, todosAction, todosReducer }
