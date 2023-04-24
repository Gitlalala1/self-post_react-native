import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TextInput, Pressable } from "react-native";
import { connect } from "react-redux";
import * as ImagePicker from "expo-image-picker";
import PhotoPicker from "../components/create-post/photo-picker";
import { bindActionCreators } from "redux";

import compose from "../utils/compose";
import withServices from "../utils/hoc/with-services";
import { fetchAddPost } from "../redux/actions/fetch-posts";
const CreatePost = ({ addPosts, navigation }) => {
	const [title, setTitle] = useState();
	const [image, setImage] = useState(null);
	const getPremiss = async () => {
		await ImagePicker.getMediaLibraryPermissionsAsync().then((perm) =>
			console.log(perm)
		);
	};
	useEffect(() => {
		getPremiss();
	}, []);
	const pickImage = async () => {
		let result = await ImagePicker.launchImageLibraryAsync({
			mediaTypes: ImagePicker.MediaTypeOptions.Images,
			allowsEditing: true,
			aspect: [5, 3],
			quality: 1,
		});

		if (!result.canceled) {
			setImage(result.assets[0].uri);
		}
	};

	return (
		<View style={styles.container}>
			<View style={styles.wrap_form}>
				<View style={styles.wrap_input}>
					<TextInput
						style={styles.form_input}
						autoFocus={false}
						placeholder="Writing title post"
						onChangeText={(newText) => setTitle(newText)}
						defaultValue={title}
					/>
				</View>
				<View style={styles.wrap_input}>
					<PhotoPicker pickImage={pickImage} image={image} />
				</View>
				<View style={styles.wrap_button}>
					<Pressable
						style={styles.button}
						onPress={() => {
							addPosts(title, image, new Date().toJSON());

							navigation.navigate("Home");
						}}
					>
						<Text style={styles.button_text}>Add</Text>
					</Pressable>
				</View>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		marginHorizontal: THEME.MARGIN_HORIZONTAL,
		marginTop: THEME.MARGIN_TOP,
	},
	wrap_form: {
		width: "80%",
	},
	wrap_input: {
		marginBottom: 15,
	},
	form_input: {
		width: "100%",
		height: 40,

		borderWidth: 1,
		padding: 10,
	},

	wrap_button: {
		justifyContent: "center",
		width: "100%",
		flexDirection: "row",
	},
	button: {
		width: "60%",
		paddingVertical: 10,
		paddingHorizontal: 14,

		borderStyle: "solid",
		borderWidth: 1,
		borderColor: "blue",
		borderRadius: 10,
		justifyContent: "center",
	},
	button_text: {
		textAlign: "center",
		color: "blue",
	},
});

const mapStateToProps = (state) => {
	return state;
};
const mapDispatchToProps = (dispatch, { services }) => {
	return bindActionCreators({ addPosts: fetchAddPost(services) }, dispatch);
};

export default compose(
	withServices(),
	connect(mapStateToProps, mapDispatchToProps)
)(CreatePost);
