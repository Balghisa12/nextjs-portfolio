import { Link } from "react-router-dom";

interface AlbumCardProps {
	title: string;
	description: string;
	image: React.JSX.Element;
	href: string;
}

export function AlbumCard({
	title,
	description,
	image,
	href,
}: Readonly<AlbumCardProps>) {
	return (
		<Link to={href}>
			<div className="group relative bg-card hover:bg-card-hover transition-all duration-300 p-4 rounded-md hover:scale-[1.02]">
				<div className="aspect-square relative rounded-md overflow-hidden mb-4 shadow-lg">
					{image}
				</div>
				<div>
					<h3 className="font-bold truncate mb-1">{title}</h3>
					<p className="text-sm text-neutral-400 line-clamp-2">{description}</p>
				</div>
			</div>
		</Link>
	);
}
