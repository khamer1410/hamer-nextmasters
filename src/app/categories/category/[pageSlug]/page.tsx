export const generateStaticParams = async ({ params }: { params: { category: string } }) => {
	if (params.category === "all") {
		return [{ pageNumber: 1 }, { pageNumber: 2 }];
	} else {
		return [{ pageNumber: 1 }];
	}
};

export default function CategoriesPage({ pageNumber }) {
	return (
		<div>
			<h1>Categories : {pageNumber}</h1>
		</div>
	);
}
