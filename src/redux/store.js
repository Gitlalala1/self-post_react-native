import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import postReducer from "./slice/slicePost";

export const store = configureStore({
	reducer: postReducer,
	middleware: [thunk],
});
