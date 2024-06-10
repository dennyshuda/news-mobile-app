import axiosInstance from "../libs/axios-instance";

type PayloadProps = {
	title: string;
	image: string;
	content: string;
	categoryId: string;
	userId: string | undefined;
};

const useCreatePost = () => {
	const createPost = async (payload: PayloadProps) => {
		try {
			const response = await axiosInstance().post("/post", payload);
			return { response, error: null };
		} catch (error) {
			return { response: null, error };
		}
	};

	return { createPost };
};

export default useCreatePost;
