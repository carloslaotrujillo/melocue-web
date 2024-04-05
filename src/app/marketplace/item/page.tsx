"use client";

import NextImage from "@/app/_components/NextImage/NextImage";
import PromotionHeader from "@/app/_components/PromotionHeader/PromotionHeader";

import { Fragment, useState } from "react";
import { StarIcon } from "@heroicons/react/20/solid";
import { Dialog, Disclosure, Popover, RadioGroup, Tab, Transition } from "@headlessui/react";
import {
	Bars3Icon,
	HeartIcon,
	MagnifyingGlassIcon,
	MinusIcon,
	PlusIcon,
	ShoppingBagIcon,
	UserIcon,
	XMarkIcon,
} from "@heroicons/react/24/outline";

const product = {
	name: "Zip Tote Basket",
	price: "$140",
	rating: 4,
	images: [
		{
			id: 1,
			name: "Angled view",
			src: "https://tailwindui.com/img/ecommerce-images/product-page-03-product-01.jpg",
			alt: "Angled front view with bag zipped and handles upright.",
		},
		// More images...
	],
	colors: [
		{ name: "Washed Black", bgColor: "bg-gray-700", selectedColor: "ring-gray-700" },
		{ name: "White", bgColor: "bg-white", selectedColor: "ring-gray-400" },
		{ name: "Washed Gray", bgColor: "bg-gray-500", selectedColor: "ring-gray-500" },
	],
	description: `
    <p>The Zip Tote Basket is the perfect midpoint between shopping tote and comfy backpack. With convertible straps, you can hand carry, should sling, or backpack this convenient and spacious bag. The zip top and durable canvas construction keeps your goods protected for all-day use.</p>
  `,
	details: [
		{
			name: "Features",
			items: [
				"Multiple strap configurations",
				"Spacious interior with top zip",
				"Leather handle and tabs",
				"Interior dividers",
				"Stainless strap loops",
				"Double stitched construction",
				"Water-resistant",
			],
		},
		// More sections...
	],
};
const relatedProducts = [
	{
		id: 1,
		name: "Zip Tote Basket",
		color: "White and black",
		href: "#",
		imageSrc: "https://tailwindui.com/img/ecommerce-images/product-page-03-related-product-01.jpg",
		imageAlt: "Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.",
		price: "$140",
	},
	// More products...
];

function classNames(...classes: Array<string | boolean | undefined>) {
	return classes.filter(Boolean).join(" ");
}

