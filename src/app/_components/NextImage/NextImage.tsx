import Image from "next/image";

interface Props {
	src: string;
	alt: string;
	width: number;
	height: number;
	className: string;
}

const NextImage: React.FC<Props> = ({ src, alt, width, height, className }) => {
	return <Image src={src} alt={alt} width={width} height={height} className={className} />;
};

export default NextImage;
