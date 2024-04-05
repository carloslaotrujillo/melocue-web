import Image from "next/image";

type NextImageProps = {
	src: string;
	alt: string;
	width: number | `${number}`;
	height: number | `${number}`;
	className?: string;
	priority?: boolean;
};

export default function NextImage({ src, alt, width, height, className, priority }: NextImageProps) {
	return <Image src={src} alt={alt} width={width} height={height} className={className} />;
}
