import { Suspense } from "react";

import { ToolList } from "@/components/tool-list";
import { Typography } from "@/components/ui/typography";

import Loading from "./loading";

export default function Home() {
	return (
		<section>
			<Typography className="text-2xl font-bold mb-4">
				Todas ferramentas
			</Typography>

			<Suspense fallback={<Loading />}>
				<ToolList />
			</Suspense>
		</section>
	);
}
