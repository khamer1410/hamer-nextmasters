"use client";

import { usePathname } from "next/navigation";
import { ActiveLink } from "../atoms/ActiveLink";

export const NavBar = () => {
	const pathname = usePathname();

	return (
		<nav className="flex items-center justify-center border-2 border-lime-400 p-4">
			<ul className="flex justify-center gap-4">
				<li>
					<ActiveLink href="/" text="Home" pathname={pathname} exact />
				</li>
				<li>
					<ActiveLink href="/products" text="All" pathname={pathname} />
				</li>
			</ul>
		</nav>
	);
};
