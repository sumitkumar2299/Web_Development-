import { configureStore } from "@reduxjs/toolkit";
import { todoSlice } from "../Features/TODO/todoSlice";
export const store = configureStore({
    reducer: todoSlice.reducer
})