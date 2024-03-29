import { notFound } from "next/navigation";
import { getCategoriesWithProducts } from "@/api/getCategories";

export default async function CategoriesPage({
	params,
}: {
	params: { category: string; pageSlug: string };
}) {
	// get category from url
	// fetch products for given category slug

	// display 4 products per page
	// add pagination
	// add 404
	const { category, pageSlug } = params;
	const productsInThisCategory = await getCategoriesWithProducts(category);

	if (!productsInThisCategory) {
		return notFound();
	}

	return (
		<div>
			<h1>
				Categories : {category}, {pageSlug}
			</h1>
			<pre>{JSON.stringify(productsInThisCategory, null, 2)}</pre>
		</div>
	);
}
