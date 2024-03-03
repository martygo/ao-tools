import { HeadlineTemplate } from "@/components/headline-template";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Suspense } from "react";

type IProvinceSchemeAPI = {
	id: string;
	nome: string;
	capital: string;
	area: number;
	site_governo_provincial: string;
	municipios: string;
	fundada: string;
};

async function getData() {
	const res = await fetch(
		`${process.env.NEXT_PUBLIC_API_URL}geography/provinces`,
	);

	if (!res.ok) {
		throw new Error("Failed to fetch data");
	}

	return res.json();
}

export const ProvinceItem = ({
	nome,
	capital,
	area,
	fundada,
	site_governo_provincial,
	municipios,
}: IProvinceSchemeAPI) => {
	return (
		<Accordion type="single" collapsible>
			<AccordionItem value="item-1">
				<AccordionTrigger>{nome}</AccordionTrigger>
				<AccordionContent>
					<p>
						Capital: <span className="font-medium">{capital}</span>
					</p>
					<p>
						Área: <span className="font-medium">{area} km²</span>
					</p>
					<p>
						Fundação: <span className="font-medium">{fundada}</span>
					</p>
					<p>
						Website:{" "}
						<a
							href={site_governo_provincial}
							target="_blank"
							rel="noreferrer"
							className="text-blue-500 hover:underline"
						>
							<span className="font-medium">
								{site_governo_provincial}
							</span>
						</a>{" "}
					</p>
					<p>
						Municípios:{" "}
						<Badge>{JSON.parse(municipios).join(", ")}</Badge>{" "}
					</p>
				</AccordionContent>
			</AccordionItem>
		</Accordion>
	);
};

export const ProvinceList = ({
	provinces,
}: {
	provinces: IProvinceSchemeAPI[];
}) => {
	return (
		<div>
			{provinces.map((province) => (
				<ProvinceItem key={province.id} {...province} />
			))}
		</div>
	);
};

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
