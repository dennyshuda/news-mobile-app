import { useEffect, useState } from "react";
import axiosInstance from "../libs/axios-instance";
import { IPost } from "../interfaces/post.types";

type PayloadProps = {
	query: any;
};

type IPostType = IPost;

const useSearchPost = (payload: PayloadProps) => {
	const [posts, setPosts] = useState<IPostType[]>([]);
	const [status, setStatus] = useState<"idle" | "loading">("idle");
	const [error, setError] = useState<string>("");

	const searchPost = async (payload: PayloadProps) => {
		setStatus("loading");
		try {
			const response = await axiosInstance().post(`/post/search`, payload);
			setPosts(response.data.posts);
		} catch (error) {
			setError("Something went wrong");
		} finally {
			setStatus("idle");
		}
	};

	useEffect(() => {
		if (payload.query) {
			searchPost(payload);
		}
	}, [payload.query]);

	return { posts, status, error };
};

export default useSearchPost;
