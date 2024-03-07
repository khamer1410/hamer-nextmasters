import { type Route } from "next";
import Link from "next/link";
import clsx from "clsx";
import { type AnchorHTMLAttributes } from "react";

interface ActiveLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
	isActive: boolean;
	href: Route;
	text: string;
}

export const ActiveLink = ({ isActive, href, text }: ActiveLinkProps) => {
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
