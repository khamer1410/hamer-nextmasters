import { notFound } from "next/navigation";
import { type Route } from "next";
import { ProductCover } from "@/ui/atoms/ProductCover";
import { Pagination } from "@/ui/organisms/Pagination";
import { ActiveLink } from "@/ui/atoms/ActiveLink";
import { getProducts } from "@/utils/getProducts";

const PRODUCTS_PER_PAGE = 5;
const ALL_PRODUCTS = 25;

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
					<ActiveLink key={index} href={`/products/${index + 1}` as Route} text={`${index + 1}`} />
				))}
			</Pagination>
		</main>
	);
}
