"use client";

import Link from "next/link";

import Image from "next/image";
import { SelectLanguage } from "./select-language";
import { ThemeModeToggle } from "./theme-mode-toogle";

export function AppBar() {
	return (
		<header
			className="sticky top-0 z-20 w-full flex items-center justify-between h-16
            px-2 sm:px-4 lg:px-6 supports-[backdrop-filter]:bg-white/60 
            bg-white/95 dark:bg-slate-950/5 backdrop-blur"
		>
			<ul>
				<Link
					href="/"
					className="w-[9rem] h-8 flex items-center gap-x-1"
				>
					<Image
						src="https://avatars.githubusercontent.com/u/79377645?s=48&v=4"
						alt="Logo"
						width={32}
						height={32}
					/>
					<span className="font-semibold">AO Tools</span>
				</Link>
			</ul>
			<ul className="flex items-center gap-x-2">
				<SelectLanguage />
				<ThemeModeToggle />
			</ul>
		</header>
	);
}
