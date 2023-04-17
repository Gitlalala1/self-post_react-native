import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	postList: [],
	loading: true,
	error: false,
};

const slicePost = createSlice({
	name: "post",
	initialState,
	reducers: {
		fetchPostRequest: (state) => {
			console.log("request");
		},
		fetchPostSuccess: (state, action) => {
			state.postList = action.payload.data;
			state.loading = false;
			console.log("success");
		},
		fetchPostError: (state, action) => {
			state.loading = false;
			state.error = action.payload.error;
			console.log("error");
		},
	},
});

const { actions, reducer: postReducer } = slicePost;

export const { fetchPostRequest, fetchPostSuccess, fetchPostError } = actions;
export default postReducer;
