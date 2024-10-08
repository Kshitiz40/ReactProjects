import { configureStore } from "@reduxjs/toolkit";
import todoReducder from '../features/todo/todoSlice';

export const store = configureStore({
    reducer : todoReducder
})