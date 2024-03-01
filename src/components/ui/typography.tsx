import React from "react";

import { cn } from "@/lib/utils";

interface TypographyProps
	extends React.HTMLAttributes<HTMLHeadingElement> {
	className?: string;
	children: React.ReactNode;
}

export const Typography: React.FC<TypographyProps> = ({
	className,
	children,
	...props
}) => {
	return (
		<h1 className={cn("m-0 p-0", className)} {...props}>
			{children}
		</h1>
	);
};
