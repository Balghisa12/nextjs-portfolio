import { type Locale, useLocale } from "@/lib/locale";
import { ui } from "@/content/ui";
import { cn } from "@/lib/utils";

const LOCALES: Locale[] = ["en", "fr"];

export function LanguageSwitcher() {
	const { locale, setLocale, t } = useLocale();

	return (
		<div
			role="group"
			aria-label={t(ui.language.label)}
			className="flex rounded-full bg-black/70 p-1 text-[13px] font-bold"
		>
			{LOCALES.map((option) => (
				<button
					key={option}
					type="button"
					lang={option}
					aria-label={t(ui.language[option])}
					aria-pressed={locale === option}
					onClick={() => setLocale(option)}
					className={cn(
						"h-8 min-w-10 rounded-full px-3 transition-colors duration-150",
						locale === option ? "bg-ink text-black" : "text-muted hover:text-ink",
					)}
				>
					{option.toUpperCase()}
				</button>
			))}
		</div>
	);
}
