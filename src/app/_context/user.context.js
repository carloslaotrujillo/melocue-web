"use client";

import { useRouter } from "next/navigation";
import { createContext, useState, useEffect } from "react";
import { onAuthStateChangedListener, createUserDocumentFromAuth } from "../_utils/firebase/firebase.utils";

export const UserContext = createContext({
	setCurrentUser: () => null,
	currentUser: null,
});

export const UserProvider = ({ children }) => {
	const router = useRouter();
	const [currentUser, setCurrentUser] = useState(null);
	const value = { currentUser, setCurrentUser };

	useEffect(() => {
		const unsubscribe = onAuthStateChangedListener((user) => {
			if (user) {
				try {
					(async () => {
						await createUserDocumentFromAuth(user);
					})();
				} catch (error) {
					console.error("User sign in encountered an error", error);
					alert("Cannot sign in user, an error has been emitted");
				}
			} else {
				// router.push("/");
			}
			setCurrentUser(user);
		});

		return unsubscribe;
	}, []);

	return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
