import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Lista de Municípios de Angola",
	description: "Lista de todos os municípios de Angola.",
};

export default function MunicipeLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return <main className="min-h-screen">{children}</main>;
}
