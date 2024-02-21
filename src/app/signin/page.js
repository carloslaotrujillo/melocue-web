"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useContext } from "react";
import Logo from "../_components/Logo/Logo";
import { UserContext } from "../_context/user.context";
import {
	signInWithGooglePopup,
	createUserDocumentFromAuth,
	signInAuthUserWithEmailAndPassword,
} from "../_utils/firebase/firebase.utils";

const defaultFormFields = {
	email: "",
	password: "",
};

export default function SignIn() {
	const router = useRouter();
	const [formFields, setFormFields] = useState(defaultFormFields);
	const { email, password } = formFields;
	const { setCurrentUser } = useContext(UserContext);

	const handleChange = (event) => {
		const { name, value } = event.target;
		setFormFields({ ...formFields, [name]: value });
	};

	const resetFormFields = () => {
		setFormFields(defaultFormFields);
	};

	const handleSubmit = async (event) => {
		event.preventDefault();

		try {
			const user = await signInAuthUserWithEmailAndPassword(email, password);
			setCurrentUser(user);
			router.push("/profile");
		} catch (error) {
			if (error.code === "auth/invalid-credential") {
				alert("Invalid credentials");
			} else {
				console.error("User sign in encountered an error", error);
				alert("Cannot sign in user, an error has been emitted");
			}
		}
	};

	const logGoogleUser = async () => {
		try {
			const { user } = await signInWithGooglePopup();
			await createUserDocumentFromAuth(user);
			setCurrentUser(user);
			router.push("/profile");
		} catch (error) {
			console.error("User sign in encountered an error", error);
			alert("Cannot sign in user, an error has been emitted");
		}
	};

	return (
		<>
			<div className="flex min-h-full flex-1 flex-col justify-start py-12 sm:px-6 lg:px-8">
				<div className="sm:mx-auto sm:w-full sm:max-w-md">
					<Logo />
					<h2 className="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
						Sign in to your account
					</h2>
				</div>

				<div className="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
					<div className="bg-white px-6 py-12 shadow sm:rounded-lg sm:px-12">
						<form onSubmit={handleSubmit} className="space-y-6">
							<div>
								<label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
									Email
								</label>
								<div className="mt-2">
									<input
										id="email"
										name="email"
										type="email"
										value={email}
										onChange={handleChange}
										autoComplete="email"
										required
										className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
									/>
								</div>
							</div>

							<div>
								<label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
									Password
								</label>
								<div className="mt-2">
									<input
										id="password"
										name="password"
										type="password"
										value={password}
										onChange={handleChange}
										autoComplete="current-password"
										required
										className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
									/>
								</div>
							</div>

							{/* TODO: Implement remember me and forgot password */}
							{/* <div className="flex items-center justify-between">
								<div className="flex items-center">
									<input
										id="remember-me"
										name="remember-me"
										type="checkbox"
										className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
									/>
									<label htmlFor="remember-me" className="ml-3 block text-sm leading-6 text-gray-900">
										Remember me
									</label>
								</div>

								<div className="text-sm leading-6">
									<Link href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
										Forgot password?
									</Link>
								</div>
							</div> */}

							<div>
								<button
									type="submit"
									className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
								>
									Sign in
								</button>
							</div>
						</form>

						<div>
							<div className="relative mt-10">
								<div className="absolute inset-0 flex items-center" aria-hidden="true">
									<div className="w-full border-t border-gray-200" />
								</div>
								<div className="relative flex justify-center text-sm font-medium leading-6">
									<span className="bg-white px-6 text-gray-900">Or continue with</span>
								</div>
							</div>

							<div className="mt-6 grid grid-cols-1 gap-4">
								<Link
									href="#"
									onClick={logGoogleUser}
									className="flex w-full items-center justify-center gap-3 rounded-md bg-white border border-solid border-black px-3 py-1.5 text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1D9BF0]"
								>
									<svg className="h-5 w-5" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
										<g>
											<path
												fill="#EA4335"
												d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
											></path>
											<path
												fill="#4285F4"
												d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
											></path>
											<path
												fill="#FBBC05"
												d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
											></path>
											<path
												fill="#34A853"
												d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
											></path>
											<path fill="none" d="M0 0h48v48H0z"></path>
										</g>
									</svg>
									<span className="text-sm font-semibold leading-6">Google</span>
								</Link>
							</div>
						</div>
					</div>

					<p className="mt-10 text-center text-sm text-gray-500">
						Not a member?{" "}
						<Link href="/signup" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
							Create an account
						</Link>
					</p>
				</div>
			</div>
		</>
	);
}
