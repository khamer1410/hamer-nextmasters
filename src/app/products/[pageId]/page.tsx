import { notFound } from "next/navigation";
import type { Product } from "../../product/[productId]/page";
import { ProductCover } from "@/ui/atoms/ProductCover";
import { Pagination } from "@/ui/organisms/Pagination";
import { ActiveLink } from "@/ui/atoms/ActiveLink";

const PRODUCTS_PER_PAGE = 5;
const ALL_PRODUCTS = 25;

async function getProducts({ take = 5, offset = 0 }: { take?: number; offset?: number }) {
	const res = await fetch(
		`https://naszsklep-api.vercel.app/api/products?take=${take}&offset=${offset}`,
	);
	return (await res.json()) as Product[];
}

export default async function ProductsPage({ params }: { params: { pageId: string } }) {
	console.log(params);

	const pageNumber = parseFloat(params.pageId);

	const products = await getProducts({
		take: PRODUCTS_PER_PAGE,
		offset: (pageNumber - 1) * PRODUCTS_PER_PAGE,
	});

	const productPages = Math.ceil(ALL_PRODUCTS / PRODUCTS_PER_PAGE);

	// return 404
	if (!products.length || pageNumber > productPages) {
		return notFound();
	}

	return (
		<main>
			<h1>HELLLO all products - {params.pageId}</h1>

			<ul data-testid="products-list">
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
