"use client"

import { Home, Library, Search } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

const mainRoutes = [
  {
    label: 'Home',
    icon: Home,
    href: '/',
  },
  {
    label: 'Search',
    icon: Search,
    href: '/search',
  },
]

const libraryItems = [
  {
    title: 'Experience',
    type: 'Album',
    href: '/experience',
  },
  {
    title: 'Skills',
    type: 'Album',
    href: '/skills',
  },
  {
    title: 'Projects',
    type: 'Album',
    href: '/projects',
  },
  {
    title: 'Education',
    type: 'Album',
    href: '/education',
  },
  {
    title: 'Contact',
    type: 'Album',
    href: '/contact',
  },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <div className="flex flex-col gap-2 w-[420px]">
      <div className="bg-card rounded-lg p-2">
        <div className="space-y-1">
          {mainRoutes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={cn(
                "flex items-center gap-4 text-sm font-medium px-3 py-2 rounded-md transition",
                pathname === route.href 
                  ? "text-white bg-white/10" 
                  : "text-neutral-400 hover:text-white"
              )}
            >
              <route.icon className="h-6 w-6" />
              {route.label}
            </Link>
          ))}
        </div>
      </div>
      <div className="bg-card rounded-lg flex-1 p-2">
        <div className="flex items-center gap-2 px-3 py-2">
          <Library className="h-6 w-6 text-neutral-400" />
          <span className="font-medium">Your Library</span>
        </div>
        <div className="mt-4 space-y-1">
          {libraryItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex flex-col px-3 py-2 rounded-md hover:bg-white/10 transition"
            >
              <span className="font-medium">{item.title}</span>
              <span className="text-sm text-neutral-400">{item.type}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}