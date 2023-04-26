import React, { useEffect } from "react";
import { View, Text, StyleSheet, Image, Pressable, Alert } from "react-native";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import withServices from "../utils/hoc/with-services";
import { fetchDeletePost } from "../redux/actions/fetch-posts";
import compose from "../utils/compose";

const PostScreen = ({ route, navigation, deletePost }) => {
	const { post } = route.params;
	useEffect(() => {
		navigation.setOptions({ headerTitle: post.title });
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
					deletePost(post.id);
					navigation.navigate("Home");
				},
			},
		]);
	};
	return (
		<View style={styles.container}>
			<View style={styles.wrap_img}>
				<Image style={styles.img} source={{ uri: post.image }} />
			</View>
			<View style={styles.header}>
				<View style={styles.wrap_title}>
					<Text style={styles.title}>{post.text} </Text>
				</View>
				<View style={styles.wrap_date}>
					<Text style={styles.date}>{post.date}</Text>
				</View>
			</View>
			<View style={styles.wrap_button}>
				<Pressable style={styles.button} title="Delete" onPress={onDeletePost}>
					<Text style={styles.button_text}>Delete</Text>
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
	},
	button: {
		width: "40%",
		paddingVertical: 10,
		paddingHorizontal: 14,

		borderStyle: "solid",
		borderWidth: 1,
		borderColor: "red",
		borderRadius: 30,
		justifyContent: "center",
	},
	button_text: {
		textAlign: "center",
		color: "red",
	},
});

const mapDispatchToProps = (dispatch, { services }) => {
	return bindActionCreators(
		{ deletePost: fetchDeletePost(services) },
		dispatch
	);
};
export default compose(
	withServices(),
	connect(null, mapDispatchToProps)
)(PostScreen);
