"use client";
import "./globals.css";
import { Inter } from "next/font/google";
import NavBar from "./_components/NavBar/NavBar";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { UserProvider } from "./_context/user.context";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<link rel="icon" href="/favicon_alt_round.png" sizes="any" />
			<body className={inter.className + " flex flex-col min-h-screen"}>
				<UserProvider>
					<NavBar />
					<main className="flex-grow">{children}</main>
				</UserProvider>
				<Analytics />
				<SpeedInsights />
			</body>
		</html>
	);
}
