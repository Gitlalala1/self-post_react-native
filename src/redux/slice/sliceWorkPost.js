import { CreateSlice } from "@reduxjs/toolkit";

const slicePost = createSlice({
	name: "WorkPost",
	initialState: [],
	reducers: {
		workRequest: (state) => {
			state.loading = true;
		},
		addPost: (state, action) => {
			state = {
				loading: false,
				error: false,
				postList: [
					...state.postList,
					{
						id: "10",
						img: "https://m.media-amazon.com/images/I/91unqTHUwrL.png",
						text: "BomBam lala",
						date: new Date().toJSON(),
						booked: false,
					},
				],
			};
		},
		deletePost: (state) => {},
		updatePost: (state) => {
			console.log("error");
		},
	},
});

const { actions, reducer: postReducer } = slicePost;

export const { fetchPostRequest, fetchPostSuccess, fetchPostError } = actions;
export default postReducer;
