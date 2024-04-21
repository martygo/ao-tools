"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

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
	numberPassport: z
		.string()
		.min(8, {
			message:
				"O número do passaporte deve ter no mínimo 8 caracteres.",
		})
		.max(10, {
			message:
				"O número do passaporte deve ter no máximo 10 caracteres.",
		}),
});

export default function Passaport() {
	const [states, setStates] = useState({
		loading: false,
		error: true,
		data: "",
	});

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			numberPassport: "",
		},
	});

	async function validatePassort(number: string) {
		setStates({
			...states,
			loading: true,
		});

		try {
			const res = await fetch(
				`https://angolaapi-pr-66.onrender.com/api/v1/validate/passport/${number}`,
			);

			if (res.ok) {
				setStates({
					loading: false,
					error: false,
					data: "Passaporte válido 👍.",
				});
			}

			if (!res.ok) {
				setStates({
					loading: false,
					error: true,
					data: "Passaporte inválido 👎.",
				});
			}
		} catch (error) {
			console.error(error);
		}
	}

	async function onSubmit(values: z.infer<typeof formSchema>) {
		await validatePassort(values.numberPassport.toLowerCase());
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
						{states.loading ? "Aguarde..." : "Validar"}
					</Button>
				</form>
			</Form>

			{states.data && (
				<div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md">
					<div className="space-y-2">
						<div className="flex items-center">
							<span>{states.data}</span>
						</div>
					</div>
				</div>
			)}
		</div>
	);
}
