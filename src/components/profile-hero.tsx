import { Link } from "react-router-dom";
import { profile } from "@/content/profile";
import { ui } from "@/content/ui";
import { useLocale } from "@/lib/locale";

export function ProfileHero() {
	const { t } = useLocale();

	return (
		<header className="bg-gradient-to-b from-[#1E3B2A] to-transparent px-4 pb-8 pt-16 md:px-6 lg:px-8">
			<div className="flex flex-col items-center gap-6 text-center md:flex-row md:items-end md:text-left">
				<img
					src={profile.portrait.src}
					srcSet={profile.portrait.srcSet}
					sizes="(min-width: 768px) 208px, 144px"
					width={256}
					height={256}
					alt={t(ui.portraitAlt)}
					fetchPriority="high"
					className="h-36 w-36 shrink-0 rounded-full object-cover shadow-2xl shadow-black/60 md:h-52 md:w-52"
				/>
				<div className="min-w-0">
					<p className="text-sm font-semibold">{t(profile.headline)}</p>
					<h1
						tabIndex={-1}
						className="mt-2 break-words text-[clamp(2.5rem,8vw,5.5rem)] font-extrabold leading-none tracking-tight"
					>
						{profile.name}
					</h1>
					<p className="mt-4 max-w-2xl text-base md:text-lg">{t(profile.tagline)}</p>
					<p className="mt-2 text-sm text-muted">{t(profile.context)}</p>
				</div>
			</div>
			<div className="mt-8 flex flex-wrap items-center justify-center gap-3 md:justify-start">
				<Link
					to="#work"
					className="inline-flex min-h-12 items-center rounded-full bg-accent px-7 font-bold text-black transition duration-150 hover:scale-[1.03] hover:bg-[#3BE477]"
				>
					{t(ui.home.explore)}
				</Link>
				<a
					href={profile.cv}
					download
					className="inline-flex min-h-12 items-center gap-1 rounded-full border border-white/30 px-6 font-bold transition-colors duration-150 hover:border-ink"
				>
					{t(ui.cv.download)}
					<span className="font-normal text-muted">({t(ui.cv.format)})</span>
				</a>
			</div>
		</header>
	);
}
