import { useParams } from "react-router-dom"
import { sections } from "@/data/sections"
import { SectionContent } from "@/components/section-content"

export function SectionPage() {
  const { section } = useParams<{ section: keyof typeof sections }>()
  const sectionData = section ? sections[section] : null

  if (!sectionData) return null

  return <SectionContent section={sectionData} />
}