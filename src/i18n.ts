import { getRequestConfig } from "next-intl/server";
import { notFound } from "next/navigation";

const locales = ["en", "pt"];

export default getRequestConfig(async ({ locale }) => {
	if (!locales.includes(locale as any)) notFound();

	return {
		messages: (await import(`../messages/${locale}.json`)).default,
	};
});
