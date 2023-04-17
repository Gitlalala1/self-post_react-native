import { configureStore } from "@reduxjs/toolkit";

import postReducer from "./slice/slicePost";

export const store = configureStore({ reducer: postReducer });
