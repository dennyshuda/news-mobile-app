import axiosInstance from "../libs/axios-instance";

type PayloadProps = {
	email: string;
	password: string;
};

const useLogin = () => {
	const createLogin = async (payload: PayloadProps) => {
		try {
			const response = await axiosInstance().post("/auth/login", payload);
			return { response, error: null };
		} catch (error) {
			return { response: null, error };
		}
	};

	return { createLogin };
};

export default useLogin;
