import { Alert, Image, Pressable, TextInput, View } from "react-native";
import React, { useState } from "react";
import { router, usePathname } from "expo-router";
import icons from "../constant/icons";

const SearchInput = () => {
	const pathname = usePathname();
	const [query, setQuery] = useState("");
	return (
		<View className="flex-row items-center justify-between border-[1px] rounded-full px-5 py-2 text-2xl border-lynch-400">
			<TextInput
				className="flex-1"
				placeholder="search"
				defaultValue={query}
				onChangeText={(value: string) => setQuery(value)}
			/>
			<Pressable
				onPress={() => {
					if (!query) Alert.alert("please insery query");

					if (pathname.startsWith("/search")) {
						router.setParams({ query });
					} else {
						router.push(`/search/${query}`);
					}
				}}
			>
				<Image source={icons.search} className="w-6 h-6" />
			</Pressable>
		</View>
	);
};

export default SearchInput;
