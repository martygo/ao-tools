import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { seo } from "@/constants";

import { AppBar } from "@/components/app-bar";
import { Footer } from "@/components/footer";
import { ThemeProvider } from "@/components/provider/theme-provider";

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
			<body className={`${inter.className}`}>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					<AppBar />
					<main className="min-h-screen px-2 sm:px-4 lg:px-6">
						<div className="py-6">{children}</div>
						<Footer />
					</main>
				</ThemeProvider>
			</body>
		</html>
	);
}
