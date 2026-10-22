import { Link, matchPath, useLocation } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { findProject, projects } from "@/content/projects";
import { profile } from "@/content/profile";
import { ui } from "@/content/ui";
import { ContactLinks } from "@/components/contact-links";
import { useLocale } from "@/lib/locale";
import { cn } from "@/lib/utils";

const pageLabels: Record<string, typeof ui.nav.home> = {
	"/": ui.nav.home,
	"/projects": ui.nav.projects,
	"/experience": ui.nav.experience,
	"/about": ui.nav.about,
	"/contact": ui.nav.contact,
};

/**
 * Bottom "player" bar. No audio is shipped (no licensed track), so it shows what the
 * visitor is looking at, the next project, and the contact links.
 */
export function NowExploring({ className }: Readonly<{ className?: string }>) {
	const { t } = useLocale();
	const { pathname } = useLocation();
	const project = findProject(matchPath("/projects/:slug", pathname)?.params.slug);
	const label = project ? project.name : t(pageLabels[pathname] ?? ui.notFound.title);
	const next = projects[(projects.findIndex((p) => p === project) + 1) % projects.length];

	return (
		<aside
			aria-label={t(ui.bar.label)}
			className={cn(
				"fixed inset-x-0 bottom-0 z-30 h-16 grid-cols-[1fr_auto_1fr] items-center gap-4 bg-canvas px-4",
				className,
			)}
		>
			<div className="flex min-w-0 items-center gap-3">
				<img
					src={project ? project.cover : profile.portrait.src}
					alt=""
					width={40}
					height={40}
					className="h-10 w-10 shrink-0 rounded object-cover"
				/>
				<div className="min-w-0">
					<p className="text-xs text-muted">{t(ui.bar.label)}</p>
					<p className="truncate text-sm font-semibold">{label}</p>
				</div>
			</div>
			<Link
				to={`/projects/${next.slug}`}
				className="flex items-center gap-2 rounded-full px-4 py-2 text-sm transition-colors duration-150 hover:bg-white/10"
			>
				<span className="text-muted">{t(ui.bar.next)}</span>
				<span className="font-semibold">{next.name}</span>
				<ArrowRight aria-hidden className="h-4 w-4" />
			</Link>
			<div className="flex justify-end">
				<ContactLinks compact />
			</div>
		</aside>
	);
}
