import React, { useEffect } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { connect } from "react-redux";

import compose from "../utils/compose";
import PostItem from "../components/post-item";
import THEME from "../THEME";
import { fetchGetPosts } from "../redux/actions/fetch-posts";
import withServices from "../hoc/with-services";
const MainScreen = ({ navigation, fetchGetPosts, postList }) => {
	useEffect(() => fetchGetPosts(), []);
	const openPost = (post) => {
		navigation.navigate("Post", { post });
	};

	return (
		<View style={styles.container}>
			<FlatList
				data={postList}
				keyExtractor={(item) => item.id.toString()}
				renderItem={({ item }) => <PostItem item={item} openPost={openPost} />}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		marginHorizontal: THEME.MARGIN_HORIZONTAL,
		marginTop: THEME.MARGIN_TOP,
	},
});

const mapStateToProps = (state) => {
	const { error, loading, postList } = state;
	return { error, loading, postList };
};
const mapDispatchToProps = (dispatch, { services }) => {
	return {
		fetchGetPosts: () => fetchGetPosts(dispatch, services)(),
	};
};

export default compose(
	withServices(),
	connect(mapStateToProps, mapDispatchToProps)
)(MainScreen);
