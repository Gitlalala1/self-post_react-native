import React, { useState, useEffect } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import PostItem from "../components/post-item";
import data from "../data";
import THEME from "../THEME";
const MainScreen = () => {
	return (
		<View style={styles.container}>
			<FlatList
				data={data}
				keyExtractor={(item) => item.id.toString()}
				renderItem={({ item }) => <PostItem item={item} />}
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
export default MainScreen;
