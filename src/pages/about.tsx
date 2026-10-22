import { Link } from "react-router-dom";
import { PageHeader } from "@/components/page-header";
import { education } from "@/content/education";
import { profile } from "@/content/profile";
import { otherSkills, skills } from "@/content/skills";
import { ui } from "@/content/ui";
import { useLocale } from "@/lib/locale";
import { useDocumentTitle } from "@/lib/utils";

function Section({ id, title, children }: Readonly<{ id: string; title: string; children: React.ReactNode }>) {
	return (
		<section aria-labelledby={id}>
			<h2 id={id} tabIndex={-1} className="mb-4 scroll-mt-4 text-2xl font-bold">
				{title}
			</h2>
			{children}
		</section>
	);
}

export function AboutPage() {
	const { t } = useLocale();
	useDocumentTitle(t(ui.about.title));

	return (
		<>
			<PageHeader eyebrow={t(ui.nav.aboutNote)} title={t(ui.about.title)} subtitle={t(profile.headline)} wash="#2E2238" />
			<div className="space-y-14 px-4 pb-14 md:px-6 lg:px-8">
				<Section id="approach" title={t(ui.about.approach)}>
					<p className="max-w-3xl text-lg leading-relaxed">{t(profile.summary)}</p>
				</Section>

				<Section id="background" title={t(ui.about.background)}>
					<p className="max-w-3xl leading-relaxed">{t(ui.about.backgroundBody)}</p>
				</Section>

				<Section id="education" title={t(ui.about.education)}>
					<ul className="divide-y divide-white/5">
						{education.map((item) => (
							<li key={item.school} className="flex flex-wrap items-baseline justify-between gap-x-4 py-3">
								<span>
									<span className="font-bold">{item.school}</span>
									<span className="block text-sm text-muted">{t(item.degree)}</span>
								</span>
								<span className="text-sm tabular-nums text-muted">{item.year}</span>
							</li>
						))}
					</ul>
				</Section>

				<Section id="languages" title={t(ui.about.languages)}>
					<p>{t(profile.languages)}</p>
				</Section>

				<Section id="skills" title={t(ui.about.skills)}>
					<ul className="divide-y divide-white/5">
						{skills.map((skill) => (
							<li key={skill.name.en} className="flex flex-col gap-1 py-3 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
								<span className="font-semibold">{t(skill.name)}</span>
								<span className="flex flex-wrap gap-x-3 gap-y-1 text-sm">
									{skill.evidence.map((e) => (
										<Link key={e.href} to={e.href} className="text-muted underline-offset-4 hover:text-ink hover:underline">
											{e.label}
										</Link>
									))}
								</span>
							</li>
						))}
					</ul>
					<p className="mt-4 text-sm text-muted">
						<span className="font-semibold text-ink">{t(ui.about.alsoOnCv)}:</span> {t(otherSkills)}
					</p>
				</Section>
			</div>
		</>
	);
}
