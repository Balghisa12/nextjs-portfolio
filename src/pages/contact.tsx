import { PageHeader } from "@/components/page-header";
import { ContactLinks } from "@/components/contact-links";
import { ui } from "@/content/ui";
import { useLocale } from "@/lib/locale";
import { useDocumentTitle } from "@/lib/utils";

export function ContactPage() {
	const { t } = useLocale();
	useDocumentTitle(t(ui.contact.title));

	return (
		<>
			<PageHeader eyebrow={t(ui.nav.contactNote)} title={t(ui.contact.title)} subtitle={t(ui.contact.body)} wash="#1E3B2A" />
			<div className="px-4 pb-14 md:px-6 lg:px-8">
				<ContactLinks />
			</div>
		</>
	);
}
