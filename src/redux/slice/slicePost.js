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
		postRequest: (state) => {
			console.log("request");
		},
		postSuccess: (state, action) => {
			state.postList = action.payload.data;
			state.loading = false;
			console.log("success");
		},
		addPost: (state, action) => {
			state.postList = [action.payload, ...state.postList];
		},
		deletePost: (state) => {
			return state;
		},
		updatePost: (state) => {
			console.log("error");
			return state;
		},
		postError: (state, action) => {
			state.loading = false;
			state.error = action.payload.error;
			console.log("Error:" + action.payload.error);
		},
	},
});

const { actions, reducer: postReducer } = slicePost;

export const {
	postRequest,
	postSuccess,
	postError,
	addPost,
	deletePost,
	updatePost,
} = actions;
export default postReducer;
