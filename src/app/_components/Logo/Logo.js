import NextImage from "../NextImage/NextImage";

const Logo = () => {
	return (
		<NextImage
			src="/favicon.png"
			alt="Melocue"
			width={56}
			height={56}
			className="h-14 w-auto rounded-full mx-auto"
			priority={true}
		/>
	);
};

export default Logo;
