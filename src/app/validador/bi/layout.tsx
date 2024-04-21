import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Validar bilhete de identidade",
	description: "Validar bilhete de identidade de Angola.",
};

export default function BiLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return <main className="min-h-screen">{children}</main>;
}
