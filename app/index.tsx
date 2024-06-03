import { Link } from "expo-router";
import { Text, View } from "react-native";

const App = () => {
	return (
		<View className="flex-1 items-center justify-center bg-white">
			<Text className="text-3xl">News App</Text>
			<Link href="/home">Go to Home</Link>
		</View>
	);
};

export default App;
