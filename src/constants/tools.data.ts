export type DataProps = {
	title: string;
	description: string;
	category?: string;
	link: string;
	status: "pending" | "completed" | "in-progress";
};

export const category = {
	validador: "validador",
	taxas: "taxas",
	geografia: "geografia",
};

export const data: DataProps[] = [
	{
		title: "Validar telefone ☎️",
		description:
			"Validar o número de telefone se é de Angola e a qual operadora pertence.",
		category: category.validador,
		link: "/telefone",
		status: "pending",
	},
	{
		title: "Validar passaporte 🛂",
		description:
			"Validar o número de passaporte se é válido e é angolano.",
		category: category.validador,
		link: "/passaporte",
		status: "pending",
	},
	{
		title: "Validar bilhete de identidade 🪪",
		description:
			"Validar o número de bilhete de identidade nacional.",
		category: category.validador,
		link: "/bi",
		status: "pending",
	},
	{
		title: "Taxas de juros do BNA 🏦",
		description:
			"Ver o valor das taxas de juros do Banco Nacional de Angola.",
		category: category.taxas,
		link: "/juros-bna",
		status: "pending",
	},
	{
		title: "Taxas de câmbio do BNA 💱",
		description:
			"Ver o valor das taxas de câmbio do Banco Nacional de Angola.",
		category: category.taxas,
		link: "/cambio-bna",
		status: "pending",
	},
	{
		title: "Taxas de inflaçāo do BNA 💸",
		description:
			"Ver o valor das taxas de inflação do Banco Nacional de Angola.",
		category: category.taxas,
		link: "/inflacao-bna",
		status: "pending",
	},
	{
		title: "Taxas de juro de Luibor 🏦",
		description: "Ver o valor das taxas de juros do Luibor.",
		category: category.taxas,
		link: "/juros-luibor",
		status: "pending",
	},
	{
		title: "Taxas de variaçāo de câmbio 💸",
		description:
			"Ver o valor das taxas de variação de câmbio do Banco Nacional de Angola.",
		category: category.taxas,
		link: "/variacao-cambio-bna",
		status: "pending",
	},
	{
		title: "Taxas de juros dos bancos comercias 🏦",
		description:
			"Ver o valor das taxas de juros dos bancos comerciais de Angola.",
		category: category.taxas,
		link: "/juros-bancos",
		status: "pending",
	},
	{
		title: "Províncias de Angola 🇦🇴",
		description: "Ver a lista de províncias de Angola.",
		category: category.geografia,
		link: "/provincias",
		status: "pending",
	},
	{
		title: "Munícipios das províncias de Angola 🇦🇴",
		description:
			"Ver a lista de munícipios das províncias de Angola.",
		category: category.geografia,
		link: "/municipios",
		status: "pending",
	},
];
