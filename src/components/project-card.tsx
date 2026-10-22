import { Link } from "react-router-dom";
import type { Project } from "@/content/projects";
import { useLocale } from "@/lib/locale";

export function ProjectCard({ project }: Readonly<{ project: Project }>) {
	const { t } = useLocale();

	return (
		<article className="relative grid grid-cols-[5.5rem_minmax(0,1fr)] gap-x-4 rounded-lg bg-elevated p-3 transition-colors duration-200 hover:bg-hover sm:block">
			<img
				src={project.cover}
				alt=""
				width={640}
				height={640}
				loading="lazy"
				className="row-span-4 aspect-square w-full rounded-md object-cover shadow-lg shadow-black/50"
			/>
			<h3 className="text-base font-bold sm:mt-3">
				<Link
					to={`/projects/${project.slug}`}
					className="after:absolute after:inset-0 after:rounded-lg focus-visible:outline-none focus-visible:after:outline focus-visible:after:outline-2 focus-visible:after:outline-accent"
				>
					{project.name}
				</Link>
			</h3>
			<p className="mt-1 text-sm text-muted">{t(project.tagline)}</p>
			<p className="mt-2 text-[13px] text-muted">
				{t(project.role)} · <span className="font-semibold text-accent">{t(project.status)}</span>
			</p>
			<ul className="mt-3 flex flex-wrap gap-1.5">
				{project.stack.slice(0, 3).map((tech) => (
					<li key={tech} className="rounded-full bg-white/10 px-2.5 py-1 text-xs">
						{tech}
					</li>
				))}
			</ul>
		</article>
	);
}
