import { router } from "expo-router";
import { ScrollView, Text, View, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import images from "../constant/images";
import CustomButton from "../components/CustomButton";

const App = () => {
	return (
		<SafeAreaView style={{ backgroundColor: "#ffffff" }}>
			<ScrollView contentContainerStyle={{ height: "100%" }}>
				<Image source={images.home} className="w-full" />
				<View className="items-center py-10 px-6 gap-5 rounded-3xl absolute justify-center bg-white bottom-0 right-0 left-0 h-[23rem]">
					<Text className="text-3xl text-center font-bold">
						Explore Berita Negeri dan Luar Negeri
					</Text>
					<Text className="text-center text-sm">
						Mengungkap Berita Terbaru dari Dalam dan Luar Negeri: Tetap Terinformasi dengan Kabar
						Terkini dari Seluruh Penjuru Dunia
					</Text>
					<CustomButton title="Daftar Sekarang" onPress={() => router.push("/sign-up")} />
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

export default App;
