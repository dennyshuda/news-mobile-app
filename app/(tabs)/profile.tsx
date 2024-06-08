import { SafeAreaView, ScrollView, Image, View, Text } from "react-native";
import Nav from "../../components/Nav";
import images from "../../constant/images";
import CustomButton from "../../components/CustomButton";

const Profile = () => {
	return (
		<SafeAreaView style={{ backgroundColor: "white", height: "100%" }}>
			<ScrollView contentContainerStyle={{ height: "100%" }}>
				<View className="px-4 pt-10">
					<Nav showBookmark={false} />

					<View className="h-[85vh] justify-between">
						<View className="items-center gap-10">
							<Image source={images.avatar} className="w-30 h-30" />

							<View className="items-center">
								<Text className="font-bold text-2xl text-lynch-900">Kobo Kanaeru</Text>
								<Text className="text-lynch-400 text-lg">kobokanaeru@gmail.com</Text>
							</View>

							<View className="flex-row gap-5">
								<View className="items-center gap-5">
									<Text className="font-bold text-6xl">20</Text>
									<Text className="text-lynch-400">Berita disimpan</Text>
								</View>
								<View className="w-[2px] bg-lynch-200 rounded-lg"></View>
								<View className="items-center gap-5">
									<Text className="font-bold text-6xl">20</Text>
									<Text className="text-lynch-400">Berita dipulish</Text>
								</View>
							</View>
						</View>

						<CustomButton title="Keluar" />
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

export default Profile;
