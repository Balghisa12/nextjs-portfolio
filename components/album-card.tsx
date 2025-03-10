import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import { Play } from "lucide-react"

interface AlbumCardProps {
  title: string
  description: string
  image: string
  href: string
}

export function AlbumCard({ title, description, image, href }: AlbumCardProps) {
  return (
    <Link href={href}>
      <Card className="group relative bg-neutral-800/50 hover:bg-neutral-800 transition overflow-hidden">
        <CardContent className="p-4">
          <div className="aspect-square relative rounded-md overflow-hidden mb-4 shadow-lg">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h3 className="font-bold truncate mb-1">{title}</h3>
            <p className="text-sm text-neutral-400 line-clamp-2">{description}</p>
          </div>
          <button className="absolute right-5 bottom-20 bg-green-500 rounded-full p-3 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition shadow-xl">
            <Play className="h-5 w-5 text-black" fill="black" />
          </button>
        </CardContent>
      </Card>
    </Link>
  )
}