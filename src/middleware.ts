import createMiddleware from "next-intl/middleware";

export default createMiddleware({
	//Add locales you want in the app
	locales: ["en", "pt"],

	// default locale if no match
	defaultLocale: "pt",
});

export const config = {
	// Match only internationalized pathnames
	matcher: ["/", "/(pt|en)/:path*"],
};
