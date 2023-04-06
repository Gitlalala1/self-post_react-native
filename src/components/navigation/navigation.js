import React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Ionicons from "@expo/vector-icons/Ionicons";
import MainScreen from "../../screens/main-screen";
import PostScreen from "./../../screens/post-screen";
import THEME from "../../THEME";
import HeaderNavigation from "../header-navigation";
const Stack = createNativeStackNavigator();
const Navigation = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator
				initialRouteName="Home"
				headerMode="screen"
				screenOptions={{
					headerTintColor: "white",
					headerStyle: {
						backgroundColor: THEME.MAIN_COLOR,
						justifyContent: "center",
						alignItems: "center",
						flexDirection: "row",
					},
					headerTitleAlign: "center",
					headerBackVisible: true,
					animation: "slide_from_left",
					header: ({ navigation, route, options, back }) => (
						<HeaderNavigation
							navigation={navigation}
							options={options}
							back={back}
							route={route}
						/>
					),
				}}
			>
				<Stack.Screen
					name="Home"
					component={MainScreen}
					options={{
						headerTitle: "My blog",
					}}
				/>
				<Stack.Screen
					name="Post"
					component={PostScreen}
					options={{
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
