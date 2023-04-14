import React, { useEffect } from "react";
import { View, Text, StyleSheet, Image, Pressable, Alert } from "react-native";
import { connect } from "react-redux";
import { fetchPostRequest } from "../redux/slice/slicePost";
const PostScreen = ({ route, navigation, postList, fetchPosts }) => {
	const { post } = route.params;
	useEffect(() => {
		fetchPosts();
		navigation.setOptions({ headerTitle: post.text });
	}, [navigation]);
	const onDeletePost = () => {
		Alert.alert("Remove post", "You're shure?", [
			{
				text: "Cancel",
				onPress: () => console.log("Cancel Pressed"),
				style: "cancel",
			},
			{ text: "Delete", onPress: () => console.log("OK Pressed") },
		]);
	};
	return (
		<View style={styles.container}>
			<View style={styles.wrap_img}>
				<Image style={styles.img} source={{ uri: post.img }} />
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
		width: "100%",
		height: 400,
	},
	img: {
		flex: 1,
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

const mapStateToProps = (state) => {
	return state;
};
const mapDispatchToProps = (dispatch) => {
	return {
		fetchPosts: () => dispatch(fetchPostRequest()),
	};
};
export default connect(mapStateToProps, mapDispatchToProps)(PostScreen);
