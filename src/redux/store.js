import { configureStore, createListenerMiddleware } from "@reduxjs/toolkit";
import postReducer from "./slice/slicePost";

export default store = configureStore({
	reducer: {
		postReducer,
	},
});
