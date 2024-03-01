import { data } from "@/constants";

import { CardTool } from "./card-tool";
import { FilterTools } from "./filter-tools";

export function ToolList() {
	return (
		<div>
			<FilterTools />

			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 z-20">
				{data.map((tool, index) => {
					return (
						<CardTool
							key={index}
							title={tool.title}
							description={tool.description}
							category={tool.category}
							status={tool.status}
							link={tool.link}
						/>
					);
				})}
			</div>
		</div>
	);
}
