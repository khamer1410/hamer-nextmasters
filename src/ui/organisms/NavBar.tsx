"use client";

import { usePathname } from "next/navigation";
import { ActiveLink } from "../atoms/ActiveLink";

export const NavBar = () => {
	const pathname = usePathname();

	// Example usage:
	// isActive("/") -> true if the current path is "/"
	// isActive("/products") -> true if the current path is "/products"

	return (
		<nav className="flex items-center justify-center border-2 border-lime-400 p-4">
			<ul className="flex justify-center gap-4">
				<li>
					<ActiveLink href="/" text="Home" isActive={pathname === "/"} />
				</li>
				<li>
					<ActiveLink href="/products" text="All" isActive={pathname === "/products"} />
				</li>
			</ul>
		</nav>
	);
};
