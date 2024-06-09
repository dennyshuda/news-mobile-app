import axiosInstance from "../libs/axios-instance";

type PayloadProps = {
	username: string;
	email: string;
	password: string;
	role: string;
};

const useRegister = () => {
	const createRegister = async (payload: PayloadProps) => {
		try {
			const response = await axiosInstance().post("/auth/register", payload);
			console.log(response);
			return { response, error: null };
		} catch (error) {
			return { response: null, error };
		}
	};

	return { createRegister };
};

export default useRegister;
