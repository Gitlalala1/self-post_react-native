import {
	postRequest,
	postSuccess,
	postError,
	addPost,
	deletePost,
	updatePost,
} from "../slice/slicePost";
import * as FileSystem from "expo-file-system";

const fetchGetPosts = (services) => () => (dispatch) => {
	dispatch(postRequest());
	services
		.getPosts()
		.then((data) => dispatch(postSuccess({ data })))
		.catch((error) => dispatch(postError({ error })));
};

const loadingFile = (image, dispatch) => {
	const fileName = image.split("/").pop();
	const pathImage = FileSystem.documentDirectory + fileName;

	const load = async () => {
		try {
			await FileSystem.moveAsync({
				to: pathImage,
				from: image,
			});
		} catch (error) {
			dispatch(postError({ error }));
		}
	};
	load();
	return pathImage;
};

const fetchAddPost =
	(services) =>
	(title, image, date, booked = 0) =>
	async (dispatch) => {
		console.log("start add fetch");
		const pathImg = await loadingFile(image, dispatch);
		const newPost = { title, image: pathImg, date, booked };

		await services
			.addPost(newPost)
			.then((result) => dispatch(addPost({ id: result.insertId, ...newPost })))
			.catch((e) => dispatch(postError({ error: e })));
	};
const fetchUpdatePost = () => {};
const fetchDeletePost = (services) => (id) => async (dispatch, getState) => {
	console.log(getState());
	await services
		.deletePost({ id })
		.then(() => dispatch(deletePost({ id })))
		.catch((e) => dispatch(postError({ error: e })));
};

export { fetchGetPosts, fetchAddPost, fetchUpdatePost, fetchDeletePost };
