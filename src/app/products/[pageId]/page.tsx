import { notFound } from "next/navigation";
import { type Route } from "next";
import { ProductCover } from "@/ui/atoms/ProductCover";
import { Pagination } from "@/ui/organisms/Pagination";
import { ActiveLink } from "@/ui/atoms/ActiveLink";
import { Title } from "@/ui/atoms/Title";
import { type Product } from "@/types/types";
import { executeGraphql } from "@/utils/graphQl";
import { ProductsGetListDocument } from "@/gql/graphql";

const PRODUCTS_PER_PAGE = 5;
const ALL_PRODUCTS = 25;

// This function gets called at build time
export async function generateStaticParams() {
	const paths = [1, 2, 3, 4, 5];
	return paths.map((id) => ({ pageId: id.toString() }));
}

async function showProducts(pageId: string) {
	const pageNumber = parseFloat(pageId);
	const productPages = Math.ceil(ALL_PRODUCTS / PRODUCTS_PER_PAGE);

	// const products = await getProducts({
	// 	take: PRODUCTS_PER_PAGE,
	// 	offset: (pageNumber - 1) * PRODUCTS_PER_PAGE,
	// });

	// todo - add take and offset
	const prodGQ = await executeGraphql(ProductsGetListDocument);

	console.log("prodGQ", prodGQ);
	const products = prodGQ.products.data;

	// return 404
	if (!products.length || pageNumber > productPages) {
		return notFound();
	}

	return { products, productPages };
}

export default async function ProductsPage({ params }: { params: { pageId: string } }) {
	const { pageId } = params;
	const { products, productPages } = await showProducts(pageId);

	return (
		<main className="container mx-auto px-4">
			<Title>HELLLO all products - {params.pageId}</Title>

			<ul data-testid="products-list" className="flex flex-col gap-4 py-4">
				{products.map((product: Product) => (
					<ProductCover key={product.id} {...product} />
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
