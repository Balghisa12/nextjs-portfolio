import { Play } from "lucide-react"
import { Link } from "react-router-dom"

interface AlbumCardProps {
  title: string
  description: string
  image: string
  href: string
}

export function AlbumCard({ title, description, image, href }: AlbumCardProps) {
  return (
    <Link to={href}>
      <div className="group relative bg-card hover:bg-card-hover transition-all duration-300 p-4 rounded-md hover:scale-[1.02]">
        <div className="aspect-square relative rounded-md overflow-hidden mb-4 shadow-lg">
          <img
            src={image}
            alt={title}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div>
          <h3 className="font-bold truncate mb-1">{title}</h3>
          <p className="text-sm text-neutral-400 line-clamp-2">{description}</p>
        </div>
        <button 
          className="absolute right-5 bottom-20 bg-green-500 rounded-full p-3 opacity-0 translate-y-2 
            group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 
            hover:bg-green-400 hover:scale-110 shadow-xl"
          onClick={(e) => e.preventDefault()}
        >
          <Play className="h-5 w-5 text-black transition-transform duration-300 transform translate-x-[1px]" fill="black" />
        </button>
      </div>
    </Link>
  )
}