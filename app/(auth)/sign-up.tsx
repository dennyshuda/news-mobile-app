import { ScrollView, Text, View } from "react-native";
import { useState } from "react";
import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import FormField from "../../components/FormField";
import CustomButton from "../../components/CustomButton";

const SignUp = () => {
	const [form, setForm] = useState({ name: "", email: "", password: "" });

	const submit = async () => {
		console.log(form);
	};

	return (
		<SafeAreaView style={{ backgroundColor: "white", height: "100%" }}>
			<ScrollView>
				<View className="w-full justify-center px-4 py-6 gap-3 min-h-[85vh]">
					<View>
						<Text className="text-2xl font-semibold text-dark-900">Nice to know you!</Text>
						<Text className="text-lg text-primary-500">Enter your account to continue</Text>
					</View>

					<View className="gap-5">
						<FormField
							title="Name"
							placeholder="Your name"
							onChangeText={(text) => setForm({ ...form, name: text })}
						/>
						<FormField
							title="Email"
							placeholder="Your email address"
							keyboardType="email-address"
							onChangeText={(text) => setForm({ ...form, email: text })}
						/>
						<FormField
							title="Password"
							placeholder="Your password"
							onChangeText={(text) => setForm({ ...form, password: text })}
						/>
						<CustomButton title="Register" onPress={submit} />
						<Text className="text-lg text-center">
							Have an account already?{" "}
							<Link href="/sign-in" className="font-semibold text-dark-900">
								Sign In
							</Link>
						</Text>
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

export default SignUp;
