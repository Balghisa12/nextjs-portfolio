import type { Role } from "@/content/experience";
import { ui } from "@/content/ui";
import { useLocale } from "@/lib/locale";

/**
 * The career as a track list. `compact` keeps one line per role (home preview);
 * the full list shows the evidence bullets without any click.
 */
export function ExperienceList({
	roles,
	compact = false,
	headingLevel: Heading = "h2",
}: Readonly<{ roles: Role[]; compact?: boolean; headingLevel?: "h2" | "h3" }>) {
	const { t } = useLocale();

	return (
		<ol className="divide-y divide-white/5">
			{roles.map((role, index) => (
				<li
					key={role.id}
					id={compact ? undefined : role.id}
					tabIndex={compact ? undefined : -1}
					className="grid grid-cols-[1.75rem_minmax(0,1fr)] gap-x-3 py-4 md:grid-cols-[2.5rem_minmax(0,1fr)_auto] md:gap-x-4"
				>
					<span className="pt-0.5 text-right tabular-nums text-muted" aria-hidden>
						{index + 1}
					</span>
					<div>
						<Heading className="text-base font-bold">{role.company}</Heading>
						<p className="text-sm text-muted">
							{t(role.role)} · {t(role.context)}
						</p>
					</div>
					<p className="col-start-2 text-sm tabular-nums text-muted md:col-start-3 md:row-start-1 md:pt-0.5">
						{t(role.period)}
					</p>
					{!compact && (
						<div className="col-start-2 mt-3 max-w-3xl md:col-span-2">
							<ul className="list-disc space-y-2 pl-5 text-[15px] leading-relaxed marker:text-muted">
								{role.highlights.map((item) => (
									<li key={item.en}>{t(item)}</li>
								))}
							</ul>
							{role.more.length > 0 && (
								<details className="mt-3">
									<summary className="cursor-pointer text-sm font-semibold text-muted hover:text-ink">
										{t(ui.experience.more)}
									</summary>
									<ul className="mt-2 list-disc space-y-2 pl-5 text-[15px] leading-relaxed marker:text-muted">
										{role.more.map((item) => (
											<li key={item.en}>{t(item)}</li>
										))}
									</ul>
								</details>
							)}
							<ul aria-label={t(ui.experience.stack)} className="mt-3 flex flex-wrap gap-1.5">
								{role.stack.map((tech) => (
									<li key={tech} className="rounded-full bg-white/10 px-2.5 py-1 text-xs">
										{tech}
									</li>
								))}
							</ul>
						</div>
					)}
				</li>
			))}
		</ol>
	);
}
