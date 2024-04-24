export namespace GeographyRequests {
	export const getProvinces = async () => {
		const res = await fetch(
			`${process.env.NEXT_PUBLIC_API_URL_BI_GOV}district/level/0`,
		);

		if (!res.ok) {
			throw new Error("Failed to fetch data");
		}

		return res.json();
	};

	export const getMunicipeByProvince = async (
		provincia: string = "Luanda",
	) => {
		const res = await fetch(
			`${process.env.NEXT_PUBLIC_API_URL_BI_GOV}geography/county?provincia=${provincia}`,
		);

		if (!res.ok) {
			throw new Error("Failed to fetch data");
		}

		return res.json();
	};
}
