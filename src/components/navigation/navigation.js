import React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainScreen from "../../screens/main-screen";
import PostScreen from "./../../screens/post-screen";
import THEME from "../../THEME";
const Stack = createNativeStackNavigator();
const Navigation = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator
				initialRouteName="Home"
				headerMode="screen"
				screenOptions={{
					headerTintColor: "white",
					headerStyle: { backgroundColor: THEME.MAIN_COLOR },
					headerTitleAlign: "center",
				}}
			>
				<Stack.Screen name="Home" component={MainScreen} />
				<Stack.Screen
					name="Post"
					component={PostScreen}
					options={{
						headerTitle: "Мой пост",
						headerStyle: {
							backgroundColor: "red",
						},
					}}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
};
export default Navigation;
