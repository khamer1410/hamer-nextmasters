import { ProductGetByIdDocument, ProductsGetListDocument } from "@/gql/graphql";
import { type Product } from "@/types/types";
import { executeGraphql } from "@/utils/graphQl";

/**
 * Retrieves a list of products from the API.
 *
 * @param {Object} options - The options for fetching the products.
 * @param {number} options.take - The number of products to retrieve. Default is 5.
 * @param {number} options.offset - The offset for pagination. Default is 0.
 * @returns {Promise<Product[]>} - A promise that resolves to an array of products.
 * @deprecated Use getProducts instead.
 * */
export async function getProductsFetch({
	take = 5,
	offset = 0,
}: {
	take?: number;
	offset?: number;
}) {
	const res = await fetch(
		`https://naszsklep-api.vercel.app/api/products?take=${take}&offset=${offset}`,
	);
	return (await res.json()) as Product[];
}

export async function getProducts(count: number, offset: number = 0) {
	const prodGQ = await executeGraphql(ProductsGetListDocument, { count, offset });
	const products = prodGQ.products.data;
	return products;
}

export const getProductById = async (id: string) => {
	const response = await executeGraphql(ProductGetByIdDocument, { id });
	return response.product;
};
