import { PageHeader } from "@/components/page-header";
import { ProjectCard } from "@/components/project-card";
import { projects } from "@/content/projects";
import { ui } from "@/content/ui";
import { useLocale } from "@/lib/locale";
import { useDocumentTitle } from "@/lib/utils";

export function ProjectsPage() {
	const { t } = useLocale();
	useDocumentTitle(t(ui.projects.title));

	const groups = [
		{ title: ui.projects.featured, items: projects.filter((p) => p.featured) },
		{ title: ui.projects.more, items: projects.filter((p) => !p.featured) },
	];

	return (
		<>
			<PageHeader
				eyebrow={t(ui.nav.projectsNote)}
				title={t(ui.projects.title)}
				subtitle={t(ui.projects.subtitle)}
				wash="#1E3B2A"
			/>
			<div className="space-y-12 px-4 pb-14 md:px-6 lg:px-8">
				{groups.map((group) => (
					<section key={group.title.en}>
						<h2 className="mb-4 text-2xl font-bold">{t(group.title)}</h2>
						<div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
							{group.items.map((project) => (
								<ProjectCard key={project.slug} project={project} />
							))}
						</div>
					</section>
				))}
			</div>
		</>
	);
}
