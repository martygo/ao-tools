import { Suspense } from "react";

import { AO_API } from "@/constants";

import { HeadlineTemplate } from "@/components/headline-template";
import { ProvinceList } from "./province-list";

async function getData() {
	const res = await fetch(`${AO_API}geography/provinces`);

	if (!res.ok) {
		throw new Error("Failed to fetch data");
	}

	return res.json();
}

export default async function Provinces() {
	const data = await getData();

	return (
		<div className="max-w-4xl mx-auto p-8">
			<HeadlineTemplate
				title="Províncias"
				description="Lista de todas as províncias de Angola."
			/>

			<Suspense fallback={<p>Carregando...</p>}>
				<ProvinceList provinces={data} />
			</Suspense>
		</div>
	);
}
