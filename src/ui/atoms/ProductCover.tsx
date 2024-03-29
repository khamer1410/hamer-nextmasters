import Link from "next/link";
import { Image } from "./Image";
import { type Product } from "@/types/types";

export const ProductCover = ({ name, description, images, id }: Product) => (
	<li className="cursor-pointer rounded-lg border border-gray-500 bg-slate-300 p-2">
		<Link href={`/product/${id}`}>
			<div className="flex w-full flex-grow overflow-hidden rounded-xl border border-gray-200 bg-gray-50 text-black shadow-sm">
				<div>
					<h2> {name}</h2>
					<p>{description}</p>
				</div>
				{images?.map((image) => (
					<Image
						key={image.url}
						src={image.url}
						alt={name}
						className="aspect-square w-1/2 transition-transform duration-500 group-hover:scale-110"
					/>
				))}
			</div>
		</Link>
	</li>
);
