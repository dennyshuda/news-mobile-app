import { Stack } from "expo-router";
import "../global.css";

const BaseLayout = () => {
	return (
		<Stack>
			<Stack.Screen name="index" options={{ headerShown: false }} />
		</Stack>
	);
};

export default BaseLayout;
