import { CategoryProductsGetBySlugDocument } from "@/gql/graphql";
import { executeGraphql } from "@/utils/graphQl";

export const getCategoriesWithProducts = async (category: string) => {
	const response = await executeGraphql(CategoryProductsGetBySlugDocument, { category });
	return response.category?.products;
};
