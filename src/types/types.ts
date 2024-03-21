export interface Product {
	id: string;
	name: string;
	description: string;
	price: number;
	categories: {
		name: string;
	}[];
	images: {
		url: string;
	}[];
}

export type GraphQLResponse<T> =
	| { data?: undefined; errors: { message: string }[] }
	| { data: T; errors?: undefined };
