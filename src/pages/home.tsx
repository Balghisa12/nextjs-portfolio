import { Link } from "react-router-dom";
import { ExternalLink, GraduationCap } from "lucide-react";
import { ProfileHero } from "@/components/profile-hero";
import { ProjectCard } from "@/components/project-card";
import { ExperienceList } from "@/components/experience-list";
import { ContactLinks } from "@/components/contact-links";
import { findProject, projects } from "@/content/projects";
import { experience } from "@/content/experience";
import { education } from "@/content/education";
import { skillGroups } from "@/content/skills";
import { type Highlight, whatIDo, wikisseyHighlights } from "@/content/home";
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

function HighlightGrid({ items, heading: Heading }: Readonly<{ items: Highlight[]; heading: "h3" | "h4" }>) {
	const { t } = useLocale();
	return (
		<ul className="grid gap-3 sm:grid-cols-2">
			{items.map(({ icon: Icon, title, body }) => (
				<li key={title.en} className="rounded-lg bg-white/5 p-4">
					<Icon aria-hidden className="h-5 w-5 text-accent" />
					<Heading className="mt-3 font-bold">{t(title)}</Heading>
					<p className="mt-1 text-[15px] leading-relaxed text-muted">{t(body)}</p>
				</li>
			))}
		</ul>
	);
}

function WikisseySpotlight() {
	const { t } = useLocale();
	const wikissey = findProject("wikissey")!;

	return (
		<article aria-labelledby="wikissey-title" className="overflow-hidden rounded-lg bg-elevated">
			<div
				className="flex flex-col gap-5 p-5 sm:flex-row sm:items-end md:p-6"
				style={{ backgroundImage: `linear-gradient(to bottom, ${wikissey.accent}, transparent)` }}
			>
				<img
					src={wikissey.cover}
					alt=""
					width={640}
					height={640}
					loading="lazy"
					className="h-28 w-28 shrink-0 rounded-md object-cover shadow-2xl shadow-black/60"
				/>
				<div className="min-w-0">
					<p className="text-sm font-semibold">
						{t(wikissey.role)} · {wikissey.period && t(wikissey.period)}
					</p>
					<h3 id="wikissey-title" className="mt-1 text-3xl font-extrabold tracking-tight md:text-4xl">
						{wikissey.name}
					</h3>
					<p className="mt-2 text-ink/90">{t(wikissey.tagline)}</p>
				</div>
			</div>
			<div className="space-y-5 px-5 pb-5 md:px-6 md:pb-6">
				<p className="max-w-3xl leading-relaxed">{t(ui.home.wikisseyIntro)}</p>
				<HighlightGrid items={wikisseyHighlights} heading="h4" />
				<ul aria-label={t(ui.experience.stack)} className="flex flex-wrap gap-1.5">
					{wikissey.stack.map((tech) => (
						<li key={tech} className="rounded-full bg-white/10 px-2.5 py-1 text-xs">
							{tech}
						</li>
					))}
				</ul>
				<div className="flex flex-wrap gap-3">
					{wikissey.links.map((link) => (
						<a
							key={link.href}
							href={link.href}
							className="inline-flex min-h-12 items-center gap-2 rounded-full bg-accent px-6 font-bold text-black transition duration-150 hover:scale-[1.03] hover:bg-[#3BE477]"
						>
							{t(link.label)}
							<ExternalLink aria-hidden className="h-4 w-4" />
						</a>
					))}
					<Link
						to={`/projects/${wikissey.slug}`}
						className="inline-flex min-h-12 items-center rounded-full border border-white/30 px-6 font-bold transition-colors duration-150 hover:border-ink"
					>
						{t(ui.home.caseStudy)}
					</Link>
				</div>
			</div>
		</article>
	);
}

export function HomePage() {
	const { t } = useLocale();
	useDocumentTitle(null);

	return (
		<>
			<ProfileHero />
			<div className="space-y-14 px-4 pb-14 md:px-6 lg:px-8">
				<section aria-labelledby="what-i-do">
					<SectionHeading id="what-i-do" title={t(ui.home.whatIDo)} action={{ to: "/about", label: t(ui.home.aboutMore) }} />
					<p className="mb-5 max-w-3xl text-lg leading-relaxed">{t(profile.summary)}</p>
					<div className="max-w-5xl">
						<HighlightGrid items={whatIDo} heading="h3" />
					</div>
				</section>

				<section aria-labelledby="work" className="max-w-5xl">
					<SectionHeading id="work" title={t(ui.home.featured)} />
					<WikisseySpotlight />
					<h3 className="mb-3 mt-8 text-lg font-bold">{t(ui.home.alsoBuilt)}</h3>
					<div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
						{projects
							.filter((project) => project.slug !== "wikissey")
							.map((project) => (
								<ProjectCard key={project.slug} project={project} />
							))}
					</div>
				</section>

				<section aria-labelledby="experience">
					<SectionHeading id="experience" title={t(ui.home.experience)} />
					<ExperienceList roles={experience} headingLevel="h3" />
				</section>

				<section aria-labelledby="education">
					<SectionHeading id="education" title={t(ui.home.education)} />
					<ul className="grid max-w-5xl gap-3 md:grid-cols-2">
						{education.map((item) => (
							<li key={item.school} className="rounded-lg bg-white/5 p-5">
								<div className="flex items-center justify-between gap-3">
									<GraduationCap aria-hidden className="h-5 w-5 text-accent" />
									<span className="text-sm tabular-nums text-muted">{item.year}</span>
								</div>
								<h3 className="mt-3 text-lg font-bold">{item.school}</h3>
								<p className="text-sm">{t(item.degree)}</p>
								<p className="mt-3 text-[15px] leading-relaxed text-muted">{t(item.note)}</p>
							</li>
						))}
					</ul>
					<p className="mt-4 text-muted">{t(profile.languages)}</p>
				</section>

				<section aria-labelledby="skills">
					<SectionHeading id="skills" title={t(ui.home.skills)} action={{ to: "/about#skills", label: t(ui.home.skillsMore) }} />
					<dl className="max-w-5xl divide-y divide-white/5">
						{skillGroups.map((group) => (
							<div key={group.name.en} className="grid gap-2 py-3 sm:grid-cols-[10rem_minmax(0,1fr)] sm:items-baseline">
								<dt className="font-semibold">{t(group.name)}</dt>
								<dd>
									<ul className="flex flex-wrap gap-1.5">
										{group.items.map((item) => (
											<li key={item.en} className="rounded-full bg-white/10 px-3 py-1 text-sm">
												{t(item)}
											</li>
										))}
									</ul>
								</dd>
							</div>
						))}
					</dl>
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
