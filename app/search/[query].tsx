import { SafeAreaView, Text } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";

const search = () => {
	const { query } = useLocalSearchParams();

	return (
		<SafeAreaView>
			<Text>{query}</Text>
		</SafeAreaView>
	);
};

export default search;
