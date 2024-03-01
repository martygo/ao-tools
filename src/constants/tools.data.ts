export type ToolsDataProps = {
	title: string;
	description: string;
	link: string;
	status: "pending" | "completed" | "in-progress";
};

export const toolsData: ToolsDataProps[] = [
	{
		title: "Validar telefone ☎️",
		description:
			"Validar o número de telefone se é de Angola e a qual operadora pertence.",
		link: "/telefone",
		status: "pending",
	},
	{
		title: "Validar passaporte 🛂",
		description:
			"Validar o número de passaporte se é válido e é angolano.",
		link: "/passaporte",
		status: "pending",
	},
	{
		title: "Validar bilhete de identidade 🪪",
		description:
			"Validar o número de bilhete de identidade nacional.",
		link: "/bi",
		status: "pending",
	},
];
