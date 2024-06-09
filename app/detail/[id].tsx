import { SafeAreaView, ScrollView, StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { WebView } from "react-native-webview";
import { useLocalSearchParams } from "expo-router";
import Nav from "../../components/Nav";
import images from "../../constant/images";

const PostDetail = () => {
	const { id } = useLocalSearchParams();

	const content = `<body style="font-size: 200%">
		<h1>halo ini dalah Judul</h1>
		<h2>halo ini dalah Judul</h2>
		<b>baloyskie</b>
		<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, iure.</p>
		<p>
			Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus incidunt possimus, libero
			fugit quae commodi enim distinctio dignissimos pariatur, quasi soluta totam recusandae nemo,
			veritatis deleniti vero doloribus eaque sequi!
		</p>
	</body>`;

	return (
		<SafeAreaView style={{ backgroundColor: "white", height: "100%" }}>
			<ScrollView style={{ height: "100%" }}>
				<View className="px-4 pt-10">
					<Nav showBookmark={true} />

					<View className="mt-5">
						<Text>Budiono Siregar | 14 Juni 2024</Text>
						<Text className="text-2xl font-bold">Judul Berita {id}</Text>

						<Image source={images.thumbnail} className="w-full" />

						<View style={{ flex: 1, height: 200 }}>
							<WebView
								originWhitelist={["*"]}
								source={{
									html: content,
								}}
							/>
						</View>
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

export default PostDetail;

const styles = StyleSheet.create({});
