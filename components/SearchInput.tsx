import { Alert, Text, TextInput, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { router, usePathname } from "expo-router";

const SearchInput = () => {
	const pathname = usePathname();
	const [query, setQuery] = useState("");
	return (
		<View>
			<TextInput placeholder="search" onChangeText={(value: string) => setQuery(value)} />
			<TouchableOpacity
				onPress={() => {
					if (!query) Alert.alert("please insery query");

					if (pathname.startsWith("/search")) {
						router.setParams({ query });
					} else {
						router.push(`/search/${query}`);
					}
				}}
			>
				<Text>search</Text>
			</TouchableOpacity>
		</View>
	);
};

export default SearchInput;
