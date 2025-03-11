const I = () => {
	return (
		// biome-ignore lint/a11y/noSvgWithoutTitle: <explanation>
		<svg
			width="200"
			height="200"
			viewBox="0 0 200 200"
			xmlns="http://www.w3.org/2000/svg"
		>
			<defs>
				<linearGradient id="cyberGradientI" x1="0%" y1="0%" x2="100%" y2="0%">
					<stop offset="0%" stopColor="#0ff" />
					<stop offset="100%" stopColor="#f0f" />
				</linearGradient>
				<filter id="neonGlowI" x="-50%" y="-50%" width="200%" height="200%">
					<feDropShadow dx="0" dy="0" stdDeviation="4" floodColor="#0ff" />
					<feDropShadow dx="0" dy="0" stdDeviation="8" floodColor="#f0f" />
				</filter>
			</defs>

			<text
				x="50%"
				y="50%"
				dominantBaseline="middle"
				textAnchor="middle"
				fontSize="120"
				fontFamily="monospace"
				fill="url(#cyberGradientI)"
				filter="url(#neonGlowI)"
			>
				I
			</text>
		</svg>
	);
};

export default I;
