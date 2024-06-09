import { ScrollView, Text, View } from "react-native";
import { useState } from "react";
import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { SelectList } from "react-native-dropdown-select-list";
import FormField from "../../components/FormField";
import CustomButton from "../../components/CustomButton";

const SignUp = () => {
	const [form, setForm] = useState({ username: "", email: "", password: "" });
	const [selected, setSelected] = useState("");

	const data = [
		{ key: "1", value: "WRITER" },
		{ key: "2", value: "READER" },
	];

	const submit = async () => {
		console.log({ ...form, role: selected });
	};

	return (
		<SafeAreaView style={{ backgroundColor: "white", height: "100%" }}>
			<ScrollView>
				<View className="w-full justify-center px-6 py-6 gap-3">
					<View className="flex items-center py-6">
						<Text className="text-4xl font-bold">Sign Up</Text>
					</View>

					<View className="gap-5 mt-16">
						<FormField
							title="Username"
							placeholder="Your username"
							onChangeText={(text) => setForm({ ...form, username: text })}
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
						<View className="gap-3">
							<Text className="text-xl font-bold">Daftar Sebagai</Text>
							<SelectList
								setSelected={(value: string) => setSelected(value)}
								data={data}
								save="value"
								boxStyles={{ height: 50, width: "100%" }}
								inputStyles={{ alignContent: "center" }}
							/>
						</View>
						<View className="mt-12">
							<CustomButton title="Daftar" onPress={submit} />
							<Text className="text-lg text-center">
								Sudah punya akun?{" "}
								<Link href="/sign-in" className="font-semibold text-carnation-400">
									Sign In
								</Link>
							</Text>
						</View>
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

export default SignUp;
