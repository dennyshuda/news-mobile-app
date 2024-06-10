import { Text, View, Image, Pressable } from "react-native";
import images from "../constant/images";
import { IPost } from "../services/interfaces/post.types";
import { router } from "expo-router";

type NewsCardProps = {
	post: IPost;
};

const NewsCard = ({ post }: NewsCardProps) => {
	return (
		<Pressable
			onPress={() => router.push(`/detail/${post.id}`)}
			className="rounded-xl border-[1px] border-lynch-400"
		>
			<View>
				<Image source={images.thumbnail} className="w-full rounded-tr-xl rounded-tl-xl" />
			</View>

			<View className="p-3 gap-2">
				<Text className="font-bold text-xl">{post.title}</Text>
				<Text numberOfLines={2} className="text-lynch-400 text-ellipsis">
					{post.content}
				</Text>
				<Text className="text-lynch-400 text-sm">14 Juni 2024</Text>
			</View>
		</Pressable>
	);
};

export default NewsCard;
