// import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Product } from "@/ui/atoms/Product";
import { getProductById } from "@/api/getProducts";

export async function generateStaticParams() {
	const res = await fetch(`https://naszsklep-api.vercel.app/api/products`);
	const products = (await res.json()) as { id: string; title: string }[];

	return products.map((product) => ({ productId: product.id }));
}

// export async function generateMetadata({
// 	params,
// }: {
// 	params: { productId: string };
// }): Promise<Metadata> {
// 	const res = await fetch("https://naszsklep-api.vercel.app/api/products/" + params.productId);
// 	const product = (await res.json()) as { title: string; description: string };

// 	return {
// 		title: product.title,
// 		description: product.description,
// 	};
// }

export default async function ProductPage({ params }: { params: { productId: string } }) {
	try {
		const { productId } = params;

		const product = await getProductById(productId);

		if (!product) {
			return notFound();
		}

		console.log();

		return (
			<main>
				<Product {...product} />
			</main>
		);
	} catch (error) {
		return notFound();
	}
}
