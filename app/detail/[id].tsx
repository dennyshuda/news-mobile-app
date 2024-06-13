import { SafeAreaView, ScrollView, Text, View, Image, useWindowDimensions } from "react-native";
import React from "react";
import { WebView } from "react-native-webview";
import { useLocalSearchParams } from "expo-router";
import Nav from "../../components/Nav";
import images from "../../constant/images";
import useGetDetailPost from "../../services/hooks/useGetDetailPost";

const PostDetail = () => {
	const { id } = useLocalSearchParams();
	const { width } = useWindowDimensions();
	const { post, status } = useGetDetailPost(id);

	if (status === "loading")
		return (
			<View>
				<Text>Loading</Text>
			</View>
		);

	return (
		<SafeAreaView style={{ backgroundColor: "white", height: "100%" }}>
			<ScrollView style={{ height: "100%" }}>
				<View className="px-4 pt-10">
					<Nav showBookmark={true} />

					<View className="mt-5 gap-4">
						<Text>{post?.user.username} | 14 Juni 2024</Text>
						<Text className="text-2xl font-bold">{post?.title}</Text>

						<Image source={images.thumbnail} className="w-full" />

						<View style={{ flex: 1, height: width }}>
							{post && (
								<WebView
									originWhitelist={["*"]}
									startInLoadingState={true}
									source={{
										html: `
										<div style="font-size: 250%">
										${post.content}
										</div>
										
										`,
									}}
								/>
							)}
						</View>
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

export default PostDetail;
