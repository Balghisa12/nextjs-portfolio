import { useEffect, useState } from "react";
import { type L, type Locale, LocaleContext } from "@/lib/locale";

const STORAGE_KEY = "locale";

function readStoredLocale(): Locale {
	try {
		return localStorage.getItem(STORAGE_KEY) === "fr" ? "fr" : "en";
	} catch {
		return "en";
	}
}

export function LocaleProvider({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	const [locale, setLocaleState] = useState<Locale>(readStoredLocale);

	useEffect(() => {
		document.documentElement.lang = locale;
	}, [locale]);

	const setLocale = (next: Locale) => {
		setLocaleState(next);
		try {
			localStorage.setItem(STORAGE_KEY, next);
		} catch {
			// Storage unavailable (private mode): the choice lasts for this visit only.
		}
	};

	const t = (text: L) => text[locale];

	return (
		<LocaleContext.Provider value={{ locale, setLocale, t }}>
			{children}
		</LocaleContext.Provider>
	);
}
