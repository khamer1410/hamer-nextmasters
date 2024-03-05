"use client";

import React from "react";

export const ClientComponent = ({ children }: { children: React.ReactNode }) => {
	// add counter
	const [count, setCount] = React.useState(0);
	// add increment function
	const increment = () => setCount(count + 1);
	// add decrement function
	const decrement = () => setCount(count - 1);

	return (
		<div>
			<h1>Client</h1>
			<button onClick={increment}>Increment</button>
			<button onClick={decrement}>Decrement</button>
			<p>{count}</p>
			{/* <ServerComponent /> */}
			{children}
		</div>
	);
};
