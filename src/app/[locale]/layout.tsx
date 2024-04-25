import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { seo } from "@/constants";

import { AppBar } from "@/components/app-bar";
import { Footer } from "@/components/footer";
import { ThemeProvider } from "@/components/provider/theme-provider";

export const metadata: Metadata = seo;
const inter = Inter({ subsets: ["latin"] });

import "./../../styles/globals.css";

export default function RootLayout({
	children,
	params,
}: Readonly<{
	children: React.ReactNode;
	params: { locale: string };
}>) {
	return (
		<html lang={params.locale}>
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
					</main>
					<Footer />
				</ThemeProvider>
			</body>
		</html>
	);
}
