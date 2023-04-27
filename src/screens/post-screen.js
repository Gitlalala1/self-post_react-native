import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image, Pressable, Alert } from "react-native";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import withServices from "../utils/hoc/with-services";
import { fetchDeletePost, fetchUpdatePost } from "../redux/actions/fetch-posts";
import compose from "../utils/compose";
import ModalUpdatePost from "../components/modal-update-post";

const PostScreen = ({
	route,
	navigation,
	deletePost,
	updatePost,
	postList,
	loading,
}) => {
	const [modalVisible, setModalVisible] = useState(false);
	const { post } = route.params;
	const postItem = postList[postList.findIndex((el) => el.id == post.id)];

	useEffect(() => {
		navigation.setOptions({ headerTitle: postItem.title });
	}, [navigation]);
	const onDeletePost = () => {
		Alert.alert("Remove post", "You're shure?", [
			{
				text: "Cancel",
				onPress: () => console.log("Cancel Pressed"),
				style: "cancel",
			},
			{
				text: "Delete",
				onPress: () => {
					deletePost(postItem.id);
					navigation.navigate("Home");
				},
			},
		]);
	};
	return (
		<View style={styles.container}>
			<ModalUpdatePost
				visible={modalVisible}
				onCancel={setModalVisible}
				updatePost={updatePost}
				post={postItem}
			/>
			<View style={styles.wrap_img}>
				<Image style={styles.img} source={{ uri: postItem.image }} />
			</View>
			<View style={styles.header}>
				<View style={styles.wrap_title}>
					<Text style={styles.title}>{postItem.title} </Text>
				</View>
				<View style={styles.wrap_date}>
					<Text style={styles.date}>{postItem.date}</Text>
				</View>
			</View>
			<View style={styles.wrap_button}>
				<Pressable
					style={[styles.button, styles.button_update]}
					title="Update"
					onPress={() => {
						setModalVisible(true);
					}}
				>
					<Text style={{ textAlign: "center", color: "blue" }}>Update</Text>
				</Pressable>
			</View>
			<View style={styles.wrap_button}>
				<Pressable
					style={[styles.button, styles.button_delete]}
					title="Delete"
					onPress={onDeletePost}
				>
					<Text style={{ textAlign: "center", color: "red" }}>Delete</Text>
				</Pressable>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	wrap_img: {
		marginTop: 10,
		width: "100%",
		height: 250,
	},
	img: {
		width: "100%",
		height: "100%",
		resizeMode: "cover",
	},
	header: {
		marginTop: 10,
		marginBottom: 10,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-around",
	},
	wrap_title: {},
	title: {
		fontSize: 18,
		fontWeight: 500,
	},
	wrap_date: {},
	date: {},
	wrap_button: {
		justifyContent: "center",
		width: "100%",
		flexDirection: "row",
		marginBottom: 15,
	},
	button: {
		width: "40%",
		paddingVertical: 10,
		paddingHorizontal: 14,
		borderStyle: "solid",
		borderWidth: 1,

		borderRadius: 30,
		justifyContent: "center",
	},
	button_delete: { borderColor: "red" },
	button_update: { borderColor: "blue" },
});
const mapStateToProps = (state) => {
	const { error, loading, postList } = state;
	return { error, loading, postList };
};
const mapDispatchToProps = (dispatch, { services }) => {
	return bindActionCreators(
		{
			deletePost: fetchDeletePost(services),
			updatePost: fetchUpdatePost(services),
		},
		dispatch
	);
};
export default compose(
	withServices(),
	connect(mapStateToProps, mapDispatchToProps)
)(PostScreen);
