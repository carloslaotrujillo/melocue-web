import Image from "next/image";

const NextImage = ({ src, alt, width, height, className }) => {
	return <Image src={src} alt={alt} width={width} height={height} className={className} />;
};

export default NextImage;
