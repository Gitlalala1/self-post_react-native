import { createSlice } from "@reduxjs/toolkit";
import nextId from "react-id-generator";
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
			const newPost = {
				id: nextId(),
				img: action.payload.image,
				text: action.payload.title,
				date: new Date().toJSON(),
				booked: false,
			};
			state.postList = [newPost, ...state.postList];
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
			console.log("error");
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
