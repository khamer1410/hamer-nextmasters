export interface Product {
	title: string;
	price: number;
	description: string;
	category: string;
	image: string;
	longDescription: string;
	rating: {
		rate: number;
		count: number;
	};
	id: string;
}

export type GraphQLResponse<T> =
	| { data?: undefined; errors: { message: string }[] }
	| { data: T; errors?: undefined };
