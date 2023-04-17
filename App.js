import React, { useState, useEffect, useCallback } from "react";
import { Provider } from "react-redux";
import { View } from "react-native";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";

import store from "./src/redux/store";
import Navigation from "./src/components/navigation";
import { ServiceProvider } from "./src/context/context";
import Services from "./src/services/services";

const services = new Services();
SplashScreen.preventAutoHideAsync();
export default function App() {
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
			<Provider store={store}>
				<ServiceProvider value={services}>
					<Navigation />
				</ServiceProvider>
			</Provider>
		</View>
	);
}
