import { useEffect, useRef } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import { Disc3, Home, ListMusic, Mail } from "lucide-react";
import { LibraryNav } from "@/components/library-nav";
import { LanguageSwitcher } from "@/components/language-switcher";
import { NowExploring } from "@/components/now-exploring";
import { profile } from "@/content/profile";
import { ui } from "@/content/ui";
import { useLocale } from "@/lib/locale";
import { cn } from "@/lib/utils";

const mobileItems = [
	{ to: "/", icon: Home, label: ui.nav.home },
	{ to: "/projects", icon: Disc3, label: ui.nav.projects },
	{ to: "/experience", icon: ListMusic, label: ui.nav.experience },
	{ to: "/contact", icon: Mail, label: ui.nav.contact },
];

/**
 * On navigation, move focus to the page's h1 (or the #hash target) so keyboard and
 * screen-reader users land on the new content. The first load keeps browser defaults.
 */
function useRouteFocus() {
	const { pathname, hash } = useLocation();
	const firstLoad = useRef(true);

	useEffect(() => {
		const isFirstLoad = firstLoad.current;
		firstLoad.current = false;
		if (isFirstLoad && !hash) return;

		const target = hash
			? document.getElementById(decodeURIComponent(hash.slice(1)))
			: document.querySelector<HTMLElement>("main h1");
		if (hash && target) target.scrollIntoView();
		else window.scrollTo(0, 0);
		target?.focus({ preventScroll: true });
	}, [pathname, hash]);
}

export function AppShell() {
	const { t } = useLocale();
	useRouteFocus();

	return (
		<>
			<a
				href="#main"
				className="sr-only z-50 rounded-full bg-accent px-5 py-3 font-bold text-black focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
			>
				{t(ui.nav.skip)}
			</a>
			<div className="pb-[calc(4rem+1px+env(safe-area-inset-bottom))] lg:grid lg:grid-cols-[16rem_minmax(0,1fr)] lg:gap-2 lg:p-2 lg:pb-[4.5rem]">
				<LibraryNav className="sticky top-2 hidden h-[calc(100dvh-5rem)] lg:flex" />
				<main id="main" tabIndex={-1} className="relative min-h-[calc(100dvh-5rem)] min-w-0 bg-surface lg:rounded-lg">
					<div className="absolute inset-x-4 top-4 z-10 flex items-center justify-between gap-3 md:inset-x-6 lg:inset-x-8">
						<Link to="/" className="text-sm font-bold lg:invisible">
							{profile.name}
						</Link>
						<div className="flex items-center gap-2">
							<NavLink
								to="/about"
								className={({ isActive }) =>
									cn(
										"rounded-full px-3 py-1.5 text-sm font-semibold lg:hidden",
										isActive ? "bg-white/10" : "text-muted hover:text-ink",
									)
								}
							>
								{t(ui.nav.about)}
							</NavLink>
							<LanguageSwitcher />
						</div>
					</div>
					<Outlet />
				</main>
			</div>
			<NowExploring className="hidden lg:grid" />
			<nav
				aria-label={t(ui.nav.label)}
				className="fixed inset-x-0 bottom-0 z-30 border-t border-white/10 bg-canvas pb-[env(safe-area-inset-bottom)] lg:hidden"
			>
				<ul className="grid grid-cols-4">
					{mobileItems.map(({ to, icon: Icon, label }) => (
						<li key={to}>
							<NavLink
								to={to}
								end={to === "/"}
								className={({ isActive }) =>
									cn(
										"flex h-16 flex-col items-center justify-center gap-1 text-xs font-semibold",
										isActive ? "text-ink" : "text-muted hover:text-ink",
									)
								}
							>
								<Icon aria-hidden className="h-6 w-6" />
								{t(label)}
							</NavLink>
						</li>
					))}
				</ul>
			</nav>
		</>
	);
}
