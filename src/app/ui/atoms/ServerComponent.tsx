import "server-only";

export const ServerComponent = ({ children }: { children?: React.ReactNode }) => {
	return (
		<div>
			<h1>Server</h1>
			{children}
		</div>
	);
};
