import { Pressable, Text, TextInput, TextInputProps, View, Image } from "react-native";
import React, { useState } from "react";
import icons from "../constant/icons";

type FormFieldProps = TextInputProps & {
	title: string;
};

const FormField = ({ title, ...props }: FormFieldProps) => {
	const [show, setShow] = useState<boolean>(false);
	return (
		<View>
			<Text className="text-xl font-bold  mb-2">{title}</Text>
			<View className="border-2 border-primary-300 px-4 h-16 w-full rounded-xl  focus:border-dark-900 font-semibold flex-row items-center justify-between">
				<TextInput {...props} secureTextEntry={title === "Password" && !show} />
				{title === "Password" && (
					<Pressable onPress={() => setShow(!show)}>
						<Image
							source={!show ? icons.eye : icons.eyeHide}
							className="w-6 h-6"
							resizeMode="contain"
						/>
					</Pressable>
				)}
			</View>
		</View>
	);
};

export default FormField;
