import {
	Select,
	SelectContent,
	SelectGroup,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import Link from "next/link";

export const SelectLanguage = () => {
	const languages = [
		{ value: "pt", label: "Português" },
		{ value: "en", label: "Inglês" },
	];

	return (
		<Select>
			<SelectTrigger className="w-[180px]">
				<SelectValue
					placeholder={languages[0].label}
					defaultValue={languages[0].value}
				/>
			</SelectTrigger>
			<SelectContent>
				<SelectGroup>
					{languages.map((language) => {
						return (
							<div key={language.value} className="flex flex-col p-1">
								<Link
									href={`/${language.value}`}
									locale={language.value}
								>
									{language.label}
								</Link>
							</div>
						);
					})}
				</SelectGroup>
			</SelectContent>
		</Select>
	);
};
