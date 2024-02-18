"use client";
import NextImage from "../_components/NextImage/NextImage";
import Logo from "../_components/Logo/Logo";
import { useState } from "react";
import {
	signInWithGooglePopup,
	createUserDocumentFromAuth,
	createAuthUserWithEmailAndPassword,
} from "../_utils/firebase/firebase.utils";

const defaultFormFields = {
	displayName: "",
	email: "",
	password: "",
};

function Page() {
	const [formFields, setFormFields] = useState(defaultFormFields);
	const { displayName, email, password } = formFields;

	const resetFormFields = () => {
		setFormFields(defaultFormFields);
	};

	const handleSubmit = async (event) => {
		event.preventDefault();

		try {
			const { user } = await createAuthUserWithEmailAndPassword(email, password);
			await createUserDocumentFromAuth(user, { displayName });
			resetFormFields();
		} catch (error) {
			if (error.code === "auth/email-already-in-use") {
				alert("Cannot create user, email already in use");
			} else {
				console.log("User creation encountered an error", error);
			}
		}
	};

	const handleChange = (event) => {
		const { name, value } = event.target;
		setFormFields({ ...formFields, [name]: value });
	};

	const signGoogleUser = async () => {
		const { user } = await signInWithGooglePopup();
		const userDocRef = await createUserDocumentFromAuth(user);
	};

	return (
		<>
			<div className="flex min-h-screen flex-1">
				<div className="flex flex-1 flex-col justify-start px-4 py-12 sm:px-6 lg:flex-none lg:px-20 lg:py-44 xl:px-52 xl:py-44">
					<div className="mx-auto w-full max-w-sm lg:w-96">
						<div>
							<Logo />
							<h2 className="mt-8 text-2xl font-bold leading-9 tracking-tight text-gray-900 text-center">
								Create your account
							</h2>
						</div>
						<div className="mt-10">
							<div>
								<form onSubmit={handleSubmit} className="space-y-6">
									<div>
										<label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
											Full Name
										</label>
										<div className="mt-2">
											<input
												id="name"
												name="displayName"
												type="text"
												value={displayName}
												onChange={handleChange}
												required
												className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
											/>
										</div>
									</div>

									<div>
										<label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
											Email Address
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
												className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
												className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
											/>
										</div>
									</div>
									<div>
										<button
											type="submit"
											className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
										>
											Sign up
										</button>
									</div>
								</form>
							</div>

							<div className="mt-10">
								<div className="relative">
									<div className="absolute inset-0 flex items-center" aria-hidden="true">
										<div className="w-full border-t border-gray-200" />
									</div>
									<div className="relative flex justify-center text-sm font-medium leading-6">
										<span className="bg-white px-6 text-gray-900">Or continue with</span>
									</div>
								</div>

								<div className="mt-6 grid grid-cols-1 gap-4">
									<a
										href="#"
										onClick={signGoogleUser}
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
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="relative hidden w-0 flex-1 lg:block">
					<NextImage
						className="absolute inset-0 h-full w-full object-cover"
						src="https://images.unsplash.com/photo-1496917756835-20cb06e75b4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1908&q=80"
						alt=""
						width={1920}
						height={1080}
					/>
				</div>
			</div>
		</>
	);
}

export default Page;
