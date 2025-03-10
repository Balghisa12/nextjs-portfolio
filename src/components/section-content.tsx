import { useState } from "react";
import { Clock, Play } from "lucide-react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

interface Item {
	title: string;
	duration: string;
	description: string;
	technologies: string[];
}

export interface Section {
	title: string;
	image: string;
	description: string;
	items: Item[];
}

export function SectionContent({ section }: Readonly<{ section: Section }>) {
	const [selectedItem, setSelectedItem] = useState<Item | null>(null);

	return (
		<div>
			<div className="relative min-h-[50vh] md:h-[40vh] flex items-end bg-gradient-to-b from-neutral-800 to-neutral-900">
				<div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
				<div className="relative p-4 md:p-6">
					<img
						src={section.image}
						alt={section.title}
						className="h-32 w-32 md:h-48 md:w-48 mx-auto md:mx-0 shadow-xl object-cover rounded-md  hover:scale-105"
					/>
					<h1 className="text-3xl md:text-5xl font-bold mt-6 text-center md:text-left  fade-in slide-in-from-bottom-4 duration-700">
						{section.title}
					</h1>
					<p className="text-sm text-neutral-400 mt-2 text-center md:text-left  fade-in slide-in-from-bottom-2 duration-700 delay-200">
						Hazim Benslimane • Senior Software Engineer
					</p>
					<p className="max-w-2xl text-neutral-300 mt-4 text-center md:text-left  fade-in slide-in-from-bottom-2 duration-700 delay-300">
						{section.description}
					</p>
				</div>
			</div>

			<div className="p-4 md:p-6">
				<div className="flex items-center gap-8 mb-8">
					<button
						type="button"
						className="h-14 w-14 md:h-16 md:w-16 rounded-full bg-green-500 hover:bg-green-400 transition-all duration-300 hover:scale-110 active:scale-95 flex items-center justify-center"
					>
						<Play className="h-7 w-7 md:h-8 md:w-8 text-black fill-black ml-1 transform translate-x-[1px]" />
					</button>
				</div>

				<div className="rounded-lg overflow-hidden  fade-in-50 duration-700 delay-300">
					<div className="grid grid-cols-[3fr,1fr] md:grid-cols-[4fr,1fr] px-4 md:px-6 py-2 text-sm font-medium text-neutral-400 bg-neutral-800/50">
						<div className="flex items-center gap-2 md:gap-4">
							<span className="w-4 md:w-6">#</span>
							<span>TITLE</span>
						</div>
						<div className="flex items-center justify-end">
							<Clock className="h-4 w-4" />
						</div>
					</div>

					<div className="divide-y divide-neutral-800/50">
						{section.items.map((item, index) => (
							<button
								type="button"
								key={item.title}
								onClick={() => setSelectedItem(item)}
								className="
        w-full
        flex flex-col
        items-start
        gap-2
        px-4 py-3
        transition-all
        duration-300
        text-left
        hover:bg-neutral-800/50
        hover:scale-[1.01]
        group
        sm:flex-row
        sm:items-center
        sm:justify-between
        md:px-6
      "
							>
								{/* Left side: index + title */}
								<div className="flex items-center gap-2 md:gap-4">
									<span className="w-4 md:w-6 text-neutral-400 group-hover:text-white transition-colors duration-300">
										{index + 1}
									</span>
									<span className="font-medium group-hover:text-white transition-colors duration-300 truncate">
										{item.title}
									</span>
								</div>

								{/* Right side: duration */}
								<div className="text-sm text-neutral-400 group-hover:text-white transition-colors duration-300 sm:ml-auto">
									{item.duration}
								</div>
							</button>
						))}
					</div>
				</div>
			</div>

			<Dialog open={!!selectedItem} onOpenChange={() => setSelectedItem(null)}>
				<DialogContent className="w-[95vw] max-w-[600px] bg-neutral-900 text-white border-neutral-800   p-4 md:p-6">
					<DialogTitle className="text-xl md:text-2xl font-bold">
						{selectedItem?.title}
					</DialogTitle>
					<div className="space-y-6">
						<div className="border-b border-neutral-800 pb-4">
							<p className="text-neutral-400">{selectedItem?.duration}</p>
						</div>
						<p className="text-neutral-200 leading-relaxed">
							{selectedItem?.description}
						</p>
						<div>
							<h3 className="text-sm font-medium text-neutral-400 mb-3">
								Technologies & Details
							</h3>
							<div className="flex flex-wrap gap-2">
								{selectedItem?.technologies.map((tech) => (
									<span
										key={tech}
										className="px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-neutral-800 text-sm transition-all duration-300 hover:scale-105 hover:bg-neutral-700"
									>
										{tech}
									</span>
								))}
							</div>
						</div>
					</div>
				</DialogContent>
			</Dialog>
		</div>
	);
}
