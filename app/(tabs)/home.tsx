import { SafeAreaView, ScrollView, Text, View, Image, TextInput, FlatList } from "react-native";
import useGetPost from "../../services/hooks/useGetPost";
import { AuthContextType, useAuth } from "../../context/AuthContext";
import images from "../../constant/images";
import NewsCard from "../../components/NewsCard";

const Home = () => {
	const { user } = useAuth() as AuthContextType;
	const { posts, error, status } = useGetPost();

	if (status === "loading")
		return (
			<View>
				<Text>Loading</Text>
			</View>
		);

	console.log(posts, user);

	return (
		<SafeAreaView style={{ backgroundColor: "white", height: "100%" }}>
			<ScrollView style={{ height: "100%" }}>
				<View className="pt-10 px-5 gap-5">
					<View className=" flex-row justify-between items-center">
						<View>
							<Text className="font-semibold">Halo!</Text>
							<Text className="font-bold text-2xl">{user?.username}</Text>
						</View>
						<Image source={images.avatar} className="w-10 h-10" />
					</View>

					<View>
						<TextInput
							placeholder="Cari"
							className="border-[1px] rounded-full border-lynch-400 text-xl py-2 px-5"
						/>
					</View>

					<View>
						{posts?.map((post) => (
							<NewsCard key={post.id} post={post} />
						))}
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

export default Home;
