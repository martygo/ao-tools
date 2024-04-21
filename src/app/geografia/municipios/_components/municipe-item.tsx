import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";

export type IMunicipeSchemeAPI = {
	id: string;
	nome: string;
	capital: string;
	area: number;
	site_governo_provincial: string;
	municipios: string;
	fundada: string;
};

export const MunicipeItem = ({
	nome,
	capital,
	area,
	fundada,
	site_governo_provincial,
	municipios,
}: IMunicipeSchemeAPI) => {
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
