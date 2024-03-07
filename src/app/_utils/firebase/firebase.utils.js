import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
import {
	getAuth,
	signOut,
	signInWithRedirect,
	onAuthStateChanged,
	GoogleAuthProvider,
	signInWithEmailAndPassword,
	createUserWithEmailAndPassword,
} from "firebase/auth";

// Firebase Configuration
const firebaseConfig = {
	apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
	authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
	databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
	projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
	storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
	messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
	appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore();

// Google Authentication
const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);

// Email and Password Authentication
export const createAuthUserWithEmailAndPassword = async (email, password) => {
	if (!email || !password) return;

	return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
	if (!email || !password) return;

	return await signInWithEmailAndPassword(auth, email, password);
};

// Sign Out
export const signOutUser = async () => await signOut(auth);

// Create User Document
export const createUserDocumentFromAuth = async (userAuth, additionalInformation = {}) => {
	if (!userAuth) return;

	const userRef = doc(db, "users", userAuth.uid);
	const userSnap = await getDoc(userRef);

	if (!userSnap.exists()) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();

		try {
			await setDoc(userRef, {
				displayName,
				email,
				createdAt,
				...additionalInformation,
			});
		} catch (error) {
			console.error("Error creating user", error.message);
		}
	}

	return userRef;
};

// Newsletter
export const createNewNewsletterEmail = async (email) => {
	if (!email) return;

	const newsletterRef = doc(db, "newsletter", email);
	const newsletterSnap = await getDoc(newsletterRef);

	if (!newsletterSnap.exists()) {
		try {
			await setDoc(newsletterRef, {
				email,
			});
		} catch (error) {
			console.error("Error creating newsletter email", error.message);
		}
	}

	return newsletterRef;
};

// Auth State Change Listener
export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback);
