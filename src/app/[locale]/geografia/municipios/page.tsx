"use client";

import { Suspense } from "react";
import useSWR from "swr";

import { GOV_API } from "@/constants";
import { fetcher } from "@/lib/swr/fetcher";

import { HeadlineTemplate } from "@/components/headline-template";
import { ProvincesFilter } from "./_components/provinces-filter";

import { MunicipeContext } from "./municipe-context";

export default function Municipes() {
	const { data: provinces } = useSWR(
		`${GOV_API}district/level/0`,
		fetcher,
	);

	return (
		<div className="max-w-4xl mx-auto p-8">
			<HeadlineTemplate
				title="Municípios"
				description="Lista de municípios por província."
			/>

			<Suspense fallback={<p>Carregando...</p>}>
				<MunicipeContext.Provider value={{ provinces }}>
					<ProvincesFilter />
				</MunicipeContext.Provider>
			</Suspense>
		</div>
	);
}
