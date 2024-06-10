import { useEffect, useState } from "react";
import axiosInstance from "../libs/axios-instance";
import { IPost } from "../interfaces/post.types";
import { IUser } from "../interfaces/user.types";

type IPostType = IPost & {
	user: IUser;
};

const useGetDetailPost = (id: any) => {
	const [post, setPost] = useState<IPostType>();
	const [status, setStatus] = useState<"idle" | "loading">("idle");
	const [error, setError] = useState<string>("");

	useEffect(() => {
		const getDetailPost = async () => {
			try {
				const response = await axiosInstance().get(`/post/${id}`);
				setPost(response.data.post);
				setStatus("loading");
			} catch {
				setError("something wrong");
			} finally {
				setStatus("idle");
			}
		};

		getDetailPost();
	}, []);

	return { post, status, error };
};

export default useGetDetailPost;
