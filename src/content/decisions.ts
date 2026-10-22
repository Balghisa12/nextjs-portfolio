import type { L } from "@/lib/locale";

export interface Decision {
	title: L;
	body: L;
	source: { label: string; href: string };
}

// Home-page highlights. Korint items restate CV bullets; no metrics beyond the CV.
export const decisions: Decision[] = [
	{
		title: {
			en: "Billing checks based on what was actually billed",
			fr: "Des contrôles fondés sur ce qui a vraiment été facturé",
		},
		body: {
			en: "Regularizations after a failed payment or a terminated contract must not be applied twice. I redesigned the check to read the real billing state instead of a workflow’s progress, backed by duplicate checks and configurable retries and recovery for asynchronous jobs.",
			fr: "Une régularisation après échec de paiement ou arrêt de contrat ne doit pas être appliquée deux fois. J’ai refondu le contrôle pour qu’il lise l’état réel de la facturation plutôt que l’avancement d’un workflow, avec des contrôles anti-doublons, des relances configurables et des reprises pour les traitements asynchrones.",
		},
		source: { label: "Korint", href: "/experience#korint" },
	},
	{
		title: { en: "Five actions down to one click", fr: "De cinq actions à un clic" },
		body: {
			en: "At Korint, I simplified an operation from five actions to a single click.",
			fr: "Chez Korint, j’ai simplifié une opération de cinq actions à un seul clic.",
		},
		source: { label: "Korint", href: "/experience#korint" },
	},
	{
		title: { en: "Races refereed by the server", fr: "Des courses arbitrées par le serveur" },
		body: {
			en: "In Wikissey, every click is checked by the server against the links on the player’s current page, so results come only from legal moves.",
			fr: "Dans Wikissey, chaque clic est vérifié par le serveur par rapport aux liens de la page du joueur : les résultats ne viennent que de coups légaux.",
		},
		source: { label: "Wikissey", href: "/projects/wikissey" },
	},
];
