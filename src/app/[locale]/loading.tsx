import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
	return (
		<div className="flex flex-col min-h-screen">
			<main className="flex-1 flex flex-col items-center justify-center py-6">
				<div className="container flex flex-col items-start justify-start gap-4 px-4 text-center md:gap-10 md:px-6">
					<div className="space-y-2 text-center">
						<Skeleton className="h-6 w-[200px] md:w-[400px]" />
						<Skeleton className="h-4 w-[250px]" />
					</div>

					<Skeleton className="h-[400px] w-full rounded-lg" />

					<div className="w-full flex flex-col justify-center items-center gap-y-4">
						<div className="grid max-w-sm w-full grid-cols-1 items-center justify-center gap-4 md:gap-8 md:max-w-4xl md:grid-cols-3">
							<Skeleton className="h-24 w-full rounded-lg" />
							<Skeleton className="h-24 w-full rounded-lg" />
							<Skeleton className="h-24 w-full rounded-lg" />
						</div>
						<div className="grid max-w-sm w-full grid-cols-1 items-center justify-center gap-4 md:gap-8 md:max-w-4xl md:grid-cols-3">
							<Skeleton className="h-24 w-full rounded-lg" />
							<Skeleton className="h-24 w-full rounded-lg" />
							<Skeleton className="h-24 w-full rounded-lg" />
						</div>
					</div>
				</div>
			</main>
		</div>
	);
}
