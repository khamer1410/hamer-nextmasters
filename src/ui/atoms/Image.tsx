import React from "react";

interface ImageProps<T> extends React.ImgHTMLAttributes<HTMLImageElement> {
	src: string;
	alt: string;
	as?: T;
}

export const Image = <T extends React.ElementType>({ src, alt, as, ...rest }: ImageProps<T>) => {
	const Component = as || "img";
	return <Component {...rest} src={src} alt={alt} />;
};
