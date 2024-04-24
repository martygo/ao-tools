import { Suspense } from "react";

import { HeadlineTemplate } from "@/components/headline-template";
import { ProvincesFilter } from "./_components/provinces-filter";

import { GeographyRequests, ProvinceRequestType } from "../functions";

export default async function Municipes() {
	const provinces = await GeographyRequests.getProvinces();

	const provincesData = provinces.map(
		(province: ProvinceRequestType) => ({
			value: province.id,
			label: province.districtName.toLowerCase(),
		}),
	);

	return (
		<div className="max-w-4xl mx-auto p-8">
			<HeadlineTemplate
				title="Municípios"
				description="Lista de municípios por província."
			/>

			<Suspense fallback={<p>Carregando...</p>}>
				<ProvincesFilter provinces={provincesData} />
			</Suspense>

			<Suspense fallback={<p>Carregando...</p>}></Suspense>
		</div>
	);
}
