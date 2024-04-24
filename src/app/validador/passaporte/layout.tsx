import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Validar Passaporte de Angola",
	description: "Validar passaporte de Angola.",
};

export default function PassaportLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return <main className="min-h-screen">{children}</main>;
}
