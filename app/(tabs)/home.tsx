import { SafeAreaView, ScrollView, Text, View, Image, TextInput, FlatList } from "react-native";
import useGetPost from "../../services/hooks/useGetPost";
import { AuthContextType, useAuth } from "../../context/AuthContext";
import images from "../../constant/images";
import NewsCard from "../../components/NewsCard";
import SearchInput from "../../components/SearchInput";

const Home = () => {
	const { user } = useAuth() as AuthContextType;
	const { posts, error, status } = useGetPost();

	if (status === "loading")
		return (
			<View>
				<Text>Loading</Text>
			</View>
		);

	return (
		<SafeAreaView style={{ backgroundColor: "white" }}>
			<ScrollView>
				<View className="pt-10 px-5 gap-5">
					<View className=" flex-row justify-between items-center">
						<View>
							<Text className="font-semibold">Halo!</Text>
							<Text className="font-bold text-2xl">{user?.username}</Text>
						</View>
						<Image source={images.avatar} className="w-10 h-10" />
					</View>

					<SearchInput />

					<View className="gap-5">
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
