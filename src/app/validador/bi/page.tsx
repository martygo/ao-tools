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
	numberBi: z.string().min(14).max(14),
});

type StatePassportProps = {
	affairsProgressState: string;
};

export default function Passaport() {
	const [visible, setVisible] = useState<boolean>(false);
	const [statePassport, setStatePassport] =
		useState<StatePassportProps>({
			affairsProgressState: "",
		});
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			numberBi: "",
		},
	});

	async function validateBI(number: string) {
		try {
			const res = await fetch(
				`${process.env.NEXT_PUBLIC_API_URL_BI_GOV}progress`,
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({
						affairsType: "IDCard",
						affairsReceipt: number,
						captchaValue: "",
					}),
				},
			);

			if (!res.ok) {
				throw new Error("Failed to fetch data");
			}

			return res.json();
		} catch (error) {
			console.error(error);
		}
	}

	async function onSubmit(values: z.infer<typeof formSchema>) {
		const data = await validateBI(values.numberBi);

		setStatePassport(data);
		setVisible(true);
	}

	return (
		<div className="max-w-4xl mx-auto p-8">
			<HeadlineTemplate
				title="Validar Bilhete de Identidade"
				description="Bilhete de Identidade de Angola."
			/>

			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(onSubmit)}
					className="flex gap-x-4 mb-4"
				>
					<FormField
						control={form.control}
						name="numberBi"
						render={({ field }) => (
							<FormItem className="w-full">
								<FormControl>
									<Input
										placeholder="Indique um de B.I pra validar..."
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

			{visible && (
				<div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md">
					<div className="space-y-2">
						<div className="flex items-center">
							{statePassport.affairsProgressState ===
							"WaitForLicensing" ? (
								<span>Número do Bilhete de Identidade válido 👌</span>
							) : (
								<span>
									Número de Bilhete de Identidade inválido 👎
								</span>
							)}
						</div>
					</div>
				</div>
			)}
		</div>
	);
}
