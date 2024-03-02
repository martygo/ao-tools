import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";

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
							<SelectItem key={language.value} value={language.value}>
								{language.label}
							</SelectItem>
						);
					})}
				</SelectGroup>
			</SelectContent>
		</Select>
	);
};
