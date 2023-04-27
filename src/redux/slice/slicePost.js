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
			console.log("start fetch");
			state.loading = true;
		},
		postSuccess: (state, action) => {
			state.postList = action.payload.data;
			state.loading = false;
			console.log("success");
		},
		addPost: (state, action) => {
			console.log("start add");
			state.postList = [action.payload, ...state.postList];
		},
		deletePost: (state, action) => {
			console.log("start delete");
			const itemIndex = state.postList.findIndex(
				(el) => el.id == action.payload.id
			);
			state.postList = [
				...state.postList.slice(0, itemIndex),
				...state.postList.slice(itemIndex + 1),
			];
		},
		updatePost: (state, action) => {
			console.log("start update");
			const itemIndex = state.postList.findIndex(
				(el) => el.id == action.payload.id
			);
			const item = state.postList[itemIndex];
			const newItem = { ...item, ...action.payload };
			state.postList = [
				...state.postList.slice(0, itemIndex),
				newItem,
				...state.postList.slice(itemIndex + 1),
			];
			console.log(state);
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
