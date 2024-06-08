import { View, Image, Pressable } from "react-native";
import icons from "../constant/icons";
import { router } from "expo-router";

const Nav = ({ showBookmark }: { showBookmark: boolean }) => {
	return (
		<View className="justify-between flex-row">
			<Pressable onPress={() => router.back()}>
				<Image source={icons.arrowLeft} resizeMode="contain" className="w-6 h-6" />
			</Pressable>
			{showBookmark && (
				<Pressable onPress={() => router.push("/bookmark")}>
					<Image source={icons.archiveFill} resizeMode="contain" className="w-6 h-6" />
				</Pressable>
			)}
		</View>
	);
};

export default Nav;
