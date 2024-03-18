import NextImage from "next/image";
import { Title } from "./Title";
import { Image } from "./Image";
import type { Product as ProductType } from "@/types/types";

export const Product = ({
	title,
	description,
	image,
	id,
	longDescription,
	rating,
	price,
	category,
}: ProductType) => (
	<div>
		<Title>{title}</Title>
		<p>Price: {price}</p>
		<p>Description: {description}</p>
		<p>Category: {category}</p>

		<Image src={image} alt={title} as={NextImage} width={100} height={100} />

		<p>{longDescription}</p>
		<p>
			Rating: rate: {rating.rate}
			count: {rating.count}
		</p>

		<p>ID: {id}</p>
	</div>
);
