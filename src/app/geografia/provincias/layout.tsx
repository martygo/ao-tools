import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Provincias",
	description: "Informações sobre as províncias de Angola.",
};

export default function ProvinceLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return <main className="min-h-screen">{children}</main>;
}
