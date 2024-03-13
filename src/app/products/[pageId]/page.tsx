import { notFound } from "next/navigation";
import type { Product } from "../../product/[productId]/page";
import { ProductCover } from "@/ui/atoms/ProductCover";
import { Pagination } from "@/ui/organisms/Pagination";
import { ActiveLink } from "@/ui/atoms/ActiveLink";

const PRODUCTS_PER_PAGE = 5;

export default async function ProductsPage({ params }: { params: { pageId: string } }) {
	console.log(params);
	const res = await fetch(`https://naszsklep-api.vercel.app/api/products?take=20`);
	const allProducts = (await res.json()) as Product[];

	const pageNumber = parseFloat(params.pageId);

	const products = allProducts.slice(
		(pageNumber - 1) * PRODUCTS_PER_PAGE,
		pageNumber * PRODUCTS_PER_PAGE,
	);

	const productPages = Math.ceil(allProducts.length / PRODUCTS_PER_PAGE);

	// return 404
	if (!products.length || pageNumber > productPages) {
		return notFound();
	}

	return (
		<main>
			<h1>HELLLO all products - {params.pageId}</h1>

			<ul test-id="products-list">
				{products.map((product) => (
					<ProductCover key={product.id} name={product.title} {...product} />
				))}
			</ul>

			<Pagination>
				{Array.from({ length: productPages }).map((_, index) => (
					<ActiveLink key={index} href={`/products/${index + 1}`} text={`${index + 1}`} />
				))}
			</Pagination>
		</main>
	);
}
