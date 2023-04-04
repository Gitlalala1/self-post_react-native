import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";

const PostScreen = ({ route, navigation, setParams }) => {
	// const [value, onChangeText] = React.useState(route.params.title);
	const { post } = route.params;

	useEffect(() => {
		navigation.setOptions({ title: post.text });
	}, [navigation]);

	// React.useEffect(() => {
	// 	navigation.setOptions({
	// 		title: postId,
	// 	});
	// }, [navigation, value]);
	return (
		<View style={styles.container}>
			<Text>{post.text}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
});
export default PostScreen;
