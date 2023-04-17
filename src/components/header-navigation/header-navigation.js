import React, { useState } from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import THEME from "../../THEME";

import { Feather, MaterialIcons, FontAwesome } from "@expo/vector-icons";
const HeaderNavigation = ({ navigation, options, back, route }) => {
	const { headerTitle } = options;
	return (
		<View style={styles.container}>
			<StatusBar barStyle="light-content" backgroundColor={THEME.MAIN_COLOR} />
			<View style={styles.wrap_header}>
				<View style={styles.left}>
					{back ? (
						<Feather
							name="arrow-left"
							size={24}
							color="#fff"
							onPress={() => navigation.goBack()}
						/>
					) : (
						<Feather
							name="menu"
							size={28}
							color="#fff"
							onPress={() => navigation.openDrawer()}
						/>
					)}
				</View>
				<View style={styles.center}>
					<Text style={styles.center_title}>{headerTitle}</Text>
				</View>
				<View style={styles.right}>
					<RightHeader namePage={route.name} navigation={navigation} />
				</View>
			</View>
		</View>
	);
};

const RightHeader = ({ namePage, navigation }) => {
	const [booked, SetBooked] = useState();

	const content =
		namePage != "Post" ? (
			<MaterialIcons
				name="add-a-photo"
				size={28}
				color="#fff"
				onPress={() => navigation.navigate("Create post")}
			/>
		) : booked ? (
			<FontAwesome
				name="star"
				size={28}
				color="#fff"
				onPress={() => SetBooked(!booked)}
			/>
		) : (
			<Feather
				name="star"
				size={28}
				color="#fff"
				onPress={() => SetBooked(!booked)}
			/>
		);
	return content;
};
const styles = StyleSheet.create({
	container: {
		width: "100%",
		height: 50,
		backgroundColor: THEME.MAIN_COLOR,
	},
	wrap_header: {
		height: "100%",
		justifyContent: "space-between",
		flexDirection: "row",
		alignItems: "center",
		marginHorizontal: THEME.MARGIN_HORIZONTAL,
	},
	center_title: {
		fontFamily: THEME.FONT_FAMILY,
		fontSize: 25,
		color: "#fff",
	},
});
export default HeaderNavigation;
