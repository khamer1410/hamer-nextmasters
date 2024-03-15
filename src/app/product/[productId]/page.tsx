import type { Metadata } from "next";
import NextImage from "next/image";
import { Image } from "@/ui/atoms/Image";
import { type Product } from "@/types/types";

export async function generateStaticParams() {
	const res = await fetch(`https://naszsklep-api.vercel.app/api/products`);
	const products = (await res.json()) as { id: string; title: string }[];

	return products.map((product) => ({ productId: product.id }));
}

export async function generateMetadata({
	params,
}: {
	params: { productId: string };
}): Promise<Metadata> {
	const res = await fetch("https://naszsklep-api.vercel.app/api/products/" + params.productId);
	const product = (await res.json()) as { title: string; description: string };

	return {
		title: product.title,
		description: product.description,
	};
}

export default async function Product({ params }: { params: { productId: string } }) {
	const { productId } = params;
	const res = await fetch(`https://naszsklep-api.vercel.app/api/products/${productId}`);
	const product = (await res.json()) as Product;

	console.log(product);

	const { title, price, description, category, image, longDescription, rating, id } = product;

	return (
		<div>
			<h1>{title}</h1>
			<p>Price: {price}</p>
			<p>Description: {description}</p>
			<p>Category: {category}</p>

			<Image src={image} alt={title} as={NextImage} width={100} height={100} />

			<p>Long Description: {longDescription}</p>

			<p>
				Rating: rate: {rating.rate}
				count: {rating.count}
			</p>

			<p>ID: {id}</p>
		</div>
	);
}
