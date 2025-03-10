import React, { createContext, useContext, useRef, useState } from "react";

interface AudioContextType {
	isPlaying: boolean;
	currentTime: number;
	duration: number;
	volume: number;
	togglePlay: () => void;
	setVolume: (volume: number) => void;
	seekTo: (time: number) => void;
}

const AudioContext = createContext<AudioContextType | null>(null);

export function AudioProvider({ children }: { children: React.ReactNode }) {
	const [isPlaying, setIsPlaying] = useState(false);
	const [currentTime, setCurrentTime] = useState(0);
	const [duration, setDuration] = useState(0);
	const [volume, setVolume] = useState(1);
	const audioRef = useRef<HTMLAudioElement | null>(null);

	React.useEffect(() => {
		audioRef.current = new Audio("/src/assets/gunna.mp3");
		audioRef.current.volume = volume;

		const audio = audioRef.current;

		audio.addEventListener("timeupdate", () => {
			setCurrentTime(audio.currentTime);
		});

		audio.addEventListener("loadedmetadata", () => {
			setDuration(audio.duration);
		});

		audio.addEventListener("ended", () => {
			setIsPlaying(false);
			audio.currentTime = 0;
		});

		return () => {
			audio.pause();
			audio.remove();
		};
	}, []);

	const togglePlay = () => {
		if (!audioRef.current) return;

		if (isPlaying) {
			audioRef.current.pause();
		} else {
			audioRef.current.play();
		}
		setIsPlaying(!isPlaying);
	};

	const handleVolumeChange = (newVolume: number) => {
		if (!audioRef.current) return;
		audioRef.current.volume = newVolume;
		setVolume(newVolume);
	};

	const seekTo = (time: number) => {
		if (!audioRef.current) return;
		audioRef.current.currentTime = (time / 100) * duration;
	};

	return (
		<AudioContext.Provider
			value={{
				isPlaying,
				currentTime,
				duration,
				volume,
				togglePlay,
				setVolume: handleVolumeChange,
				seekTo,
			}}
		>
			{children}
		</AudioContext.Provider>
	);
}

export function useAudio() {
	const context = useContext(AudioContext);
	if (!context) {
		throw new Error("useAudio must be used within an AudioProvider");
	}
	return context;
}
