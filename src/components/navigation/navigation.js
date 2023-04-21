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
import CreatePost from "../../screens/create-post-screen";
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
			<NativeNavigator.Screen
				name="Create post"
				component={CreatePost}
				options={{ headerTitle: "Create Post" }}
			/>
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

export default Navigation;
