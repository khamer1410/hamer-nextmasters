import type { Metadata } from "next";

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
	};
}

export default function Product({ params }: { params: { productId: string } }) {
	const { productId } = params;
	return (
		<div>
			<h1>Hello product : {productId}</h1>
		</div>
	);
}
