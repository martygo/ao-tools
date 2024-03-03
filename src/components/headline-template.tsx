import { Separator } from "@/components/ui/separator";
import { Typography } from "@/components/ui/typography";
import { Share2Icon } from "lucide-react";

type HeadlineTemplateProps = {
	title: string;
	description: string;
};

export function HeadlineTemplate({
	title,
	description,
}: Readonly<HeadlineTemplateProps>) {
	return (
		<>
			<div className="flex justify-between items-center mb-6">
				<Typography className="text-4xl font-bold">
					{title}
				</Typography>
				<Share2Icon className="text-gray-400 w-6 h-6" />
			</div>

			<Separator className="border-b-2 border-gray-200 mb-4" />

			<Typography className="mb-6">{description}</Typography>
		</>
	);
}
