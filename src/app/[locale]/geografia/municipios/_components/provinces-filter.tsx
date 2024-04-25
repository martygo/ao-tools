"use client";

import { useContext, useEffect, useState } from "react";

import { CaretSortIcon } from "@radix-ui/react-icons";
import { CheckIcon } from "lucide-react";

import { GOV_API } from "@/constants";
import { fetcher } from "@/lib/swr/fetcher";
import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";

import {
	Command,
	CommandGroup,
	CommandItem,
} from "@/components/ui/command";

import { MunicipeContext } from "../municipe-context";
import { MunicipeList } from "./municipe-list";

export type ProvinceFilterType = {
	id: string;
	districtName: string;
};

export type MunicipeFilterType = {
	id: string;
	districtName: string;
};

export function ProvincesFilter() {
	const [open, setOpen] = useState(false);
	const [value, setValue] = useState("");
	const [municipes, setMunicipes] = useState<MunicipeFilterType[]>(
		[],
	);

	const mappinProvinces = (data: ProvinceFilterType[]) => {
		return data.map((province: ProvinceFilterType) => ({
			value: province.id,
			label: province.districtName.toLowerCase(),
		}));
	};

	const getMunicipeByProvince = (provinceId: string) => {
		if (!provinceId && provinceId !== "") {
			return;
		}

		fetcher(`${GOV_API}district/${provinceId}`).then((data) => {
			setMunicipes(data);
		});
	};

	const { provinces } = useContext(MunicipeContext);
	const provincesData = provinces ? mappinProvinces(provinces) : [];

	useEffect(() => {
		if (value !== "") {
			getMunicipeByProvince(value);
		}

		return () => {};
	}, [value]);

	return (
		<section>
			<Popover open={open} onOpenChange={setOpen}>
				<PopoverTrigger asChild>
					<Button
						variant="outline"
						role="combobox"
						aria-expanded={open}
						className="w-[200px] justify-between"
					>
						{value
							? provincesData.find(
									(province) => province.value === value,
							  )?.label
							: "Escolher província..."}
						<CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
					</Button>
				</PopoverTrigger>

				<PopoverContent className="w-[200px] p-0">
					<Command>
						<CommandGroup>
							{provincesData.map((province) => (
								<CommandItem
									key={province.value}
									value={province.value}
									onSelect={(currentValue: any) => {
										setValue(
											currentValue === value ? "" : currentValue,
										);
										setOpen(false);
									}}
								>
									{province.label}
									<CheckIcon
										className={cn(
											"ml-auto h-4 w-4",
											value === province.value
												? "opacity-100"
												: "opacity-0",
										)}
									/>
								</CommandItem>
							))}
						</CommandGroup>
					</Command>
				</PopoverContent>
			</Popover>

			<div className="w-[10rem]">
				<MunicipeList municipes={municipes} />
			</div>
		</section>
	);
}
