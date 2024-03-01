import { toolsData } from "@/constants";

import { CardTools } from "./card-tools";
import { FilterTools } from "./filter-tools";

export function ToolList() {
	return (
		<>
			<FilterTools />

			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 z-20">
				{toolsData.map((tool, index) => {
					return (
						<CardTools
							key={index}
							title={tool.title}
							description={tool.description}
							status={tool.status}
							link={tool.link}
						/>
					);
				})}
			</div>
		</>
	);
}
