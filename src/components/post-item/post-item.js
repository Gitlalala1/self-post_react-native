import React from "react";
import {
	View,
	Text,
	StyleSheet,
	ImageBackground,
	TouchableOpacity,
} from "react-native";
const PostItem = ({ item, openPost }) => {
	return (
		<TouchableOpacity activeOpacity={0.8} onPress={() => openPost(item)}>
			<View style={styles.container}>
				<ImageBackground style={styles.image} source={{ uri: item.img }}>
					<View style={styles.wrap_date}>
						<Text style={styles.date}>{item.date}</Text>
					</View>
					<View style={styles.wrap_title}>
						<Text style={styles.title}>{item.text}</Text>
					</View>
				</ImageBackground>
			</View>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginBottom: 25,
		width: "100%",
	},
	image: {
		width: "100%",
		height: 200,
		justifyContent: "space-between",
	},
	wrap_date: {
		backgroundColor: "rgba(0,0,0,0.5)",
		paddingVertical: 5,
	},
	date: {
		color: "#fff",
		width: "100%",
		textAlign: "center",
		fontFamily: "tillana-medium",
	},
	wrap_title: {
		paddingVertical: 5,
		backgroundColor: "rgba(255,255,255,0.8)",
	},
	title: {
		fontFamily: "tillana-medium",
		textAlign: "center",
		fontSize: 20,
	},
});
// tillana-medium
export default PostItem;
