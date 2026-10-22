import { NavLink } from "react-router-dom";
import { Disc3, Home, Library, ListMusic, Mail, User } from "lucide-react";
import { projects } from "@/content/projects";
import { ui } from "@/content/ui";
import { useLocale } from "@/lib/locale";
import { cn } from "@/lib/utils";

const itemClass = ({ isActive }: { isActive: boolean }) =>
	cn(
		"flex items-center gap-3 rounded-md p-2 transition-colors duration-150",
		isActive ? "bg-white/10" : "hover:bg-white/5",
	);

const sections = [
	{ to: "/projects", icon: Disc3, label: ui.nav.projects, note: ui.nav.projectsNote },
	{ to: "/experience", icon: ListMusic, label: ui.nav.experience, note: ui.nav.experienceNote },
	{ to: "/about", icon: User, label: ui.nav.about, note: ui.nav.aboutNote },
	{ to: "/contact", icon: Mail, label: ui.nav.contact, note: ui.nav.contactNote },
];

/** Desktop sidebar: Home plus a Spotify-style library of sections and projects. */
export function LibraryNav({ className }: Readonly<{ className?: string }>) {
	const { t } = useLocale();

	return (
		<nav aria-label={t(ui.nav.label)} className={cn("flex-col gap-2", className)}>
			<div className="rounded-lg bg-surface p-2">
				<NavLink
					to="/"
					end
					className={({ isActive }) =>
						cn(
							"flex items-center gap-4 rounded-md px-3 py-2 font-bold transition-colors duration-150",
							isActive ? "text-ink" : "text-muted hover:text-ink",
						)
					}
				>
					<Home aria-hidden className="h-6 w-6" />
					{t(ui.nav.home)}
				</NavLink>
			</div>
			<div className="min-h-0 flex-1 overflow-y-auto rounded-lg bg-surface p-2">
				<p className="flex items-center gap-3 px-3 py-2 font-bold text-muted">
					<Library aria-hidden className="h-6 w-6" />
					{t(ui.nav.library)}
				</p>
				<ul className="mt-2 space-y-1">
					{sections.map(({ to, icon: Icon, label, note }) => (
						<li key={to}>
							<NavLink to={to} end className={itemClass}>
								<span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-elevated">
									<Icon aria-hidden className="h-5 w-5 text-muted" />
								</span>
								<span className="min-w-0">
									<span className="block font-semibold">{t(label)}</span>
									<span className="block text-[13px] text-muted">{t(note)}</span>
								</span>
							</NavLink>
						</li>
					))}
				</ul>
				<ul className="mt-4 space-y-1 border-t border-white/5 pt-4">
					{projects.map((project) => (
						<li key={project.slug}>
							<NavLink to={`/projects/${project.slug}`} className={itemClass}>
								<img
									src={project.cover}
									alt=""
									width={48}
									height={48}
									loading="lazy"
									className="h-12 w-12 shrink-0 rounded-md object-cover"
								/>
								<span className="min-w-0">
									<span className="block font-semibold">{project.name}</span>
									<span className="block text-[13px] text-muted">{t(project.status)}</span>
								</span>
							</NavLink>
						</li>
					))}
				</ul>
			</div>
		</nav>
	);
}
