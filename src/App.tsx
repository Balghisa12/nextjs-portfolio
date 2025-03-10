import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Sidebar } from '@/components/sidebar'
import { Player } from '@/components/player'
import { HomePage } from '@/pages/home'
import { SectionPage } from '@/pages/section'
import { MobileHomeButton } from '@/components/mobile-home-button'
import { AudioProvider } from '@/contexts/AudioContext'

export default function App() {
  return (
    <AudioProvider>
      <Router>
        <div className="flex flex-col h-screen">
          <div className="flex flex-1 overflow-hidden">
            <div className="hidden md:block p-2 bg-black">
              <Sidebar />
            </div>
            <main className="flex-1 overflow-auto relative bg-black">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/:section" element={<SectionPage />} />
              </Routes>
              <MobileHomeButton />
            </main>
          </div>
          <Player />
        </div>
      </Router>
    </AudioProvider>
  )
}