/** The artist/album header shared by every page: colour wash, eyebrow, title. */
export function PageHeader({
	eyebrow,
	title,
	subtitle,
	art,
	wash = "#2A2A2A",
	children,
}: Readonly<{
	eyebrow: string;
	title: string;
	subtitle?: string;
	art?: React.ReactNode;
	wash?: string;
	children?: React.ReactNode;
}>) {
	return (
		<header
			className="px-4 pb-8 pt-20 md:px-6 lg:px-8 lg:pt-16"
			style={{ backgroundImage: `linear-gradient(to bottom, ${wash}, transparent)` }}
		>
			<div className="flex flex-col gap-6 md:flex-row md:items-end">
				{art}
				<div className="min-w-0">
					<p className="text-sm font-semibold">{eyebrow}</p>
					<h1
						tabIndex={-1}
						className="mt-2 break-words text-[clamp(2rem,6vw,4.5rem)] font-extrabold leading-[1.05] tracking-tight"
					>
						{title}
					</h1>
					{subtitle && <p className="mt-3 max-w-2xl text-base text-ink/90 md:text-lg">{subtitle}</p>}
				</div>
			</div>
			{children && <div className="mt-6 flex flex-wrap items-center gap-3">{children}</div>}
		</header>
	);
}
