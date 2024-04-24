import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Validar número de telefone de Angola",
	description:
		"Validar números de telefone. Verifique se o número é válido e obtenha e a operador correspondente.",
};

export default function PhoneLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return <main className="min-h-screen">{children}</main>;
}
