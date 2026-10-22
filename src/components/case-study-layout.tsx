import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink } from "lucide-react";
import { type Project, projects } from "@/content/projects";
import { ui } from "@/content/ui";
import { PageHeader } from "@/components/page-header";
import { type L, useLocale } from "@/lib/locale";
import { cn, useDocumentTitle } from "@/lib/utils";

function Section({ id, title, children }: Readonly<{ id: string; title: string; children: React.ReactNode }>) {
	return (
		<section aria-labelledby={id} className="scroll-mt-4">
			<h2 id={id} tabIndex={-1} className="mb-4 text-2xl font-bold">
				{title}
			</h2>
			{children}
		</section>
	);
}

function Bullets({ items }: Readonly<{ items: L[] }>) {
	const { t } = useLocale();
	return (
		<ul className="max-w-3xl list-disc space-y-2 pl-5 leading-relaxed marker:text-muted">
			{items.map((item) => (
				<li key={item.en}>{t(item)}</li>
			))}
		</ul>
	);
}

/** An album page for one project: header, track-list contents, then the case study. */
export function CaseStudyLayout({ project }: Readonly<{ project: Project }>) {
	const { t } = useLocale();
	useDocumentTitle(project.name);
	const next = projects[(projects.indexOf(project) + 1) % projects.length];

	const sections = [
		{ id: "problem", title: ui.caseStudy.problem, show: true },
		{ id: "role", title: ui.caseStudy.role, show: true },
		{ id: "flow", title: project.flow?.heading ?? ui.caseStudy.problem, show: !!project.flow },
		{ id: "screens", title: ui.caseStudy.screens, show: project.screens.length > 0 },
		{ id: "architecture", title: ui.caseStudy.architecture, show: project.architecture.length > 0 },
		{ id: "decisions", title: ui.caseStudy.decisions, show: project.decisions.length > 0 },
		{ id: "shipped", title: ui.caseStudy.shipped, show: project.shipped.length > 0 },
		{ id: "constraints", title: ui.caseStudy.constraints, show: project.constraints.length > 0 },
		{ id: "evidence", title: ui.caseStudy.evidence, show: project.evidence.length > 0 },
	].filter((s) => s.show);

	return (
		<article>
			<PageHeader
				eyebrow={t(ui.caseStudy.eyebrow)}
				title={project.name}
				subtitle={t(project.tagline)}
				wash={project.accent}
				art={
					<img
						src={project.cover}
						alt=""
						width={640}
						height={640}
						fetchPriority="high"
						className="h-40 w-40 shrink-0 rounded-md object-cover shadow-2xl shadow-black/60 md:h-56 md:w-56"
					/>
				}
			>
				{project.links.map((link, index) => (
					<a
						key={link.href}
						href={link.href}
						className={cn(
							"inline-flex min-h-12 items-center gap-2 rounded-full px-6 font-bold transition duration-150",
							index === 0
								? "bg-accent text-black hover:scale-[1.03] hover:bg-[#3BE477]"
								: "border border-white/30 hover:border-ink",
						)}
					>
						{t(link.label)}
						<ExternalLink aria-hidden className="h-4 w-4" />
					</a>
				))}
			</PageHeader>

			<div className="px-4 md:px-6 lg:px-8">
				<p className="text-sm text-muted">
					{t(project.role)}
					{project.period && ` · ${t(project.period)}`} ·{" "}
					<span className="font-semibold text-accent">{t(project.status)}</span>
				</p>
				<ul className="mt-3 flex flex-wrap gap-1.5">
					{project.stack.map((tech) => (
						<li key={tech} className="rounded-full bg-white/10 px-2.5 py-1 text-xs">
							{tech}
						</li>
					))}
				</ul>

				<nav aria-label={t(ui.caseStudy.contents)} className="mt-8">
					<p className="mb-2 text-sm font-semibold text-muted">{t(ui.caseStudy.contents)}</p>
					<ol className="grid gap-x-6 sm:grid-cols-2 lg:grid-cols-3">
						{sections.map((section, index) => (
							<li key={section.id}>
								<Link
									to={`#${section.id}`}
									className="flex items-center gap-4 rounded-md px-2 py-2 transition-colors duration-150 hover:bg-white/5"
								>
									<span className="w-5 text-right tabular-nums text-muted">{index + 1}</span>
									<span className="font-medium">{t(section.title)}</span>
								</Link>
							</li>
						))}
					</ol>
				</nav>

				<div className="mt-12 space-y-14 pb-12">
					<Section id="problem" title={t(ui.caseStudy.problem)}>
						<div className="max-w-3xl space-y-4 text-lg leading-relaxed">
							{project.problem.map((p) => (
								<p key={p.en}>{t(p)}</p>
							))}
						</div>
					</Section>

					<Section id="role" title={t(ui.caseStudy.role)}>
						<p className="max-w-3xl leading-relaxed">{t(project.myRole)}</p>
					</Section>

					{project.flow && (
						<Section id="flow" title={t(project.flow.heading)}>
							<ol className="max-w-3xl divide-y divide-white/5">
								{project.flow.steps.map((step, index) => (
									<li key={step.title.en} className="grid grid-cols-[1.75rem_minmax(0,1fr)] gap-x-3 py-4">
										<span className="text-right tabular-nums text-muted" aria-hidden>
											{index + 1}
										</span>
										<div>
											<h3 className="font-bold">{t(step.title)}</h3>
											<p className="mt-1 leading-relaxed text-ink/90">{t(step.body)}</p>
										</div>
									</li>
								))}
							</ol>
						</Section>
					)}

					{project.screens.length > 0 && (
						<Section id="screens" title={t(ui.caseStudy.screens)}>
							<div className="space-y-8">
								{project.screens.map((screen) => (
									<figure key={screen.large}>
										<img
											src={screen.large}
											srcSet={`${screen.small} 720w, ${screen.large} 1440w`}
											sizes="(min-width: 1024px) calc(100vw - 20rem), 100vw"
											alt={t(screen.alt)}
											width={1440}
											height={900}
											loading="lazy"
											className="w-full rounded-lg border border-white/10"
										/>
										<figcaption className="mt-2 text-sm text-muted">{t(screen.caption)}</figcaption>
									</figure>
								))}
							</div>
						</Section>
					)}

					{project.architecture.length > 0 && (
						<Section id="architecture" title={t(ui.caseStudy.architecture)}>
							<Bullets items={project.architecture} />
						</Section>
					)}

					{project.decisions.length > 0 && (
						<Section id="decisions" title={t(ui.caseStudy.decisions)}>
							<div className="grid gap-4 md:grid-cols-2">
								{project.decisions.map((decision) => (
									<div key={decision.title.en} className="rounded-lg bg-elevated p-5">
										<h3 className="font-bold">{t(decision.title)}</h3>
										<p className="mt-2 leading-relaxed text-ink/90">{t(decision.body)}</p>
									</div>
								))}
							</div>
						</Section>
					)}

					{project.shipped.length > 0 && (
						<Section id="shipped" title={t(ui.caseStudy.shipped)}>
							<Bullets items={project.shipped} />
						</Section>
					)}

					{project.constraints.length > 0 && (
						<Section id="constraints" title={t(ui.caseStudy.constraints)}>
							<Bullets items={project.constraints} />
						</Section>
					)}

					{project.evidence.length > 0 && (
						<Section id="evidence" title={t(ui.caseStudy.evidence)}>
							<Bullets items={project.evidence} />
						</Section>
					)}

					<div className="flex flex-wrap gap-3 border-t border-white/5 pt-8">
						<Link
							to={`/projects/${next.slug}`}
							className="inline-flex min-h-11 items-center gap-2 rounded-full bg-elevated px-5 font-semibold transition-colors duration-150 hover:bg-hover"
						>
							{t(ui.caseStudy.next)}: {next.name}
							<ArrowRight aria-hidden className="h-4 w-4" />
						</Link>
						<Link
							to="/projects"
							className="inline-flex min-h-11 items-center rounded-full px-5 font-semibold text-muted transition-colors duration-150 hover:text-ink"
						>
							{t(ui.caseStudy.all)}
						</Link>
					</div>
				</div>
			</div>
		</article>
	);
}
