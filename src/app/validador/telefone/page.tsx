"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Typography } from "@/components/ui/typography";
import { ClipboardIcon, Share2Icon } from "lucide-react";

import { PhoneValidator } from "./phone-validator";

type Result = {
	phoneNumber: string;
	isFromAngola: boolean;
	countryCode: string;
};

const formSchema = z.object({
	phone: z
		.string()
		.min(9, {
			message: "O número de telefone deve ter pelo menos 9 dígitos",
		})
		.max(13, {
			message: "O número de telefone deve ter no máximo 13 dígitos",
		}),
});

export default function Phone() {
	const [result, setResult] = useState<Result | null>(null);

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			phone: "",
		},
	});

	function onSubmit(values: z.infer<typeof formSchema>) {
		const phoneNumber = new PhoneValidator().isPhone(values.phone);

		if (phoneNumber) {
			setResult({
				phoneNumber: phoneNumber.nationalNumber,
				isFromAngola: phoneNumber.country === "AO",
				countryCode: phoneNumber.countryCallingCode,
			});
		}

		form.reset();
	}

	return (
		<div className="max-w-4xl mx-auto p-8">
			<div className="flex justify-between items-center mb-6">
				<Typography className="text-4xl font-bold">
					Validar Telefone
				</Typography>
				<Share2Icon className="text-gray-400 w-6 h-6" />
			</div>

			<Separator className="border-b-2 border-gray-200 mb-4" />

			<Typography className="mb-6">
				Validar números de telefone. Verifique se o número é válido e
				obtenha e a operador correspondente.
			</Typography>

			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(onSubmit)}
					className="flex gap-x-4 mb-4"
				>
					<FormField
						control={form.control}
						name="phone"
						render={({ field }) => (
							<FormItem className="w-full">
								<FormControl>
									<Input
										placeholder="Indique um número de telefone pra validar..."
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

			{result && (
				<div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md">
					<div className="space-y-2">
						<div className="flex justify-between items-center">
							<span>Número: {result?.phoneNumber}.</span>
							<ClipboardIcon className="text-gray-400 w-5 h-5 cursor-pointer" />
						</div>
						<div className="flex justify-between items-center">
							<span>
								Número é de Angola?:{" "}
								{result?.isFromAngola ? "Sim" : "Nāo"}.
							</span>
						</div>
						<div className="flex justify-between items-center">
							<span>Código de chamada: {result?.countryCode}.</span>
						</div>
						<div className="flex justify-between items-center">
							<span>Operadora: Indisponível.</span>
						</div>
					</div>
				</div>
			)}
		</div>
	);
}
