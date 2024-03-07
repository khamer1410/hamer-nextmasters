interface ProductCoverProps {
	name: string;
	description: string;
}

export const ProductCover = ({ name, description }: ProductCoverProps) => (
	<li className="rounded-lg border border-gray-500 p-2">
		<h2> {name}</h2>
		<p>{description}</p>
	</li>
);
