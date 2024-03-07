import { type Route } from "next";
import Link from "next/link";
import clsx from "clsx";
import { type AnchorHTMLAttributes } from "react";

interface ActiveLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
	pathname: string;
	href: Route;
	text: string;
	exact?: boolean;
}

export const ActiveLink = ({ pathname, href, text, exact = false }: ActiveLinkProps) => {
	const isActive = exact ? pathname === href : pathname.startsWith(href);

	return (
		<Link
			href={href}
			className={clsx("text-blue-500", { "font-bold underline": isActive })}
			aria-current={isActive}
		>
			{text}
		</Link>
	);
};
