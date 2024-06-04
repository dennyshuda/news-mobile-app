import { router } from "expo-router";
import { ScrollView, Text, View, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import images from "../constant/images";
import CustomButton from "../components/CustomButton";

const App = () => {
	return (
		<SafeAreaView style={{ backgroundColor: "#ffffff" }}>
			<ScrollView contentContainerStyle={{ height: "100%" }}>
				<View className="w-full justify-center items-center h-full px-4 gap-8">
					<Text className="text-3xl text-dark-900 text-center font-bold">
						Selamat Datang di Portal Berita Terpercaya
					</Text>
					<Image source={images.news} className="w-full max-w-[380px] h-[300px]" />
					<Text className="text-center text-sm text-primary-600">
						Kami hadir untuk memberikan Anda berita terbaru, terpercaya, dan terkini. Dari politik
						hingga hiburan, kami meliput semua yang Anda butuhkan untuk tetap terinformasi.
					</Text>
					<CustomButton title="Mulai" onPress={() => router.push("/sign-in")} />
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

export default App;
