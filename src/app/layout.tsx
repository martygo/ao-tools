import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { seo } from "@/constants";

import "./../styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = seo;

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`bg-white ${inter.className}`}>
				{children}
			</body>
		</html>
	);
}
