import { IMunicipeSchemeAPI, MunicipeItem } from "./municipe-item";

export const MunicipeList = ({
	provinces,
}: {
	provinces: IMunicipeSchemeAPI[];
}) => {
	return (
		<div>
			{provinces.map((province) => (
				<MunicipeItem key={province.id} {...province} />
			))}
		</div>
	);
};
