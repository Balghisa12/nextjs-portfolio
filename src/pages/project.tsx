import { useParams } from "react-router-dom";
import { CaseStudyLayout } from "@/components/case-study-layout";
import { findProject } from "@/content/projects";
import { NotFoundPage } from "@/pages/not-found";

export function ProjectPage() {
	const project = findProject(useParams().slug);
	return project ? <CaseStudyLayout project={project} /> : <NotFoundPage />;
}
