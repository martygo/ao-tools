import { Suspense } from "react";

import { HeadlineTemplate } from "@/components/headline-template";
import { ProvincesFilter } from "./_components/provinces-filter";

async function getProvinces() {
	const res = await fetch(
		`${process.env.NEXT_PUBLIC_API_URL}geography/province`,
	);

	if (!res.ok) {
		throw new Error("Failed to fetch data");
	}

	return res.json();
}

async function getMunicipeByProvince(provincia: string = "Luanda") {
	const res = await fetch(
		`${process.env.NEXT_PUBLIC_API_URL}geography/county?provincia=${provincia}`,
	);

	if (!res.ok) {
		throw new Error("Failed to fetch data");
	}

	console.log(res.json());

	return res.json();
}

export default async function Municipes() {
	const data = [
		{
			value: "next.js",
			label: "Next.js",
		},
		{
			value: "sveltekit",
			label: "SvelteKit",
		},
		{
			value: "vue",
			label: "Vue",
		},
	];

	return (
		<div className="max-w-4xl mx-auto p-8">
			<HeadlineTemplate
				title="Municípios"
				description="Lista de municípios por província."
			/>

			<Suspense fallback={<p>Carregando...</p>}>
				<ProvincesFilter provinces={data} />
			</Suspense>

			<Suspense fallback={<p>Carregando...</p>}>
				<p>adicionado</p>
			</Suspense>
		</div>
	);
}
