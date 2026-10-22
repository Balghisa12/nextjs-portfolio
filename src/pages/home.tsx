import { Link } from "react-router-dom";
import { ProfileHero } from "@/components/profile-hero";
import { ProjectCard } from "@/components/project-card";
import { ExperienceList } from "@/components/experience-list";
import { ContactLinks } from "@/components/contact-links";
import { featuredProjects } from "@/content/projects";
import { experience } from "@/content/experience";
import { decisions } from "@/content/decisions";
import { profile } from "@/content/profile";
import { ui } from "@/content/ui";
import { useLocale } from "@/lib/locale";
import { useDocumentTitle } from "@/lib/utils";

function SectionHeading({ id, title, action }: Readonly<{ id: string; title: string; action?: { to: string; label: string } }>) {
	return (
		<div className="mb-4 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
			<h2 id={id} tabIndex={-1} className="scroll-mt-4 text-2xl font-bold">
				{title}
			</h2>
			{action && (
				<Link to={action.to} className="text-sm font-bold text-muted hover:text-ink hover:underline">
					{action.label}
				</Link>
			)}
		</div>
	);
}

export function HomePage() {
	const { t } = useLocale();
	useDocumentTitle(null);

	return (
		<>
			<ProfileHero />
			<div className="space-y-14 px-4 pb-14 md:px-6 lg:px-8">
				<section aria-labelledby="work">
					<SectionHeading id="work" title={t(ui.home.featured)} action={{ to: "/projects", label: t(ui.home.showAll) }} />
					<div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
						{featuredProjects.map((project) => (
							<ProjectCard key={project.slug} project={project} />
						))}
					</div>
				</section>

				<section aria-labelledby="decisions">
					<SectionHeading id="decisions" title={t(ui.home.decisions)} />
					<ol className="divide-y divide-white/5">
						{decisions.map((decision, index) => (
							<li key={decision.title.en} className="grid grid-cols-[1.75rem_minmax(0,1fr)] gap-x-3 py-4 md:grid-cols-[2.5rem_minmax(0,1fr)_auto] md:gap-x-4">
								<span className="pt-0.5 text-right tabular-nums text-muted" aria-hidden>
									{index + 1}
								</span>
								<div className="max-w-3xl">
									<h3 className="font-bold">{t(decision.title)}</h3>
									<p className="mt-1 text-[15px] leading-relaxed text-ink/90">{t(decision.body)}</p>
								</div>
								<Link
									to={decision.source.href}
									className="col-start-2 mt-2 justify-self-start text-sm font-semibold text-muted hover:text-ink hover:underline md:col-start-3 md:mt-0"
								>
									{decision.source.label}
								</Link>
							</li>
						))}
					</ol>
				</section>

				<section aria-labelledby="career">
					<SectionHeading id="career" title={t(ui.home.career)} action={{ to: "/experience", label: t(ui.home.fullTimeline) }} />
					<ExperienceList roles={experience.slice(0, 2)} compact headingLevel="h3" />
				</section>

				<section aria-labelledby="about">
					<SectionHeading id="about" title={t(ui.home.about)} action={{ to: "/about", label: t(ui.home.aboutMore) }} />
					<div className="max-w-3xl space-y-3 leading-relaxed">
						<p>{t(ui.about.backgroundBody)}</p>
						<p className="text-muted">{t(profile.languages)}</p>
					</div>
				</section>

				<section aria-labelledby="contact" className="rounded-lg bg-elevated p-6 md:p-8">
					<h2 id="contact" tabIndex={-1} className="text-2xl font-bold">
						{t(ui.home.contactTitle)}
					</h2>
					<p className="mb-4 mt-2 text-muted">{t(ui.home.contactBody)}</p>
					<ContactLinks />
				</section>
			</div>
		</>
	);
}
