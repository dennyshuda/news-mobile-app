import { Tabs } from "expo-router";
import { View, Image, ImageSourcePropType, Text } from "react-native";
import icons from "../../constant/icons";

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
			<Image source={icon} resizeMode="contain" tintColor={color} className="w-6 h-6" />
			<Text className={`${focused ? "font-semibold" : "font-normal"} text-xs`}>{name}</Text>
		</View>
	);
};

const TabsLayout = () => (
	<>
		<Tabs
			screenOptions={{
				tabBarShowLabel: false,
				tabBarActiveTintColor: "#2952CC",
				tabBarStyle: {
					backgroundColor: "#fff",
					height: 60,
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
					tabBarIcon: ({ color, focused }: TabBarProps) => (
						<TabIcon icon={icons.plus} color={color} name="Create" focused={focused} />
					),
				}}
			/>
			<Tabs.Screen
				name="profile"
				options={{
					title: "Profile",
					headerShown: false,
					tabBarIcon: ({ color, focused }: TabBarProps) => (
						<TabIcon icon={icons.plus} color={color} name="Profile" focused={focused} />
					),
				}}
			/>
		</Tabs>
	</>
);

export default TabsLayout;
