import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./features/todo/todoSlice"; //it's called todoReducer but is the todoSlice constant

const store = configureStore({
  reducer: {
    todos: todoReducer,
  },
});

export default store;
