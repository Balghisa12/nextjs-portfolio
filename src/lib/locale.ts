import { createContext, useContext } from "react";

export type Locale = "en" | "fr";

/** A string available in every supported locale. */
export type L = Record<Locale, string>;

interface LocaleState {
	locale: Locale;
	setLocale: (locale: Locale) => void;
	t: (text: L) => string;
}

export const LocaleContext = createContext<LocaleState | null>(null);

export function useLocale(): LocaleState {
	const context = useContext(LocaleContext);
	if (!context) {
		throw new Error("useLocale must be used within a LocaleProvider");
	}
	return context;
}
