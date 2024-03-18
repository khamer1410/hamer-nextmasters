import type { Metadata } from "next";
import { type Product as ProductType } from "@/types/types";
import { Product } from "@/ui/atoms/Product";

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

export default async function ProductPage({ params }: { params: { productId: string } }) {
	const { productId } = params;
	const res = await fetch(`https://naszsklep-api.vercel.app/api/products/${productId}`);
	const product = (await res.json()) as ProductType;

	return (
		<main>
			<Product {...product} />
		</main>
	);
}
