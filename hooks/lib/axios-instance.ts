import axios, { CreateAxiosDefaults } from "axios";

const axiosInstance = (instanceSettings?: CreateAxiosDefaults) => {
	const token = "tokenhere";
	const instance = axios.create({
		baseURL: "http://localhost:8000",
		headers: token ? { Authorization: `Bearer ${token}` } : undefined,
		...instanceSettings,
	});

	return instance;
};

export default axiosInstance;
