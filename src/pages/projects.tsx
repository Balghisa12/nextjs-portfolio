import { PageHeader } from "@/components/page-header";
import { ProjectCard } from "@/components/project-card";
import { projects } from "@/content/projects";
import { ui } from "@/content/ui";
import { useLocale } from "@/lib/locale";
import { useDocumentTitle } from "@/lib/utils";

export function ProjectsPage() {
	const { t } = useLocale();
	useDocumentTitle(t(ui.projects.title));

	return (
		<>
			<PageHeader
				eyebrow={t(ui.nav.projectsNote)}
				title={t(ui.projects.title)}
				subtitle={t(ui.projects.subtitle)}
				wash="#1E3B2A"
			/>
			<div className="grid max-w-3xl gap-4 px-4 pb-14 sm:grid-cols-2 md:px-6 lg:px-8">
				{projects.map((project) => (
					<ProjectCard key={project.slug} project={project} />
				))}
			</div>
		</>
	);
}
