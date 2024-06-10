import {
	Button,
	SafeAreaView,
	ScrollView,
	Text,
	View,
	Image,
	Pressable,
	TextInput,
	KeyboardAvoidingView,
	Platform,
} from "react-native";
import { useRef, useState } from "react";
import * as ImagePicker from "expo-image-picker";
import Nav from "../../components/Nav";
import icons from "../../constant/icons";
import { actions, RichEditor, RichToolbar } from "react-native-pell-rich-editor";
import CustomButton from "../../components/CustomButton";
import { SelectList } from "react-native-dropdown-select-list";
import { CATEGORY } from "../../constant/category";
import { AuthContextType, useAuth } from "../../context/AuthContext";
import useCreatePost from "../../services/hooks/useCreatePost";
import { router } from "expo-router";

export type IconRecord = {
	selected: boolean;
	disabled: boolean;
	tintColor: any;
	iconSize: number;
};

const Create = () => {
	const richText = useRef<RichEditor>(null);
	const [form, setForm] = useState({ title: "", categoryId: "" });
	const contentRef = useRef("");
	const [image, setImage] = useState<string | null>(null);
	const pickImage = async () => {
		let result = await ImagePicker.launchImageLibraryAsync({
			mediaTypes: ImagePicker.MediaTypeOptions.All,
			allowsEditing: true,
			aspect: [16, 9],
			quality: 1,
		});
		if (!result.canceled) {
			setImage(result.assets[0].uri);
		}
	};

	const { user } = useAuth() as AuthContextType;

	const { createPost } = useCreatePost();

	const submit = async () => {
		const { response, error } = await createPost({
			...form,
			image: "",
			content: contentRef.current,
			userId: user?.id,
		});

		if (response || error) {
			if (error) {
				console.log(error);
			} else {
				router.navigate("/home");
			}
		}
	};

	return (
		<SafeAreaView style={{ backgroundColor: "white", height: "100%" }}>
			<ScrollView style={{ height: "100%" }}>
				<View className="px-4 pt-10">
					<Nav showBookmark={false} />
					{!image ? (
						<View className="border-2 border-lynch-200 rounded-md items-center border-dashed py-10 gap-3 mt-5">
							<Image source={icons.galleryAdd} className="w-8 h-8" />
							<Text className="text-lynch-400 font-semibold">Tambahkan Foto Thumbnail</Text>
							<Pressable
								onPress={pickImage}
								className="border-[1px] w-28 rounded-full p-1 px-4 items-center border-carnation-400"
							>
								<Text className="text-carnation-400 text-sm">Pilih Foto</Text>
							</Pressable>
						</View>
					) : (
						<>{image && <Image className="aspect-video" source={{ uri: image }} />}</>
					)}
					{image && (
						<View className="items-center mt-3">
							<Pressable
								onPress={() => setImage(null)}
								className="border-[1px] w-28 rounded-full p-1 px-4 items-center border-carnation-400"
							>
								<Text className="text-carnation-400 text-sm">Batalkan</Text>
							</Pressable>
						</View>
					)}

					<View className="gap-5">
						<View className="gap-5">
							<TextInput
								placeholder="Judul"
								className="border-b-[1px] h-14 border-b-lynch-400"
								onChangeText={(text) => setForm({ ...form, title: text })}
							/>
							<SelectList
								setSelected={(key: string) => setForm({ ...form, categoryId: key })}
								data={CATEGORY}
								save="key"
								boxStyles={{ height: 50, width: "100%" }}
								inputStyles={{ alignContent: "center" }}
							/>
							<KeyboardAvoidingView
								behavior={Platform.OS === "ios" ? "padding" : "height"}
								style={{ flex: 1 }}
							>
								<RichEditor
									ref={richText}
									placeholder="Konten Berita"
									onChange={(descriptionText) => {
										contentRef.current = descriptionText;
									}}
								/>
							</KeyboardAvoidingView>

							<RichToolbar
								editor={richText}
								actions={[
									actions.undo,
									actions.setBold,
									actions.setItalic,
									actions.setUnderline,
									actions.checkboxList,
									actions.insertOrderedList,
									actions.blockquote,
									actions.alignLeft,
									actions.alignCenter,
									actions.alignRight,
									actions.code,
									actions.line,
									actions.heading1,
									actions.heading2,
									actions.heading3,
									actions.heading4,
								]}
								iconMap={{
									[actions.heading1]: ({ tintColor }: IconRecord) => (
										<Text style={[{ color: tintColor }]}>H1</Text>
									),
									[actions.heading2]: ({ tintColor }: IconRecord) => (
										<Text style={[{ color: tintColor }]}>H2</Text>
									),
									[actions.heading3]: ({ tintColor }: IconRecord) => (
										<Text style={[{ color: tintColor }]}>H3</Text>
									),
									[actions.heading4]: ({ tintColor }: IconRecord) => (
										<Text style={[{ color: tintColor }]}>H4</Text>
									),
								}}
							/>
						</View>

						<CustomButton title="Publish" onPress={submit} />
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

export default Create;
