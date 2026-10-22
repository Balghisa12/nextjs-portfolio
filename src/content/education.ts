import type { L } from "@/lib/locale";

export interface Qualification {
	school: string;
	degree: L;
	year: string;
}

export const education: Qualification[] = [
	{
		school: "IMT Atlantique",
		degree: { en: "Engineering degree (Diplôme d’ingénieur)", fr: "Diplôme d’ingénieur" },
		year: "2022",
	},
	{
		school: "Université de Bourgogne",
		degree: { en: "Bachelor’s degree in physics (Licence)", fr: "Licence de physique" },
		year: "2019",
	},
];
