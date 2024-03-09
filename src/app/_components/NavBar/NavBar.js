"use client";
import Link from "next/link";
import Logo from "../Logo/Logo";
import SearchBar from "./SearchBar";
import { Dialog } from "@headlessui/react";
import { useRouter } from "next/navigation";
import { useState, useContext } from "react";
import { UserContext } from "../../_context/user.context";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { signOutUser } from "../../_utils/firebase/firebase.utils";

const navigation = [
	{ name: "Home", href: "/" },
	{ name: "Marketplace", href: "/marketplace" },
];

export default function NavBar() {
	const router = useRouter();
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const { currentUser } = useContext(UserContext);

	return (
		<header className="bg-lime-400 w-full z-50">
			<nav className="mx-auto flex max-w-7xl items-center justify-between gap-x-6 p-2 lg:px-8" aria-label="Global">
				<div className="flex">
					<Link href="/" className="-m-1.5 p-1.5">
						<span className="sr-only">Melocue</span>
						<Logo />
					</Link>
				</div>
				<div className="flex-1 flex items-center justify-center lg:justify-center">
					<SearchBar />
				</div>
				<div className="hidden lg:flex lg:gap-x-12">
					{navigation.map((item) => (
						<Link
							key={item.name}
							href={item.href}
							className="text-sm font-semibold leading-6 text-gray-900 hover:text-gray-600"
						>
							{item.name}
						</Link>
					))}
				</div>
				<div className="flex lg:flex-1 items-center justify-end gap-x-6">
					{currentUser ? (
						<>
							<Link
								href="#"
								onClick={signOutUser}
								className="hidden lg:block lg:text-sm lg:font-semibold lg:leading-6 lg:text-gray-900 hover:text-gray-600"
							>
								Sign Out
							</Link>
							<Link
								href="/profile"
								className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
							>
								Profile
							</Link>
						</>
					) : (
						<>
							<Link
								href="/signin"
								className="hidden lg:block lg:text-sm lg:font-semibold lg:leading-6 lg:text-gray-900 hover:text-gray-600"
							>
								Sign In
							</Link>
							<Link
								href="/signup"
								className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
							>
								Sign Up
							</Link>
						</>
					)}
				</div>
				<div className="flex lg:hidden">
					<button
						type="button"
						className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
						onClick={() => setMobileMenuOpen(true)}
					>
						<span className="sr-only">Open main menu</span>
						<Bars3Icon className="h-6 w-6" aria-hidden="true" />
					</button>
				</div>
			</nav>
			<Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
				<div className="fixed inset-0 z-10" />
				<Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-lime-400 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
					<div className="flex items-center gap-x-6">
						<Link href="#" className="-m-1.5 p-1.5">
							<span className="sr-only">Your Company</span>
							<Logo />
						</Link>
						{currentUser ? (
							<>
								<Link
									href="/profile"
									className="ml-auto rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
								>
									Profile
								</Link>
							</>
						) : (
							<>
								<Link
									href="/signup"
									className="ml-auto rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
								>
									Sign Up
								</Link>
							</>
						)}
						<button
							type="button"
							className="-m-2.5 rounded-md p-2.5 text-gray-700"
							onClick={() => setMobileMenuOpen(false)}
						>
							<span className="sr-only">Close menu</span>
							<XMarkIcon className="h-6 w-6" aria-hidden="true" />
						</button>
					</div>
					<div className="mt-6 flow-root">
						<div className="-my-6 divide-y divide-gray-500/10">
							<div className="space-y-2 py-6">
								{navigation.map((item) => (
									<Link
										key={item.name}
										href={item.href}
										className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
									>
										{item.name}
									</Link>
								))}
							</div>
							<div className="py-6">
								{currentUser ? (
									<>
										<Link
											href="#"
											onClick={signOutUser}
											className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
										>
											Sign Out
										</Link>
									</>
								) : (
									<>
										<Link
											href="/signin"
											className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
										>
											Sign In
										</Link>
									</>
								)}
							</div>
						</div>
					</div>
				</Dialog.Panel>
			</Dialog>
		</header>
	);
}
