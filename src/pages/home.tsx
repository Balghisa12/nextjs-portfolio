import { AlbumCard } from "@/components/album-card"
import { Play } from "lucide-react"

const albums = [
  {
    title: "Experience",
    description: "My professional journey and work experience in software development",
    image: "https://images.unsplash.com/photo-1516387938699-a93567ec168e",
    href: "/experience"
  },
  {
    title: "Skills",
    description: "Technical expertise and competencies in modern web technologies",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97",
    href: "/skills"
  },
  {
    title: "Projects",
    description: "Featured projects showcasing my technical abilities and creativity",
    image: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d",
    href: "/projects"
  },
  {
    title: "Education",
    description: "Academic background and continuous learning journey",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1",
    href: "/education"
  },
  {
    title: "Contact",
    description: "Connect with me for opportunities and collaborations",
    image: "https://images.unsplash.com/photo-1557200134-90327ee9fafa",
    href: "/contact"
  },
]

export function HomePage() {
  return (
    <div>
      <div className="relative min-h-[50vh] md:h-[40vh] flex items-end bg-gradient-to-b from-neutral-800 to-neutral-900">
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
        <div className="relative p-4 md:p-6 flex flex-col md:flex-row md:items-end gap-6 w-full">
          <div className="h-32 w-32 md:h-48 md:w-48 mx-auto md:mx-0 rounded-full bg-neutral-100 shadow-xl overflow-hidden animate-in fade-in-50 duration-700">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
              alt="Profile"
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
          <div className="text-center md:text-left">
            <p className="text-sm font-bold mb-2 animate-in fade-in slide-in-from-bottom-2 duration-700 delay-100">
              Senior Software Engineer
            </p>
            <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold mb-4 md:mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
              Hazim Benslimane
            </h1>
            <p className="text-sm text-neutral-300 animate-in fade-in slide-in-from-bottom-2 duration-700 delay-300">
              Building digital experiences • Full-stack developer • Problem solver • Music lover
            </p>
            <p className="text-sm text-neutral-400 mt-4 max-w-2xl animate-in fade-in slide-in-from-bottom-2 duration-700 delay-400">
              Welcome to my portfolio! I'm a passionate software engineer who believes in the harmony between code and creativity. 
              With a deep love for both technology and music, I bring a unique perspective to software development.
            </p>
          </div>
        </div>
      </div>

      <div className="p-4 md:p-6">
        <div className="flex items-center gap-8 mb-8">
          <button className="h-14 w-14 md:h-16 md:w-16 rounded-full bg-green-500 hover:bg-green-400 transition-all duration-300 hover:scale-110 active:scale-95 flex items-center justify-center">
            <Play className="h-7 w-7 md:h-8 md:w-8 text-black fill-black ml-1 transform translate-x-[1px]" />
          </button>
        </div>

        <h2 className="text-xl md:text-2xl font-bold mb-6 animate-in fade-in-50 duration-700">Portfolio</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 md:gap-6">
          {albums.map((album, index) => (
            <div key={album.title} className="animate-in fade-in-50 duration-700" style={{ animationDelay: `${index * 100}ms` }}>
              <AlbumCard {...album} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}