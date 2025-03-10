import { Play, SkipBack, SkipForward, Volume2 } from "lucide-react"
import { Slider } from "@/components/ui/slider"

export function Player() {
  return (
    <div className="h-[90px] bg-black/95 border-t border-neutral-800 px-2 md:px-4 flex items-center backdrop-blur-lg">
      <div className="hidden md:flex w-[30%] items-center gap-4">
        <div className="w-14 h-14 bg-neutral-800 rounded animate-pulse"></div>
        <div>
          <p className="text-sm font-medium">Currently Playing</p>
          <p className="text-xs text-neutral-400">Your portfolio</p>
        </div>
      </div>
      <div className="flex-1 flex flex-col items-center gap-2">
        <div className="flex items-center gap-4 md:gap-6">
          <button className="text-neutral-400 hover:text-white transition-all duration-300 hover:scale-110">
            <SkipBack className="h-4 w-4 md:h-5 md:w-5" />
          </button>
          <button className="bg-white rounded-full p-1.5 md:p-2 transition-all duration-300 hover:scale-110 hover:bg-white/90 active:scale-95">
            <Play className="h-4 w-4 md:h-5 md:w-5 text-black transform translate-x-[1px]" fill="black" />
          </button>
          <button className="text-neutral-400 hover:text-white transition-all duration-300 hover:scale-110">
            <SkipForward className="h-4 w-4 md:h-5 md:w-5" />
          </button>
        </div>
        <div className="w-full max-w-[600px] flex items-center gap-2">
          <span className="text-xs text-neutral-400">0:00</span>
          <Slider
            defaultValue={[0]}
            max={100}
            step={1}
            className="cursor-pointer transition-all duration-300 hover:scale-y-150"
          />
          <span className="text-xs text-neutral-400">3:45</span>
        </div>
      </div>
      <div className="hidden md:flex w-[30%] justify-end items-center gap-2">
        <Volume2 className="h-5 w-5 text-neutral-400" />
        <Slider
          defaultValue={[100]}
          max={100}
          step={1}
          className="w-[100px] cursor-pointer transition-all duration-300 hover:scale-y-150"
        />
      </div>
    </div>
  )
}