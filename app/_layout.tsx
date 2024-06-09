import { Stack } from "expo-router";
import "../global.css";
import { AuthProvider } from "../context/AuthContext";

const BaseLayout = () => {
	return (
		<AuthProvider>
			<Stack>
				<Stack.Screen name="index" options={{ headerShown: false }} />
				<Stack.Screen name="(tabs)" options={{ headerShown: false }} />
				<Stack.Screen name="(auth)" options={{ headerShown: false }} />
				<Stack.Screen name="detail/[id]" options={{ headerShown: false }} />
			</Stack>
		</AuthProvider>
	);
};

export default BaseLayout;
