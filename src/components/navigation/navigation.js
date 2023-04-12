import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import { createDrawerNavigator } from "@react-navigation/drawer";

import MainScreen from "../../screens/main-screen";
import PostScreen from "./../../screens/post-screen";
import BookedScreen from "../../screens/booked-screen";
import THEME from "../../THEME";
import HeaderNavigation from "../header-navigation";

const Tab = createBottomTabNavigator();
const MainStack = createNativeStackNavigator();
const TabStack = createNativeStackNavigator();
const DrawerStack = createDrawerNavigator();
const Navigation = () => {
	return (
		<NavigationContainer>
			<Tab.Navigator
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
				<Tab.Screen name="Home" component={MainNavigator} />
				<Tab.Screen name="Booked Screen" component={TabNavigator} />
			</Tab.Navigator>
		</NavigationContainer>
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

const MainNavigator = () => {
	return (
		<MainStack.Navigator screenOptions={ScreenOptions}>
			<MainStack.Screen
				name="Home"
				component={MainScreen}
				options={{
					headerTitle: "My blog",
				}}
			/>
			<MainStack.Screen
				name="Post"
				component={DrawerNavigator}
				options={{
					headerStyle: {
						backgroundColor: "red",
					},
				}}
			/>
		</MainStack.Navigator>
	);
};

const TabNavigator = () => {
	return (
		<TabStack.Navigator screenOptions={ScreenOptions}>
			<TabStack.Screen
				name="Booked Screen"
				component={BookedScreen}
				options={{
					headerTitle: "Booked Screen",
				}}
			/>
		</TabStack.Navigator>
	);
};

const DrawerNavigator = () => {
	<DrawerStack.Navigator>
		<DrawerStack.Screen name="Home" component={MainScreen} />
	</DrawerStack.Navigator>;
};
export default Navigation;
