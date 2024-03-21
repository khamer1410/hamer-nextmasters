import NextImage from "next/image";
import { Title } from "./Title";
import { Image } from "./Image";
import type { Product as ProductType } from "@/types/types";

export const Product = ({ name, description, images, id, price, categories }: ProductType) => (
	<div>
		<Title>{name}</Title>
		<p>Price: {price}</p>
		<p>Description: {description}</p>
		<p>Category: {categories.join(", ")}</p>

		{images?.map((image) => (
			<Image key={image.url} src={image.url} alt={name} as={NextImage} width={100} height={100} />
		))}

		<p>ID: {id}</p>
	</div>
);
