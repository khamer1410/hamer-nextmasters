import { ActiveLink } from "../atoms/ActiveLink";
// TODO: add dynamic categories
export const NavBar = () => {
	return (
		<nav className="flex items-center justify-center  bg-white p-4">
			<ul className="flex justify-center gap-4">
				<li>
					<ActiveLink href="/" text="Home" exact />
				</li>
				<li>
					<ActiveLink href="/products" text="All" />
				</li>
				<li>
					<ActiveLink href="/categories/t-shirts" text="t-shirts" />
				</li>
			</ul>
		</nav>
	);
};
