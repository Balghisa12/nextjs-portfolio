"use client"

import { Play, SkipBack, SkipForward, Volume2 } from "lucide-react"
import { Slider } from "@/components/ui/slider"

export function Player() {
  return (
    <div className="h-[90px] bg-black/95 border-t border-neutral-800 px-4 flex items-center">
      <div className="w-[30%] flex items-center gap-4">
        <div className="w-14 h-14 bg-neutral-800 rounded"></div>
        <div>
          <p className="text-sm font-medium">Currently Playing</p>
          <p className="text-xs text-neutral-400">Your portfolio</p>
        </div>
      </div>
      <div className="flex-1 flex flex-col items-center gap-2">
        <div className="flex items-center gap-6">
          <button className="text-neutral-400 hover:text-white transition">
            <SkipBack className="h-5 w-5" />
          </button>
          <button className="bg-white rounded-full p-2 hover:scale-105 transition">
            <Play className="h-5 w-5 text-black" fill="black" />
          </button>
          <button className="text-neutral-400 hover:text-white transition">
            <SkipForward className="h-5 w-5" />
          </button>
        </div>
        <div className="w-full max-w-[600px] flex items-center gap-2">
          <span className="text-xs text-neutral-400">0:00</span>
          <Slider
            defaultValue={[0]}
            max={100}
            step={1}
            className="cursor-pointer"
          />
          <span className="text-xs text-neutral-400">3:45</span>
        </div>
      </div>
      <div className="w-[30%] flex justify-end items-center gap-2">
        <Volume2 className="h-5 w-5 text-neutral-400" />
        <Slider
          defaultValue={[100]}
          max={100}
          step={1}
          className="w-[100px] cursor-pointer"
        />
      </div>
    </div>
  )
}