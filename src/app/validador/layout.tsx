import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Validador",
	description:
		"Validar números de telefone, passaporte, bilhete de identidade e outros.",
};

export default function ValidateLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return <main className="min-h-screen">{children}</main>;
}
