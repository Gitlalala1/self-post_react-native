import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	postList: [
		{
			id: "1",
			img: "https://i.dummyjson.com/data/products/3/thumbnail.jpg",
			text: "BomBam lala",
			date: new Date().toJSON(),
			booked: false,
		},
		{
			id: "2",
			img: "https://i.dummyjson.com/data/products/3/thumbnail.jpg",
			text: "lolal treit tu",
			date: new Date().toJSON(),
			booked: false,
		},
		{
			id: "3",
			img: "https://i.dummyjson.com/data/products/3/thumbnail.jpg",
			text: "kolachamber lala",
			date: new Date().toJSON(),
			booked: false,
		},
		{
			id: "4",
			img: "https://i.dummyjson.com/data/products/3/thumbnail.jpg",
			text: "rum rum rara",
			date: new Date().toJSON(),
			booked: false,
		},
		{
			id: "5",
			img: "https://i.dummyjson.com/data/products/3/thumbnail.jpg",
			text: "popop papapa",
			date: new Date().toJSON(),
			booked: false,
		},
	],
	loading: false,
	error: false,
};

const slicePost = createSlice({
	name: "post",
	initialState,
	reducers: {
		fetchPostRequest: (state) => {
			state.loading = true;
			console.log("request");
		},
		fetchPostSuccess: (state) => {
			state.loading = false;
			console.log("success");
		},
		fetchPostError: (state) => {
			state.loading = false;
			state.error = true;
			console.log("error");
		},
	},
});

const { actions, reducer: postReducer } = slicePost;

export const { fetchPostRequest, fetchPostSuccess, fetchPostError } = actions;
export default postReducer;
