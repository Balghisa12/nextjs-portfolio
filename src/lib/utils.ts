import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { useEffect } from 'react'
import { profile } from '@/content/profile'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/** Sets the tab title; `null` restores the site-wide title. */
export function useDocumentTitle(title: string | null) {
  useEffect(() => {
    document.title = title ? `${title} · ${profile.name}` : `${profile.name} · Software Engineer`
  }, [title])
}
