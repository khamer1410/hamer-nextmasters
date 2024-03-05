import { ServerComponent } from "./ui/atoms/ServerComponent";
import { ClientComponent } from "./ui/atoms/ClientComponent";

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

export async function generateStaticParams() {
	const res = await fetch(`https://naszsklep-api.vercel.app/api/products`);
	const products = (await res.json()) as { id: string; title: string }[];

	return products.map((product) => ({ productId: product.id }));
}

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<ServerComponent>
				<ClientComponent>
					<ServerComponent />
				</ClientComponent>
			</ServerComponent>
			<ul data-testid="products-list" className="flex justify-between gap-1">
				{products.map((product, index) => (
					<Product key={index} name={product.name} description={product.description} />
				))}
			</ul>
		</main>
	);
}

interface ProductProps {
	name: string;
	description: string;
}

const Product = ({ name, description }: ProductProps) => (
	<li className="rounded-lg border border-gray-500 p-2">
		<h2> {name}</h2>
		<p>{description}</p>
	</li>
);
