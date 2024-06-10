import { Tabs } from "expo-router";
import { View, Image, ImageSourcePropType, Text } from "react-native";
import icons from "../../constant/icons";
import { AuthContextType, useAuth } from "../../context/AuthContext";

type TabIconProps = {
	icon: ImageSourcePropType;
	color: string;
	name: string;
	focused: boolean;
};

type TabBarProps = Omit<TabIconProps, "icon" | "name">;

const TabIcon = ({ icon, color, name, focused }: TabIconProps) => {
	return (
		<View className="items-center justify-center gap-2">
			<Image
				source={icon}
				resizeMode="contain"
				tintColor={focused ? "#FF6160" : "#8291A5"}
				className="w-6 h-6"
			/>
			<Text
				className={`${
					focused ? "font-semibold text-carnation-400" : "font-normal text-lynch-400"
				} text-xs`}
			>
				{name}
			</Text>
		</View>
	);
};

const TabsLayout = () => {
	const { user } = useAuth() as AuthContextType;

	return (
		<Tabs
			screenOptions={{
				headerShown: false,
				tabBarShowLabel: false,
				tabBarStyle: {
					position: "absolute",
					height: 72,
					backgroundColor: "white",
					elevation: 4,
					borderTopLeftRadius: 16,
					borderTopRightRadius: 16,
					alignItems: "center",
					justifyContent: "center",
				},
			}}
		>
			<Tabs.Screen
				name="home"
				options={{
					title: "Home",
					headerShown: false,
					tabBarIcon: ({ color, focused }: TabBarProps) => (
						<TabIcon icon={icons.home} color={color} name="Home" focused={focused} />
					),
				}}
			/>
			<Tabs.Screen
				name="create"
				options={{
					title: "Create",
					headerShown: false,
					tabBarStyle: { display: "none" },
					tabBarItemStyle: {
						display: user?.role === "WRITER" ? "flex" : "none",
						position: "absolute",
						right: 50,
						bottom: 110,
					},
					tabBarIcon: () => (
						<View className="items-center justify-center gap-2 rounded-full h-20 w-20 mb-10">
							<Image
								source={icons.plus}
								resizeMode="contain"
								tintColor={"#FF6160"}
								className="w-16 h-16"
							/>
						</View>
					),
				}}
			/>
			<Tabs.Screen
				name="bookmark"
				options={{
					title: "Bookmark",
					headerShown: false,
					tabBarIcon: ({ color, focused }: TabBarProps) => (
						<TabIcon icon={icons.bookmark} color={color} name="Bookmark" focused={focused} />
					),
				}}
			/>
			<Tabs.Screen
				name="profile"
				options={{
					title: "Profile",
					headerShown: false,
					tabBarIcon: ({ color, focused }: TabBarProps) => (
						<TabIcon icon={icons.profile} color={color} name="Profile" focused={focused} />
					),
				}}
			/>
		</Tabs>
	);
};

export default TabsLayout;
