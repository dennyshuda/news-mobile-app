import { createContext, PropsWithChildren, useContext, useEffect, useState } from "react";
import * as SecureStore from "expo-secure-store";
import { IUser } from "../services/interfaces/user.types";
import { router } from "expo-router";

export type AuthContextType = {
	user?: IUser | null;
	setUser?: React.Dispatch<React.SetStateAction<IUser | null>>;
	storeUser?: (payload: IUser) => Promise<void>;
	logout?: () => Promise<void>;
};

const USER_KEY = "user";

export const AuthContext = createContext<AuthContextType | null>(null);

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }: PropsWithChildren) => {
	const [user, setUser] = useState<IUser | null>(null);

	useEffect(() => {
		const loadUser = async () => {
			const userStored = await SecureStore.getItemAsync(USER_KEY);
			if (userStored) setUser(JSON.parse(userStored));
		};
		loadUser();
	}, []);

	const storeUser = async (payload: IUser) => {
		await SecureStore.setItemAsync(USER_KEY, JSON.stringify(payload));
	};

	const logout = async () => {
		await SecureStore.deleteItemAsync(USER_KEY);
		setUser(null);
		router.push("/");
	};

	return (
		<AuthContext.Provider value={{ user, setUser, storeUser, logout }}>
			{children}
		</AuthContext.Provider>
	);
};
