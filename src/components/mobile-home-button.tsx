import { Home } from "lucide-react"
import { Link, useLocation } from "react-router-dom"

export function MobileHomeButton() {
  const location = useLocation()

  if (location.pathname === '/') return null

  return (
    <Link
      to="/"
      className="md:hidden fixed bottom-24 right-4 z-50 bg-green-500 rounded-full p-3 shadow-lg 
        transition-all duration-300 hover:bg-green-400 hover:scale-110 active:scale-95
        animate-in fade-in-50 duration-700"
    >
      <Home className="h-6 w-6 text-black" />
    </Link>
  )
}