import { useEffect, useState } from "react";
import axiosInstance from "../libs/axios-instance";
import { IPost } from "../interfaces/post.types";
import { IUser } from "../interfaces/user.types";

type IPostType = IPost & {
	user: IUser;
};

const useGetPost = (token: string) => {
	const [posts, setPost] = useState<IPostType[]>();
	const [status, setStatus] = useState<"idle" | "loading">("idle");
	const [error, setError] = useState<string>("");

	useEffect(() => {
		const getPost = async () => {
			try {
				const response = await axiosInstance({ token: token }).get("/post");
				setPost(response.data.posts);
				setStatus("loading");
			} catch {
				setError("something wrong");
			} finally {
				setStatus("idle");
			}
		};

		getPost();
	}, []);

	return { posts, status, error };
};

export default useGetPost;
