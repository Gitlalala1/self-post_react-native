import React, { useState } from "react";
import * as ImagePicker from "expo-image-picker";

import PhotoPicker from "../create-post/photo-picker";
import {
	View,
	Modal,
	Text,
	TextInput,
	Pressable,
	StyleSheet,
} from "react-native";
const ModalUpdatePost = ({ visible, onCancel, updatePost, post }) => {
	const [value, setValue] = useState(post.title);
	const [image, setImage] = useState(null);

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
		<Modal visible={visible} animationType="slide" transparent={false}>
			<View style={style.modal}>
				<TextInput
					style={style.modal.input}
					autoCapitalize="none"
					autoCorrect={false}
					value={value}
					onChangeText={setValue}
				/>
				<PhotoPicker pickImage={pickImage} image={image} />
				<View style={style.modal.buttons}>
					<Pressable onPress={() => onCancel(false)}>
						<Text>Cancel</Text>
					</Pressable>
					<Pressable
						onPress={() => {
							updatePost({ id: post.id, title: value, image });
							setImage(null);
							onCancel(false);
						}}
					>
						<Text>Save</Text>
					</Pressable>
				</View>
			</View>
		</Modal>
	);
};
const style = StyleSheet.create({
	modal: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		width: "100%",
		input: {
			display: "flex",
			justifyContent: "center",
			width: "80%",
			borderColor: "blue",
			borderWidth: 1,
			borderStyle: "solid",
			paddingHorizontal: 15,
			paddingVertical: 10,
			marginBottom: 10,
		},
		buttons: {
			width: "80%",
			flexDirection: "row",
			justifyContent: "space-between",
		},
	},
});

export default ModalUpdatePost;
