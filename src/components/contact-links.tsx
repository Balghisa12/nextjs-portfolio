import { useState } from "react";
import { Copy, FileText, Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/content/profile";
import { ui } from "@/content/ui";
import { useLocale } from "@/lib/locale";
import { cn } from "@/lib/utils";

const pill =
	"inline-flex min-h-11 items-center gap-2 rounded-full border border-white/20 px-5 text-sm font-bold transition-colors duration-150 hover:border-ink hover:bg-white/5";

/** Email, LinkedIn, GitHub and CV. `compact` renders icon-only links for the bottom bar. */
export function ContactLinks({ compact = false }: Readonly<{ compact?: boolean }>) {
	const { t } = useLocale();
	const [copyStatus, setCopyStatus] = useState<"idle" | "copied" | "failed">("idle");

	const links = [
		{ label: compact ? profile.email : t(ui.contact.email), href: `mailto:${profile.email}`, icon: Mail },
		{ label: "LinkedIn", href: profile.linkedin, icon: Linkedin },
		{ label: "GitHub", href: profile.github, icon: Github },
		{
			label: `${t(ui.cv.download)} (${t(ui.cv.format)})`,
			href: profile.cv,
			icon: FileText,
			download: true,
		},
	];

	if (compact) {
		return (
			<ul className="flex items-center gap-1">
				{links.map(({ label, href, icon: Icon, download }) => (
					<li key={href}>
						<a
							href={href}
							download={download}
							aria-label={label}
							title={label}
							className="flex h-10 w-10 items-center justify-center rounded-full text-muted transition-colors duration-150 hover:bg-white/10 hover:text-ink"
						>
							<Icon aria-hidden className="h-5 w-5" />
						</a>
					</li>
				))}
			</ul>
		);
	}

	const copyEmail = async () => {
		try {
			await navigator.clipboard.writeText(profile.email);
			setCopyStatus("copied");
		} catch {
			setCopyStatus("failed");
		}
	};

	return (
		<div>
			<p className="mb-4 select-all break-all text-lg font-bold md:text-xl">{profile.email}</p>
			<ul className="flex flex-wrap gap-3">
				{links.map(({ label, href, icon: Icon, download }, index) => (
					<li key={href}>
						<a
							href={href}
							download={download}
							className={cn(pill, index === 0 && "border-accent bg-accent text-black hover:bg-[#3BE477] hover:border-[#3BE477]")}
						>
							<Icon aria-hidden className="h-4 w-4" />
							{label}
						</a>
					</li>
				))}
				<li>
					<button type="button" onClick={copyEmail} className={pill}>
						<Copy aria-hidden className="h-4 w-4" />
						{t(ui.contact.copy)}
					</button>
				</li>
			</ul>
			<p role="status" className="mt-3 min-h-5 text-sm text-muted">
				{copyStatus === "copied" && t(ui.contact.copied)}
				{copyStatus === "failed" && t(ui.contact.copyFailed)}
			</p>
		</div>
	);
}
