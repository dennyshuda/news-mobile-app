import { ScrollView, Text, View } from "react-native";
import { useState } from "react";
import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import FormField from "../../components/FormField";
import CustomButton from "../../components/CustomButton";

const SignIn = () => {
	const [form, setForm] = useState({ nama: "", email: "", password: "" });

	const submit = () => {
		console.log(form);
	};

	return (
		<SafeAreaView style={{ backgroundColor: "white", height: "100%" }}>
			<ScrollView>
				<View className="w-full justify-center px-4 py-6 gap-3">
					<View className="flex items-center py-6">
						<Text className="text-4xl font-bold text-dark-900">Login</Text>
						{/* <Text className="text-lg text-primary-500">Enter your account to continue</Text> */}
					</View>

					<View className="gap-5 mt-16">
						<FormField
							title="Nama"
							placeholder="Masukkan Nama"
							// keyboardType="email-address"
							onChangeText={(text) => setForm({ ...form, nama: text })}
						/>
						<FormField
							title="Email"
							placeholder="Masukkan Email"
							// keyboardType="email-address"
							onChangeText={(text) => setForm({ ...form, email: text })}
						/>
						<FormField
							title="Password"
							placeholder="Masukkan Password"
							onChangeText={(text) => setForm({ ...form, password: text })}
							className="w-fit"
						/>
						<View className="mt-20">
							<CustomButton title="Masuk" onPress={submit} />
							<Text className="text-lg text-center">
								Don't have account?{" "}
								<Link href="/sign-up" className="font-semibold text-dark-900">
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
