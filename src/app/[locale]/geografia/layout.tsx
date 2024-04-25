import type { Metadata } from "next";

export const metadata: Metadata = {
	description:
		"Informações sobre as províncias e munícipios de Angola.",
	keywords: "provincias, munícipios, angola, informação, geografia",
};

export default function GeographyLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return <main className="min-h-screen">{children}</main>;
}
