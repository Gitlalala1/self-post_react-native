import * as Font from "expo-font";
import * as ImagePicker from "expo-image-picker";
import { PermissionsAndroid } from "react-native";
import { DB } from "../database/db";
const services = new DB();

const permissionsProject = async () => {
	console.log("start permissons");
	await ImagePicker.requestMediaLibraryPermissionsAsync();
	await ImagePicker.requestCameraPermissionsAsync();
	const granted = await PermissionsAndroid.request(
		PermissionsAndroid.PERMISSIONS.READ_CALENDAR,
		{
			title: "Cool Calendar Permission",
			message: "Give me you're calendaaar ",
			buttonNeutral: "Ask Me Later",
			buttonNegative: "Cancel",
			buttonPositive: "OK",
		}
	);
	if (granted === PermissionsAndroid.RESULTS.GRANTED) {
		console.log("You can use the calendar");
	}
};

const initProject = async () => {
	await permissionsProject();
	await services.init();
	await Font.loadAsync({
		"tillana-bold": require("../../assets/fonts/Tillana-Bold.ttf"),
		"tillana-extraBold": require("../../assets/fonts/Tillana-ExtraBold.ttf"),
		"tillana-medium": require("../../assets/fonts/Tillana-Medium.ttf"),
		"tillana-regular": require("../../assets/fonts/Tillana-Regular.ttf"),
		"tillana-semiBold": require("../../assets/fonts/Tillana-Bold.ttf"),
	});
};

export { initProject, services };
