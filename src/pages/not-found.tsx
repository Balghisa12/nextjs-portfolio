import { Link } from "react-router-dom";
import { PageHeader } from "@/components/page-header";
import { ui } from "@/content/ui";
import { useLocale } from "@/lib/locale";
import { useDocumentTitle } from "@/lib/utils";

export function NotFoundPage() {
	const { t } = useLocale();
	useDocumentTitle(t(ui.notFound.title));

	return (
		<PageHeader eyebrow="404" title={t(ui.notFound.title)} subtitle={t(ui.notFound.body)}>
			<Link
				to="/"
				className="inline-flex min-h-12 items-center rounded-full bg-accent px-7 font-bold text-black transition duration-150 hover:bg-[#3BE477]"
			>
				{t(ui.notFound.home)}
			</Link>
			<Link
				to="/projects"
				className="inline-flex min-h-12 items-center rounded-full border border-white/30 px-6 font-bold transition-colors duration-150 hover:border-ink"
			>
				{t(ui.nav.projects)}
			</Link>
		</PageHeader>
	);
}
