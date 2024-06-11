import { SafeAreaView, ScrollView, Text, View } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";
import useSearchPost from "../../services/hooks/useSearchPost";
import NewsCard from "../../components/NewsCard";
import SearchInput from "../../components/SearchInput";

const search = () => {
	const { query } = useLocalSearchParams();

	const { posts } = useSearchPost({ query });

	return (
		<SafeAreaView>
			<ScrollView>
				<View className="pt-10 px-5 gap-5">
					<View className=" flex-row justify-between items-center">
						<View>
							<Text className="font-semibold">Halo!</Text>
						</View>
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

export default search;
