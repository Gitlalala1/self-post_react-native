import {
	fetchPostError,
	fetchPostSuccess,
	fetchPostRequest,
} from "../slice/slicePost";

const fetchGetPosts = (dispatch, services) => () => {
	console.log("start fetch");
	dispatch(fetchPostRequest());
	services
		.getPosts()
		.then((data) => dispatch(fetchPostSuccess({ data })))
		.catch((error) => dispatch(fetchPostError({ error })));
};

export default fetchGetPosts;
