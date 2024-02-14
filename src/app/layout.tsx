import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NavBar from "./_components/NavBar/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Melocue",
	description: "The ultimate social network tailored for audio enthusiasts",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<link rel="icon" href="/favicon_alt_round.png" sizes="any" />
			<body className={inter.className + " flex flex-col min-h-screen"}>
				<NavBar />
				<main className="flex-grow">{children}</main>
			</body>
		</html>
	);
}
