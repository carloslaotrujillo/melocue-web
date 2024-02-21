import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { createNewNewsletterEmail } from "../../_utils/firebase/firebase.utils";

export default function Newsletter() {
	const [email, setEmail] = useState("");
	const [recaptchaValue, setRecaptchaValue] = useState(null);

	const onRecaptchaChange = (value) => {
		setRecaptchaValue(value);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (recaptchaValue) {
			try {
				await createNewNewsletterEmail(email);
				setEmail("");
				alert("Thank you for subscribing to our newsletter!");
			} catch (error) {
				console.error(error);
				alert("Error sending email, please try again later or contact support.");
			}
		} else {
			alert("Please verify that you are not a robot.");
		}
	};

	return (
		<div className="bg-white py-16 sm:py-24 lg:py-32">
			<div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 lg:grid-cols-12 lg:gap-8 lg:px-8">
				<div className="max-w-xl text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:col-span-7">
					<h2 className="inline sm:block lg:inline xl:block">Want product news and updates?</h2>{" "}
					<p className="inline sm:block lg:inline xl:block">Sign up for our newsletter.</p>
				</div>
				<form onSubmit={handleSubmit} className="w-full max-w-md lg:col-span-5 lg:pt-2">
					<div className="flex gap-x-4">
						<label htmlFor="email-address" className="sr-only">
							Email
						</label>
						<input
							id="email-address"
							name="email"
							type="email"
							value={email}
							autoComplete="email"
							onChange={(e) => setEmail(e.target.value)}
							required
							className="min-w-0 flex-auto rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
							placeholder="Enter your email"
						/>
						<button
							type="submit"
							className="flex-none rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
						>
							Subscribe
						</button>
					</div>
					<ReCAPTCHA
						sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
						onChange={onRecaptchaChange}
						className="py-4"
					/>
				</form>
			</div>
		</div>
	);
}
