import { Badge } from "@/components/ui/badge";

type MunicipeListProps = {
	id: string;
	districtName: string;
};

export function MunicipeList({
	municipes,
}: {
	municipes: MunicipeListProps[];
}) {
	return (
		<div className="flex flex-wrap gap-x-2 gap-y-5 w-[25rem] mt-10 lg:w-[40rem]">
			{municipes.map((municipes) => {
				return (
					<Badge key={municipes.id} variant="secondary">
						{municipes.districtName}
					</Badge>
				);
			})}
		</div>
	);
}
