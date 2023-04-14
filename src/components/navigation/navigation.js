import React from "react";
import { Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import { createDrawerNavigator } from "@react-navigation/drawer";

import MainScreen from "../../screens/main-screen";
import PostScreen from "./../../screens/post-screen";
import BookedScreen from "../../screens/booked-screen";
import AboutScreen from "../../screens/about-screen";
import THEME from "../../THEME";
import HeaderNavigation from "../header-navigation";

const TabNavigator = createBottomTabNavigator();
const NativeNavigator = createNativeStackNavigator();
const DrawerNavigator = createDrawerNavigator();
const Navigation = () => {
	return (
		<NavigationContainer>
			<DrawerNavigator.Navigator screenOptions={{ headerShown: false }}>
				<DrawerNavigator.Screen name="Home" component={TabHome} />
				<DrawerNavigator.Screen name="About Screen" component={NativeAbout} />
			</DrawerNavigator.Navigator>
		</NavigationContainer>
	);
};

const TabHome = () => {
	return (
		<TabNavigator.Navigator
			screenOptions={({ route }) => ({
				headerShown: false,
				tabBarInactiveTintColor: "gray",
				tabBarActiveTintColor: THEME.MAIN_COLOR,
				tabBarIcon: ({ focused, color, size }) => {
					if (route.name === "Home") {
						return (
							<Ionicons
								name={focused ? "home" : "home-outline"}
								size={size}
								color={THEME.MAIN_COLOR}
							/>
						);
					}
					if (route.name === "Booked Screen") {
						return (
							<FontAwesome
								name={focused ? "star" : "star-o"}
								size={size}
								color={THEME.MAIN_COLOR}
							/>
						);
					}
				},
			})}
		>
			<TabNavigator.Screen name="Home" component={NativeHome} />
			<TabNavigator.Screen name="Booked Screen" component={NativeBooked} />
		</TabNavigator.Navigator>
	);
};

const NativeAbout = () => {
	return (
		<NativeNavigator.Navigator screenOptions={ScreenOptions}>
			<NativeNavigator.Screen
				name="About Screen"
				component={AboutScreen}
				options={{ headerTitle: "About Screen" }}
			/>
		</NativeNavigator.Navigator>
	);
};

const NativeHome = () => {
	return (
		<NativeNavigator.Navigator screenOptions={ScreenOptions}>
			<NativeNavigator.Screen
				name="Home"
				component={MainScreen}
				options={{ headerTitle: "Home" }}
			/>
			<NativeNavigator.Screen name="Post" component={PostScreen} />
		</NativeNavigator.Navigator>
	);
};
const NativeBooked = () => {
	return (
		<NativeNavigator.Navigator screenOptions={ScreenOptions}>
			<NativeNavigator.Screen
				name="Booked Screen"
				component={BookedScreen}
				options={{ headerTitle: "Booked Screen" }}
			/>
		</NativeNavigator.Navigator>
	);
};

const ScreenOptions = {
	animation: "slide_from_left",
	header: ({ navigation, route, options, back }) => (
		<HeaderNavigation
			navigation={navigation}
			options={options}
			back={back}
			route={route}
		/>
	),
};

// const MainNavigator = () => {
// 	return (
// 		<MainStack.Navigator screenOptions={ScreenOptions}>
// 			<MainStack.Screen
// 				name="Home"
// 				component={MainScreen}
// 				options={{
// 					headerTitle: "My blog",
// 				}}
// 			/>
// 			<MainStack.Screen
// 				name="Post"
// 				component={DrawerNavigator}
// 				options={{
// 					headerStyle: {
// 						backgroundColor: "red",
// 					},
// 				}}
// 			/>
// 		</MainStack.Navigator>
// 	);
// };

// const TabNavigator = () => {
// 	return (
// 		<TabStack.Navigator screenOptions={ScreenOptions}>
// 			<TabStack.Screen
// 				name="Booked Screen"
// 				component={BookedScreen}
// 				options={{
// 					headerTitle: "Booked Screen",
// 				}}
// 			/>
// 		</TabStack.Navigator>
// 	);
// };

// const DrawerNavigator = () => {
// 	<DrawerStack.Navigator
// 		initialRouteName="Post"
// 		screenOptions={{
// 			defaultStatus: true,
// 		}}
// 	>
// 		<DrawerStack.Screen name="Post" component={PostScreen} />
// 	</DrawerStack.Navigator>;
// };

export default Navigation;
