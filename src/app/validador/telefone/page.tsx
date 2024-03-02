"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Typography } from "@/components/ui/typography";
import { ClipboardIcon, Share2Icon } from "lucide-react";
import { revalidatePath } from "next/cache";

async function validatePhone(phone: string) {
	const res = await fetch(
		`${process.env.NEXT_PUBLIC_API_URL}/validate/phone/${phone}`,
	);

	if (!res.ok) {
		revalidatePath("/validador/telefone");
	}

	return res.json();
}

export default function Phone() {
	const onValidate = async () => {
		const phone = "+244935966775";
		const data = await validatePhone(phone);
		console.log(data);
	};

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

			<div className="flex gap-x-4 mb-4">
				<Input placeholder="Indique um número de telefone pra validar..." />
				<Button onClick={onValidate}>Validar</Button>
			</div>

			<div className="bg-gray-100 p-4 rounded-md">
				<Typography className="text-lg font-semibold mb-4">
					Exemplos de números de telefone válidos
				</Typography>

				<div className="space-y-2">
					<div className="flex justify-between items-center">
						<span>244935966775</span>
						<ClipboardIcon className="text-gray-400 w-5 h-5 cursor-pointer" />
					</div>
					<div className="flex justify-between items-center">
						<span>922934558</span>
						<ClipboardIcon className="text-gray-400 w-5 h-5 cursor-pointer" />
					</div>
				</div>
			</div>
		</div>
	);
}
