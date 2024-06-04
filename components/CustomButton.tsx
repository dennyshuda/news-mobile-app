import { Pressable, PressableProps, Text } from "react-native";

type CustomButtonProps = PressableProps & {
	title: string;
};

const CustomButton = ({ title, ...props }: CustomButtonProps) => {
	return (
		<Pressable
			{...props}
			className="bg-dark-900 rounded-xl w-full min-h-16 justify-center items-center"
		>
			<Text className="text-white font-semibold text-lg">{title}</Text>
		</Pressable>
	);
};

export default CustomButton;
