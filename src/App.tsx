import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { AppShell } from '@/components/app-shell'
import { LocaleProvider } from '@/components/locale-provider'
import { HomePage } from '@/pages/home'
import { ProjectsPage } from '@/pages/projects'
import { ProjectPage } from '@/pages/project'
import { ExperiencePage } from '@/pages/experience'
import { AboutPage } from '@/pages/about'
import { ContactPage } from '@/pages/contact'
import { NotFoundPage } from '@/pages/not-found'

export default function App() {
  return (
    <LocaleProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<AppShell />}>
            <Route index element={<HomePage />} />
            <Route path="projects" element={<ProjectsPage />} />
            <Route path="projects/:slug" element={<ProjectPage />} />
            <Route path="experience" element={<ExperiencePage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="contact" element={<ContactPage />} />
            {/* Old section URLs from the previous site. */}
            <Route path="skills" element={<Navigate to="/about#skills" replace />} />
            <Route path="education" element={<Navigate to="/about#education" replace />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </LocaleProvider>
  )
}
