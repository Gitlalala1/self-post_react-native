import {
	postRequest,
	postSuccess,
	postError,
	addPost,
	deletePost,
	updatePost,
} from "../slice/slicePost";

const fetchGetPosts = (dispatch, services) => () => {
	console.log("start get fetch");
	dispatch(postRequest());
	services
		.getPosts()
		.then((data) => dispatch(postSuccess({ data })))
		.catch((error) => dispatch(postError({ error })));
};

const fetchAddPost = (dispatch) => (title, image) => {
	console.log("start add fetch");
	dispatch(postRequest());
	dispatch(addPost({ title, image }));
};
const fetchUpdatePost = () => {};
const fetchDeletePost = () => {};

export { fetchGetPosts, fetchAddPost, fetchUpdatePost, fetchDeletePost };
