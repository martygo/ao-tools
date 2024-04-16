"use server";

import { revalidatePath } from "next/cache";

export async function validatePassort() {
	try {
		console.log("Validating passport...");
		const res = await fetch(
			`${process.env.NEXT_PUBLIC_API_URL}validate/passport/212121212`,
		);
		if (!res.ok) {
			throw new Error("Failed to fetch data");
		}

		return res.json();
	} catch (error) {
		console.error(error);
	}

	revalidatePath("/validador/passaporte");
}
