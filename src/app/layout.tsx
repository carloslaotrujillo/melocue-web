"use client";

import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { usePathname } from "next/navigation";

import NavBar from "./_components/NavBar/NavBar";
import Footer from "./_components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

const FooterRender = () => {
	const path = usePathname();

	if (path === "/signup" || path === "/signin") {
		return null;
	} else {
		return <Footer />;
	}
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<link rel="icon" href="/favicon.png" sizes="any" />
			<body className={inter.className + " flex flex-col min-h-screen"}>
				<NavBar />
				<main className="flex-grow">{children}</main>
				{FooterRender()}
			</body>
		</html>
	);
}
