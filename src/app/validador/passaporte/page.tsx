"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { validatePassort } from "@/app/actions";

import { HeadlineTemplate } from "@/components/headline-template";
import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
	numberPassport: z.string().min(8).max(10),
});

export default function Passaport() {
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			numberPassport: "",
		},
	});

	async function onSubmit(values: z.infer<typeof formSchema>) {
		const data = await validatePassort();

		console.log(data);

		form.reset();
	}

	return (
		<div className="max-w-4xl mx-auto p-8">
			<HeadlineTemplate
				title="Validar Passaporte"
				description="Validar passaporte de Angola."
			/>

			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(onSubmit)}
					className="flex gap-x-4 mb-4"
				>
					<FormField
						control={form.control}
						name="numberPassport"
						render={({ field }) => (
							<FormItem className="w-full">
								<FormControl>
									<Input
										placeholder="Indique um número de passaporte pra validar..."
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					<Button type="submit" disabled={!form.formState.isValid}>
						Validar
					</Button>
				</form>
			</Form>

			<div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md">
				<div className="space-y-2">
					<div className="flex items-center">
						<span>Número de Passaporte inválido 👎</span>
						<span>Número de Passaporte inválido 👌</span>
					</div>
				</div>
			</div>
		</div>
	);
}
