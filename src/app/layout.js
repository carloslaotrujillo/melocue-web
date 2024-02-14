import "./globals.css";
import { Inter } from "next/font/google";
import NavBar from "./_components/NavBar/NavBar";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Melocue",
	description: "The ultimate social network tailored for audio enthusiasts",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<link rel="icon" href="/favicon_alt_round.png" sizes="any" />
			<body className={inter.className + " flex flex-col min-h-screen"}>
				<NavBar />
				<main className="flex-grow">{children}</main>
				<Analytics />
				<SpeedInsights />
			</body>
		</html>
	);
}
