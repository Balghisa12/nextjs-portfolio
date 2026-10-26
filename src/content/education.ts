import type { L } from "@/lib/locale";

export interface Qualification {
	school: string;
	degree: L;
	year: string;
	/** About the school or the degree; nothing beyond the CV about the owner. */
	note: L;
}

export const education: Qualification[] = [
	{
		school: "IMT Atlantique",
		degree: { en: "Engineering degree (Diplôme d’ingénieur)", fr: "Diplôme d’ingénieur" },
		year: "2022",
		note: {
			en: "A French graduate school of engineering (grande école) of the Institut Mines-Télécom, with campuses in Brest, Nantes and Rennes. The move from physics to software engineering happened here.",
			fr: "Grande école d’ingénieurs de l’Institut Mines-Télécom, sur les campus de Brest, Nantes et Rennes. C’est là que je suis passé de la physique à l’ingénierie logicielle.",
		},
	},
	{
		school: "Université de Bourgogne",
		degree: { en: "Bachelor’s degree in physics (Licence)", fr: "Licence de physique" },
		year: "2019",
		note: {
			en: "Three years of physics first. It is why the Reactor Simulator exists.",
			fr: "Trois ans de physique d’abord. C’est pour ça que le Reactor Simulator existe.",
		},
	},
];
