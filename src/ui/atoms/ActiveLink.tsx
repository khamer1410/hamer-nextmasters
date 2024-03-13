"use client";

import { type Route } from "next";
import Link from "next/link";
import clsx from "clsx";
import { type AnchorHTMLAttributes } from "react";
import { usePathname } from "next/navigation";

interface ActiveLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
	href: Route;
	text: string;
	exact?: boolean;
}

export const ActiveLink = ({ href, text, exact = false }: ActiveLinkProps) => {
	const pathname = usePathname();

	const isActive = exact ? pathname === href : pathname.startsWith(href);

	return (
		<Link
			href={href}
			className={clsx("text-blue-500", { "font-bold underline": isActive })}
			aria-current={isActive ? "page" : undefined}
		>
			{text}
		</Link>
	);
};
