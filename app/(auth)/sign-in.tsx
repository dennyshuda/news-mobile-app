import { ScrollView, Text, View } from "react-native";
import { useState } from "react";
import { Link, router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import FormField from "../../components/FormField";
import CustomButton from "../../components/CustomButton";
import useLogin from "../../services/hooks/useLogin";
import { type AuthContextType, useAuth } from "../../context/AuthContext";

const SignIn = () => {
	const [form, setForm] = useState({ email: "", password: "" });

	const { setUser } = useAuth() as AuthContextType;
	const { createLogin } = useLogin();
	const submit = async () => {
		const { response } = await createLogin(form);
		if (response?.data.statusCode === 200) {
			console.log(response);
			setUser({
				id: response?.data.id,
				email: response?.data.email,
				username: response?.data.username,
				role: response?.data.role,
				token: response?.data.data.accessToken,
			});

			router.push("/home");
		} else {
			console.log("error login");
		}
	};

	return (
		<SafeAreaView style={{ backgroundColor: "white", height: "100%" }}>
			<ScrollView>
				<View className="w-full justify-center px-6 py-6 gap-3">
					<View className="flex items-center py-6">
						<Text className="text-4xl font-bold text-dark-900">Login</Text>
					</View>

					<View className="gap-5 mt-16">
						<FormField
							title="Email"
							placeholder="Masukkan Email"
							keyboardType="email-address"
							onChangeText={(text) => setForm({ ...form, email: text })}
						/>
						<FormField
							title="Password"
							placeholder="Masukkan Password"
							onChangeText={(text) => setForm({ ...form, password: text })}
							className="w-fit"
						/>
						<View className="mt-12">
							<CustomButton title="Masuk" onPress={submit} />
							<Text className="text-lg text-center">
								Belum punya akun?{" "}
								<Link href="/sign-up" className="font-semibold text-carnation-400">
									Sign Up
								</Link>
							</Text>
						</View>
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

export default SignIn;
