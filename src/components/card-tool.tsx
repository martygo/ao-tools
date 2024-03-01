import Link from "next/link";

import { Badge, BadgeProps } from "@/components/ui/badge";
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

interface CardToolProps {
	title: string;
	description: string;
	category?: string;
	link: string;
	status: "pending" | "completed" | "in-progress";
}

export const CardTool = ({
	title,
	description,
	category,
	link,
	status,
}: CardToolProps) => {
	const statusColor = {
		pending: "destructive",
		"in-progress": "secondary",
		completed: "default",
	} as Record<typeof status, BadgeProps["variant"]>;

	return (
		<Link href={link}>
			<Card className="h-[10rem] min-h-auto">
				<CardHeader>
					<CardTitle>{title}</CardTitle>
				</CardHeader>
				<CardContent>
					<div className="flex gap-x-2">
						<Badge className="mb-2" variant={statusColor[status]}>
							{status}
						</Badge>

						{category && (
							<Badge className="mb-2" variant="default">
								{category}
							</Badge>
						)}
					</div>
					<p>{description}</p>
				</CardContent>
			</Card>
		</Link>
	);
};
