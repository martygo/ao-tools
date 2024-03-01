import { GitFork, LinkedinIcon } from "lucide-react";

import { Badge } from "@/components/ui/badge";

export function Footer() {
	const links = [
		{
			name: "GitHub",
			url: "",
			icon: <GitFork size={20} />,
		},
		{
			name: "LinkedIn",
			url: "https://www.linkedin.com/in/martins-gouveia/",
			icon: <LinkedinIcon size={20} />,
		},
	];

	return (
		<footer className="flex justify-center items-center gap-x-2 pb-4">
			{links.map((link) => {
				return (
					<a
						key={link.name}
						href={link.url}
						target="_blank"
						rel="noopener noreferrer"
					>
						<Badge className="flex items-center justify-center gap-x-1">
							<p>{link.icon || "div"}</p>
							<p>{link.name}</p>
						</Badge>
					</a>
				);
			})}
		</footer>
	);
}
