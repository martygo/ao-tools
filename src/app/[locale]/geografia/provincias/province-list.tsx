import { IProvinceSchemeAPI, ProvinceItem } from "./province-item";

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
