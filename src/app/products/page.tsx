const products = [
	{
		name: "Running Shoes",
		description: "High-performance running shoes for athletes",
	},
	{
		name: "Sports Bra",
		description: "Comfortable and supportive sports bra for active women",
	},
	{
		name: "Athletic Shorts",
		description: "Lightweight and breathable shorts for workouts",
	},
	{
		name: "Athletic Cup",
		description: "Cool cup",
	},
];

export default function ProductsPage() {
	<main className="flex min-h-screen flex-col items-center justify-between p-24">
		<ul data-testid="products-list" className="flex justify-between gap-1">
			{products.map((product, index) => (
				<Product key={index} name={product.name} description={product.description} />
			))}
		</ul>
	</main>;
}
