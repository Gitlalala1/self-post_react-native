import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
const MainScreen = ({ navigation }) => {
	const onPress = () => {
		navigation.navigate("Post", { name: "tarik" });
	};

	return (
		<View style={styles.container}>
			<Text>Main screenlalala</Text>
			<Button title="press me" onPress={onPress} />
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
export default MainScreen;
