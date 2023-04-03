import React, { useState, useEffect, useCallback } from "react";
import { View, Text } from "react-native";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";

import Navigation from "./src/components/navigation";
SplashScreen.preventAutoHideAsync();
const App = () => {
	const [appIsReady, setAppIsReady] = useState(false);

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
				setAppIsReady(true);
			}
		}
		prepare();
	}, []);

	const onLayout = useCallback(async () => {
		if (appIsReady) {
			await SplashScreen.hideAsync();
		} else {
			return null;
		}
	}, [appIsReady]);

	return (
		<View onLayout={onLayout} style={{ flex: 1 }}>
			<Navigation />
		</View>
	);
};

export default App;
