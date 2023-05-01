import React, { useState, useEffect, useCallback } from "react";
import { Provider } from "react-redux";
import { View } from "react-native";
import * as SplashScreen from "expo-splash-screen";

import { initProject, services } from "./src/init-project";
import { store } from "./src/redux/store";
import Navigation from "./src/components/navigation";
import { ServiceProvider } from "./src/utils/context/context";
// token: vLCnXY4u60nc84xJFr2D13VbGgXpMHTLJZb610N3
SplashScreen.preventAutoHideAsync();
export default function App() {
	const [appReady, setAppReady] = useState(false);

	useEffect(() => {
		async function prepare() {
			try {
				initProject();
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
			console.log("Font.isLoaded is ok");
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
