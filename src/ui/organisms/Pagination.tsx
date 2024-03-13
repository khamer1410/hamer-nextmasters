export const Pagination = ({ children }: { children: React.ReactNode }) => {
	return (
		<nav aria-label="pagination">
			<h1>Pagination</h1>
			<ul>{children}</ul>
		</nav>
	);
};