export default function Product() {
	const [open, setOpen] = useState(false);
	const [selectedColor, setSelectedColor] = useState(product.colors[0]);

	return (
		<div className="bg-white">
			{/* Mobile menu */}
			<Transition.Root show={open} as={Fragment}>
				<Dialog as="div" className="relative z-40 lg:hidden" onClose={setOpen}>
					<Transition.Child
						as={Fragment}
						enter="transition-opacity ease-linear duration-300"
						enterFrom="opacity-0"
						enterTo="opacity-100"
						leave="transition-opacity ease-linear duration-300"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
					>
						<div className="fixed inset-0 bg-black bg-opacity-25" />
					</Transition.Child>

					<div className="fixed inset-0 z-40 flex">
						<Transition.Child
							as={Fragment}
							enter="transition ease-in-out duration-300 transform"
							enterFrom="-translate-x-full"
							enterTo="translate-x-0"
							leave="transition ease-in-out duration-300 transform"
							leaveFrom="translate-x-0"
							leaveTo="-translate-x-full"
						>
							<Dialog.Panel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
								<div className="flex px-4 pb-2 pt-5">
									<button
										type="button"
										className="-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
										onClick={() => setOpen(false)}
									>
										<span className="sr-only">Close menu</span>
										<XMarkIcon className="h-6 w-6" aria-hidden="true" />
									</button>
								</div>
								<div className="border-t border-gray-200 px-4 py-6">
									<a href="#" className="-m-2 flex items-center p-2">
										<NextImage
											src="https://tailwindui.com/img/flags/flag-united-states.svg"
											alt="Currency"
											width={20}
											height={20}
											className="block h-auto w-5 flex-shrink-0"
										/>
										<span className="ml-3 block text-base font-medium text-gray-900">CAD</span>
										<span className="sr-only">, change currency</span>
									</a>
								</div>
							</Dialog.Panel>
						</Transition.Child>
					</div>
				</Dialog>
			</Transition.Root>

			<header className="relative bg-white">
				<PromotionHeader />
				<nav aria-label="Top" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
					<div className="border-b border-gray-200">
						<div className="flex h-16 items-center justify-between">
							<div className="flex flex-1 items-center lg:hidden">
								<button
									type="button"
									className="-ml-2 rounded-md bg-white p-2 text-gray-400"
									onClick={() => setOpen(true)}
								>
									<span className="sr-only">Open menu</span>
									<Bars3Icon className="h-6 w-6" aria-hidden="true" />
								</button>

								<a href="#" className="ml-2 p-2 text-gray-400 hover:text-gray-500">
									<span className="sr-only">Search</span>
									<MagnifyingGlassIcon className="h-6 w-6" aria-hidden="true" />
								</a>
							</div>
							<div className="flex flex-1 items-center justify-end">
								<a href="#" className="hidden text-gray-700 hover:text-gray-800 lg:flex lg:items-center">
									<NextImage
										src="https://tailwindui.com/img/flags/flag-united-states.svg"
										alt="Currency"
										width={20}
										height={20}
										className="block h-auto w-5 flex-shrink-0"
									/>
									<span className="ml-3 block text-sm font-medium">USD</span>
									<span className="sr-only">, change currency</span>
								</a>

								{/* Search */}
								<a href="#" className="ml-6 hidden p-2 text-gray-400 hover:text-gray-500 lg:block">
									<span className="sr-only">Search</span>
									<MagnifyingGlassIcon className="h-6 w-6" aria-hidden="true" />
								</a>

								{/* Account */}
								<a href="#" className="p-2 text-gray-400 hover:text-gray-500 lg:ml-4">
									<span className="sr-only">Account</span>
									<UserIcon className="h-6 w-6" aria-hidden="true" />
								</a>

								{/* Cart */}
								<div className="ml-4 flow-root lg:ml-6">
									<a href="#" className="group -m-2 flex items-center p-2">
										<ShoppingBagIcon
											className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
											aria-hidden="true"
										/>
										<span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">0</span>
										<span className="sr-only">items in cart, view bag</span>
									</a>
								</div>
							</div>
						</div>
					</div>
				</nav>
			</header>

			<main className="mx-auto max-w-7xl sm:px-6 sm:pt-16 lg:px-8">
				<div className="mx-auto max-w-2xl lg:max-w-none">
					{/* Product */}
					<div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
						{/* Image gallery */}
						<Tab.Group as="div" className="flex flex-col-reverse">
							{/* Image selector */}
							<div className="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none">
								<Tab.List className="grid grid-cols-4 gap-6">
									{product.images.map((image) => (
										<Tab
											key={image.id}
											className="relative flex h-24 cursor-pointer items-center justify-center rounded-md bg-white text-sm font-medium uppercase text-gray-900 hover:bg-gray-50 focus:outline-none focus:ring focus:ring-opacity-50 focus:ring-offset-4"
										>
											{({ selected }) => (
												<>
													<span className="sr-only">{image.name}</span>
													<span className="absolute inset-0 overflow-hidden rounded-md">
														<NextImage
															src={image.src}
															alt={image.alt}
															width={128}
															height={128}
															className="h-full w-full object-cover object-center"
														/>
													</span>
													<span
														className={classNames(
															selected ? "ring-indigo-500" : "ring-transparent",
															"pointer-events-none absolute inset-0 rounded-md ring-2 ring-offset-2"
														)}
														aria-hidden="true"
													/>
												</>
											)}
										</Tab>
									))}
								</Tab.List>
							</div>

							<Tab.Panels className="aspect-h-1 aspect-w-1 w-full">
								{product.images.map((image) => (
									<Tab.Panel key={image.id}>
										<NextImage
											src={image.src}
											alt={image.alt}
											width={672}
											height={672}
											className="h-full w-full object-cover object-center sm:rounded-lg"
										/>
									</Tab.Panel>
								))}
							</Tab.Panels>
						</Tab.Group>

						{/* Product info */}
						<div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
							<h1 className="text-3xl font-bold tracking-tight text-gray-900">{product.name}</h1>

							<div className="mt-3">
								<h2 className="sr-only">Product information</h2>
								<p className="text-3xl tracking-tight text-gray-900">{product.price}</p>
							</div>

							{/* Reviews */}
							<div className="mt-3">
								<h3 className="sr-only">Reviews</h3>
								<div className="flex items-center">
									<div className="flex items-center">
										{[0, 1, 2, 3, 4].map((rating) => (
											<StarIcon
												key={rating}
												className={classNames(
													product.rating > rating ? "text-indigo-500" : "text-gray-300",
													"h-5 w-5 flex-shrink-0"
												)}
												aria-hidden="true"
											/>
										))}
									</div>
									<p className="sr-only">{product.rating} out of 5 stars</p>
								</div>
							</div>

							<div className="mt-6">
								<h3 className="sr-only">Description</h3>

								<div
									className="space-y-6 text-base text-gray-700"
									dangerouslySetInnerHTML={{ __html: product.description }}
								/>
							</div>

							<form className="mt-6">
								{/* Colors */}
								<div>
									<h3 className="text-sm text-gray-600">Color</h3>

									<RadioGroup value={selectedColor} onChange={setSelectedColor} className="mt-2">
										<RadioGroup.Label className="sr-only">Choose a color</RadioGroup.Label>
										<div className="flex items-center space-x-3">
											{product.colors.map((color) => (
												<RadioGroup.Option
													key={color.name}
													value={color}
													className={({ active, checked }) =>
														classNames(
															color.selectedColor,
															active && checked ? "ring ring-offset-1" : "",
															!active && checked ? "ring-2" : "",
															"relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none"
														)
													}
												>
													<RadioGroup.Label as="span" className="sr-only">
														{color.name}
													</RadioGroup.Label>
													<span
														aria-hidden="true"
														className={classNames(
															color.bgColor,
															"h-8 w-8 rounded-full border border-black border-opacity-10"
														)}
													/>
												</RadioGroup.Option>
											))}
										</div>
									</RadioGroup>
								</div>

								<div className="mt-10 flex">
									<button
										type="submit"
										className="flex max-w-xs flex-1 items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50 sm:w-full"
									>
										Add to bag
									</button>

									<button
										type="button"
										className="ml-4 flex items-center justify-center rounded-md px-3 py-3 text-gray-400 hover:bg-gray-100 hover:text-gray-500"
									>
										<HeartIcon className="h-6 w-6 flex-shrink-0" aria-hidden="true" />
										<span className="sr-only">Add to favorites</span>
									</button>
								</div>
							</form>

							<section aria-labelledby="details-heading" className="mt-12">
								<h2 id="details-heading" className="sr-only">
									Additional details
								</h2>

								<div className="divide-y divide-gray-200 border-t">
									{product.details.map((detail) => (
										<Disclosure as="div" key={detail.name}>
											{({ open }) => (
												<>
													<h3>
														<Disclosure.Button className="group relative flex w-full items-center justify-between py-6 text-left">
															<span
																className={classNames(
																	open ? "text-indigo-600" : "text-gray-900",
																	"text-sm font-medium"
																)}
															>
																{detail.name}
															</span>
															<span className="ml-6 flex items-center">
																{open ? (
																	<MinusIcon
																		className="block h-6 w-6 text-indigo-400 group-hover:text-indigo-500"
																		aria-hidden="true"
																	/>
																) : (
																	<PlusIcon
																		className="block h-6 w-6 text-gray-400 group-hover:text-gray-500"
																		aria-hidden="true"
																	/>
																)}
															</span>
														</Disclosure.Button>
													</h3>
													<Disclosure.Panel as="div" className="prose prose-sm pb-6">
														<ul role="list">
															{detail.items.map((item) => (
																<li key={item}>{item}</li>
															))}
														</ul>
													</Disclosure.Panel>
												</>
											)}
										</Disclosure>
									))}
								</div>
							</section>
						</div>
					</div>

					<section aria-labelledby="related-heading" className="mt-10 border-t border-gray-200 px-4 py-16 sm:px-0">
						<h2 id="related-heading" className="text-xl font-bold text-gray-900">
							Customers also bought
						</h2>

						<div className="mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
							{relatedProducts.map((product) => (
								<div key={product.id}>
									<div className="relative">
										<div className="relative h-72 w-full overflow-hidden rounded-lg">
											<NextImage
												src={product.imageSrc}
												alt={product.imageAlt}
												width={640}
												height={640}
												className="h-full w-full object-cover object-center"
											/>
										</div>
										<div className="relative mt-4">
											<h3 className="text-sm font-medium text-gray-900">{product.name}</h3>
											<p className="mt-1 text-sm text-gray-500">{product.color}</p>
										</div>
										<div className="absolute inset-x-0 top-0 flex h-72 items-end justify-end overflow-hidden rounded-lg p-4">
											<div
												aria-hidden="true"
												className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black opacity-50"
											/>
											<p className="relative text-lg font-semibold text-white">{product.price}</p>
										</div>
									</div>
									<div className="mt-6">
										<a
											href={product.href}
											className="relative flex items-center justify-center rounded-md border border-transparent bg-gray-100 px-8 py-2 text-sm font-medium text-gray-900 hover:bg-gray-200"
										>
											Add to bag<span className="sr-only">, {product.name}</span>
										</a>
									</div>
								</div>
							))}
						</div>
					</section>
				</div>
			</main>
		</div>
	);
}
