import React, { useState, useEffect, useCallback } from "react";
import { View, Text } from "react-native";
import { useFonts } from "expo-font";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";

import Navigation from "./src/components/navigation";
SplashScreen.preventAutoHideAsync();
const App = () => {
	const [appReady, setAppReady] = useState(false);

	useEffect(() => {
		async function prepare() {
			try {
				await Font.loadAsync({
					"tillana-bold": require("./assets/fonts/Tillana-Bold.ttf"),
					"tillana-extraBold": require("./assets/fonts/Tillana-ExtraBold.ttf"),
					"tillana-medium": require("./assets/fonts/Tillana-Medium.ttf"),
					"tillana-regular": require("./assets/fonts/Tillana-Regular.ttf"),
					"tillana-semiBold": require("./assets/fonts/Tillana-Bold.ttf"),
				});
			} catch (error) {
				console.log(error);
			} finally {
				setAppReady(true);
			}
		}
		prepare();
	}, []);

	const onLayout = useCallback(async () => {
		if (appReady) {
			await SplashScreen.hideAsync();
			console.log(Font.isLoaded("tillana-medium"));
		}
	}, [appReady]);
	if (!appReady) return null;

	return (
		<View onLayout={onLayout} style={{ flex: 1 }}>
			<Navigation />
		</View>
	);
};

export default App;

// tillana_bold: require("./assets/fonts/Tillana-Bold.ttf"),
// tillana_extraBold: require("./assets/fonts/Tillana-ExtraBold.ttf"),
// tillana_medium: require("./assets/fonts/Tillana-Medium.ttf"),
// tillana_regular: require("./assets/fonts/Tillana-Regular.ttf"),
// tillana_semiBold: require("./assets/fonts/Tillana-Bold.ttf"),
