import { ProductCover } from "@/ui/atoms/ProductCover";

export async function generateStaticParams() {
	const res = await fetch(`https://naszsklep-api.vercel.app/api/products`);
	const products = (await res.json()) as { id: string; title: string }[];

	return products.map((product) => ({ productId: product.id }));
}

export default async function ProductsPage({ params }: { params: { productId: string } }) {
	const res = await fetch(`https://naszsklep-api.vercel.app/api/products?take=20`);
	const products = (await res.json()) as { id: string; title: string }[];

	console.log(products.length);
	return (
		<main>
			<h1>HELLLO</h1>

			<ProductCover />
		</main>
	);
}
