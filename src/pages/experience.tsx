import { PageHeader } from "@/components/page-header";
import { ExperienceList } from "@/components/experience-list";
import { experience } from "@/content/experience";
import { ui } from "@/content/ui";
import { useLocale } from "@/lib/locale";
import { useDocumentTitle } from "@/lib/utils";

export function ExperiencePage() {
	const { t } = useLocale();
	useDocumentTitle(t(ui.experience.title));

	return (
		<>
			<PageHeader
				eyebrow={t(ui.nav.experienceNote)}
				title={t(ui.experience.title)}
				subtitle={`${experience.length} ${t(ui.experience.roles)} · ${t(ui.experience.since)}`}
				wash="#1E2F3B"
			/>
			<div className="px-4 pb-14 md:px-6 lg:px-8">
				<ExperienceList roles={experience} />
			</div>
		</>
	);
}
