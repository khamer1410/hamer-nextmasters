/* eslint-disable */
import * as types from './graphql';



/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "query CategoryProductsGetBySlug($category: String!) {\n  category(slug: $category) {\n    products {\n      id\n      name\n    }\n  }\n}": types.CategoryProductsGetBySlugDocument,
    "query ProductsGetList($count: Int!, $offset: Int!) {\n  products(take: $count, skip: $offset) {\n    data {\n      id\n      name\n      description\n      price\n      categories {\n        name\n      }\n      images {\n        url\n      }\n    }\n  }\n}\n\nquery ProductGetById($id: ID!) {\n  product(id: $id) {\n    id\n    name\n    description\n    categories {\n      name\n    }\n    images {\n      url\n    }\n    price\n  }\n}": types.ProductsGetListDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CategoryProductsGetBySlug($category: String!) {\n  category(slug: $category) {\n    products {\n      id\n      name\n    }\n  }\n}"): typeof import('./graphql').CategoryProductsGetBySlugDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetList($count: Int!, $offset: Int!) {\n  products(take: $count, skip: $offset) {\n    data {\n      id\n      name\n      description\n      price\n      categories {\n        name\n      }\n      images {\n        url\n      }\n    }\n  }\n}\n\nquery ProductGetById($id: ID!) {\n  product(id: $id) {\n    id\n    name\n    description\n    categories {\n      name\n    }\n    images {\n      url\n    }\n    price\n  }\n}"): typeof import('./graphql').ProductsGetListDocument;


export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}
