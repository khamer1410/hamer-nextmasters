import { ActiveLink } from "../atoms/ActiveLink";

export const NavBar = () => {
	return (
		<nav className="flex items-center justify-center border-2 border-lime-400 p-4">
			<ul className="flex justify-center gap-4">
				<li>
					<ActiveLink href="/" text="Home" exact />
				</li>
				<li>
					<ActiveLink href="/products" text="All" />
				</li>
			</ul>
		</nav>
	);
};
