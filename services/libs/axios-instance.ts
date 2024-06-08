import axios, { CreateAxiosDefaults } from "axios";

type AxiosInstanceParams = {
	token: string;
};

const axiosInstance = (token?: AxiosInstanceParams, instanceSettings?: CreateAxiosDefaults) => {
	const instance = axios.create({
		baseURL: "https://news-mobile-app-api.vercel.app",
		headers: token ? { Authorization: `Bearer ${token}` } : undefined,
		...instanceSettings,
	});

	return instance;
};

export default axiosInstance;
