import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { Footer } from "@/components/footer";
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
				<main className="min-h-screen px-2 sm:px-4 lg:px-6">
					<div className="py-6">{children}</div>
					<Footer />
				</main>
			</body>
		</html>
	);
}
