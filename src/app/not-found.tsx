import Link from "next/link";

export default function NotFound() {
	return (
		<div className="flex flex-col items-center justify-center w-full min-h-[calc(100vh-4rem)] text-center space-y-4 py-8">
			<div className="space-y-2">
				<h1 className="text-4xl font-bold tracking-tighter sm:text-6xl">
					404 - Page Not Found
				</h1>
				<p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
					Desculpa, essa página está sendo construída ou foi removida.
				</p>
			</div>
			<div className="flex w-full max-w-sm gap-2">
				<Link
					className="flex-1 inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-950 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
					href="/"
				>
					Voltar
				</Link>
			</div>
		</div>
	);
}
