import * as React from "react";

import { cn } from "@/lib/utils";

export interface DividerProps
	extends React.HtmlHTMLAttributes<HTMLDivElement> {}

const Divider = ({ className }: DividerProps) => {
	return (
		<div
			className={cn("border-b-2 border-gray-200 mb-4", className)}
		/>
	);
};

export { Divider };
