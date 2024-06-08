import { createContext, PropsWithChildren, useContext, useEffect, useState } from "react";
import * as SecureStore from "expo-secure-store";

type AuthContextType = {
	token: string | null;
	setToken: React.Dispatch<React.SetStateAction<string | null>>;
	logout: () => Promise<any>;
};

const TOKEN_KEY = "access-token";

export const AuthContext = createContext<AuthContextType | null>(null);

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }: PropsWithChildren) => {
	const [token, setToken] = useState<string | null>(null);

	useEffect(() => {
		const loadToken = async () => {
			const token = await SecureStore.getItemAsync(TOKEN_KEY);
			console.log("stored", token);

			if (token) setToken(token);
		};
		loadToken();
	}, []);

	const logout = async () => {
		await SecureStore.deleteItemAsync(TOKEN_KEY);
		setToken(null);
	};

	return (
		<AuthContext.Provider value={{ token, setToken, logout }}>{children}</AuthContext.Provider>
	);
};
