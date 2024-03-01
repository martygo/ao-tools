"use client";

import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@radix-ui/react-popover";
import { FilterIcon } from "lucide-react";

import { Button } from "@/components/ui/button";

export const FilterTools = () => {
	return (
		<Popover>
			<PopoverTrigger asChild>
				<Button
					className="w-[300px] justify-start text-left font-normal mb-4"
					id="date"
					variant="outline"
				>
					<FilterIcon className="mr-1 h-4 w-4 -translate-x-1" />
					Todos
				</Button>
			</PopoverTrigger>
			<PopoverContent
				align="start"
				className="w-auto p-0"
			></PopoverContent>
		</Popover>
	);
};
