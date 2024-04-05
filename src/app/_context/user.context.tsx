"use client";

import { User } from "firebase/auth";
import { useRouter } from "next/navigation";
import { createContext, useState, useEffect, SetStateAction } from "react";
import { onAuthStateChangedListener, createUserDocumentFromAuth } from "../_utils/firebase/firebase.utils";

interface UserContextType {
	currentUser: User | null;
	setCurrentUser: React.Dispatch<React.SetStateAction<User | null>>;
}

export const UserContext = createContext<UserContextType | undefined>({
	setCurrentUser: () => null,
	currentUser: null,
});

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
	const router = useRouter();
	const [currentUser, setCurrentUser] = useState<User | null>(null);
	const value = { currentUser, setCurrentUser };

	useEffect(() => {
		const unsubscribe = onAuthStateChangedListener((user: User | null) => {
			if (user) {
				try {
					(async () => {
						await createUserDocumentFromAuth(user);
					})();
				} catch (error) {
					console.error("User sign in encountered an error", error);
					alert("Cannot sign in user, an error has been emitted");
				}
			}
			setCurrentUser(user);
		});

		return unsubscribe;
	}, []);

	return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
