import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NavBar from "./_components/NavBar/NavBar";
import { Analytics } from "@vercel/analytics/react";
import { UserProvider } from "./_context/user.context";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Melocue",
	description: "Melocue is a music streaming service.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
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
