"use client";

import NextImage from "@/app/_components/NextImage/NextImage";

import { Fragment, useState } from "react";
import { Dialog, Popover, Tab, Transition } from "@headlessui/react";
import { Bars3Icon, MagnifyingGlassIcon, ShoppingCartIcon, UserIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

const currencies = ["CAD", "USD", "AUD", "EUR", "GBP"];
const navigation = {
	categories: [
		{
			name: "Women",
			featured: [
				{ name: "Sleep", href: "#" },
				{ name: "Swimwear", href: "#" },
				{ name: "Underwear", href: "#" },
			],
			collection: [
				{ name: "Everything", href: "#" },
				{ name: "Core", href: "#" },
				{ name: "New Arrivals", href: "#" },
				{ name: "Sale", href: "#" },
			],
			categories: [
				{ name: "Basic Tees", href: "#" },
				{ name: "Artwork Tees", href: "#" },
				{ name: "Bottoms", href: "#" },
				{ name: "Underwear", href: "#" },
				{ name: "Accessories", href: "#" },
			],
			brands: [
				{ name: "Full Nelson", href: "#" },
				{ name: "My Way", href: "#" },
				{ name: "Re-Arranged", href: "#" },
				{ name: "Counterfeit", href: "#" },
				{ name: "Significant Other", href: "#" },
			],
		},
		{
			name: "Men",
			featured: [
				{ name: "Casual", href: "#" },
				{ name: "Boxers", href: "#" },
				{ name: "Outdoor", href: "#" },
			],
			collection: [
				{ name: "Everything", href: "#" },
				{ name: "Core", href: "#" },
				{ name: "New Arrivals", href: "#" },
				{ name: "Sale", href: "#" },
			],
			categories: [
				{ name: "Artwork Tees", href: "#" },
				{ name: "Pants", href: "#" },
				{ name: "Accessories", href: "#" },
				{ name: "Boxers", href: "#" },
				{ name: "Basic Tees", href: "#" },
			],
			brands: [
				{ name: "Significant Other", href: "#" },
				{ name: "My Way", href: "#" },
				{ name: "Counterfeit", href: "#" },
				{ name: "Re-Arranged", href: "#" },
				{ name: "Full Nelson", href: "#" },
			],
		},
	],
	pages: [
		{ name: "Company", href: "#" },
		{ name: "Stores", href: "#" },
	],
};
const products = [
	{
		id: 1,
		name: "Nomad Tumbler",
		description:
			"This durable and portable insulated tumbler will keep your beverage at the perfect temperature during your next adventure.",
		href: "#",
		price: "35.00",
		status: "Preparing to ship",
		step: 1,
		date: "March 24, 2021",
		datetime: "2021-03-24",
		address: ["Floyd Miles", "7363 Cynthia Pass", "Toronto, ON N3Y 4H8"],
		email: "f•••@example.com",
		phone: "1•••••••••40",
		imageSrc: "https://tailwindui.com/img/ecommerce-images/confirmation-page-03-product-01.jpg",
		imageAlt: "Insulated bottle with white base and black snap lid.",
	},
	{
		id: 2,
		name: "Minimalist Wristwatch",
		description: "This contemporary wristwatch has a clean, minimalist look and high quality components.",
		href: "#",
		price: "149.00",
		status: "Shipped",
		step: 0,
		date: "March 23, 2021",
		datetime: "2021-03-23",
		address: ["Floyd Miles", "7363 Cynthia Pass", "Toronto, ON N3Y 4H8"],
		email: "f•••@example.com",
		phone: "1•••••••••40",
		imageSrc: "https://tailwindui.com/img/ecommerce-images/confirmation-page-03-product-02.jpg",
		imageAlt:
			"Arm modeling wristwatch with black leather band, white watch face, thin watch hands, and fine time markings.",
	},
	// More products...
];
const footerNavigation = {
	account: [
		{ name: "Manage Account", href: "#" },
		{ name: "Saved Items", href: "#" },
		{ name: "Orders", href: "#" },
		{ name: "Redeem Gift card", href: "#" },
	],
	service: [
		{ name: "Shipping & Returns", href: "#" },
		{ name: "Warranty", href: "#" },
		{ name: "FAQ", href: "#" },
		{ name: "Find a store", href: "#" },
		{ name: "Get in touch", href: "#" },
	],
	company: [
		{ name: "Who we are", href: "#" },
		{ name: "Press", href: "#" },
		{ name: "Careers", href: "#" },
		{ name: "Terms & Conditions", href: "#" },
		{ name: "Privacy", href: "#" },
	],
	connect: [
		{ name: "Facebook", href: "#" },
		{ name: "Instagram", href: "#" },
		{ name: "Pinterest", href: "#" },
	],
};

function classNames(...classes: Array<string | boolean | undefined>) {
	return classes.filter(Boolean).join(" ");
}

export default function Orders() {
	const [open, setOpen] = useState(false);

	return (
		<div className="bg-gray-50">
			<main className="mx-auto max-w-2xl pb-24 pt-8 sm:px-6 sm:pt-16 lg:max-w-7xl lg:px-8">
				<div className="space-y-2 px-4 sm:flex sm:items-baseline sm:justify-between sm:space-y-0 sm:px-0">
					<div className="flex sm:items-baseline sm:space-x-4">
						<h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">Order #54879</h1>
						<a href="#" className="hidden text-sm font-medium text-indigo-600 hover:text-indigo-500 sm:block">
							View invoice
							<span aria-hidden="true"> &rarr;</span>
						</a>
					</div>
					<p className="text-sm text-gray-600">
						Order placed{" "}
						<time dateTime="2021-03-22" className="font-medium text-gray-900">
							March 22, 2027
						</time>
					</p>
					<a href="#" className="text-sm font-medium text-indigo-600 hover:text-indigo-500 sm:hidden">
						View invoice
						<span aria-hidden="true"> &rarr;</span>
					</a>
				</div>

				{/* Products */}
				<section aria-labelledby="products-heading" className="mt-6">
					<h2 id="products-heading" className="sr-only">
						Products purchased
					</h2>

					<div className="space-y-8">
						{products.map((product) => (
							<div
								key={product.id}
								className="border-b border-t border-gray-200 bg-white shadow-sm sm:rounded-lg sm:border"
							>
								<div className="px-4 py-6 sm:px-6 lg:grid lg:grid-cols-12 lg:gap-x-8 lg:p-8">
									<div className="sm:flex lg:col-span-7">
										<div className="aspect-h-1 aspect-w-1 w-full flex-shrink-0 overflow-hidden rounded-lg sm:aspect-none sm:h-40 sm:w-40">
											<NextImage
												src={product.imageSrc}
												alt={product.imageAlt}
												width={1280}
												height={1280}
												className="h-full w-full object-cover object-center sm:h-full sm:w-full"
											/>
										</div>

										<div className="mt-6 sm:ml-6 sm:mt-0">
											<h3 className="text-base font-medium text-gray-900">
												<a href={product.href}>{product.name}</a>
											</h3>
											<p className="mt-2 text-sm font-medium text-gray-900">${product.price}</p>
											<p className="mt-3 text-sm text-gray-500">{product.description}</p>
										</div>
									</div>

									<div className="mt-6 lg:col-span-5 lg:mt-0">
										<dl className="grid grid-cols-2 gap-x-6 text-sm">
											<div>
												<dt className="font-medium text-gray-900">Delivery address</dt>
												<dd className="mt-3 text-gray-500">
													<span className="block">{product.address[0]}</span>
													<span className="block">{product.address[1]}</span>
													<span className="block">{product.address[2]}</span>
												</dd>
											</div>
											<div>
												<dt className="font-medium text-gray-900">Shipping updates</dt>
												<dd className="mt-3 space-y-3 text-gray-500">
													<p>{product.email}</p>
													<p>{product.phone}</p>
													<button type="button" className="font-medium text-indigo-600 hover:text-indigo-500">
														Edit
													</button>
												</dd>
											</div>
										</dl>
									</div>
								</div>
							</div>
						))}
					</div>
				</section>

				{/* Billing */}
				<section aria-labelledby="summary-heading" className="mt-16">
					<h2 id="summary-heading" className="sr-only">
						Billing Summary
					</h2>

					<div className="bg-gray-100 px-4 py-6 sm:rounded-lg sm:px-6 lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8 lg:py-8">
						<dl className="grid grid-cols-2 gap-6 text-sm sm:grid-cols-2 md:gap-x-8 lg:col-span-7">
							<div>
								<dt className="font-medium text-gray-900">Billing address</dt>
								<dd className="mt-3 text-gray-500">
									<span className="block">Floyd Miles</span>
									<span className="block">7363 Cynthia Pass</span>
									<span className="block">Toronto, ON N3Y 4H8</span>
								</dd>
							</div>
							<div>
								<dt className="font-medium text-gray-900">Payment information</dt>
								<dd className="-ml-4 -mt-1 flex flex-wrap">
									<div className="ml-4 mt-4 flex-shrink-0">
										<svg aria-hidden="true" width={36} height={24} viewBox="0 0 36 24" className="h-6 w-auto">
											<rect width={36} height={24} rx={4} fill="#224DBA" />
											<path
												d="M10.925 15.673H8.874l-1.538-6c-.073-.276-.228-.52-.456-.635A6.575 6.575 0 005 8.403v-.231h3.304c.456 0 .798.347.855.75l.798 4.328 2.05-5.078h1.994l-3.076 7.5zm4.216 0h-1.937L14.8 8.172h1.937l-1.595 7.5zm4.101-5.422c.057-.404.399-.635.798-.635a3.54 3.54 0 011.88.346l.342-1.615A4.808 4.808 0 0020.496 8c-1.88 0-3.248 1.039-3.248 2.481 0 1.097.969 1.673 1.653 2.02.74.346 1.025.577.968.923 0 .519-.57.75-1.139.75a4.795 4.795 0 01-1.994-.462l-.342 1.616a5.48 5.48 0 002.108.404c2.108.057 3.418-.981 3.418-2.539 0-1.962-2.678-2.077-2.678-2.942zm9.457 5.422L27.16 8.172h-1.652a.858.858 0 00-.798.577l-2.848 6.924h1.994l.398-1.096h2.45l.228 1.096h1.766zm-2.905-5.482l.57 2.827h-1.596l1.026-2.827z"
												fill="#fff"
											/>
										</svg>
										<p className="sr-only">Visa</p>
									</div>
									<div className="ml-4 mt-4">
										<p className="text-gray-900">Ending with 4242</p>
										<p className="text-gray-600">Expires 02 / 24</p>
									</div>
								</dd>
							</div>
						</dl>

						<dl className="mt-8 divide-y divide-gray-200 text-sm lg:col-span-5 lg:mt-0">
							<div className="flex items-center justify-between pb-4">
								<dt className="text-gray-600">Subtotal</dt>
								<dd className="font-medium text-gray-900">$72</dd>
							</div>
							<div className="flex items-center justify-between py-4">
								<dt className="text-gray-600">Shipping</dt>
								<dd className="font-medium text-gray-900">$5</dd>
							</div>
							<div className="flex items-center justify-between py-4">
								<dt className="text-gray-600">Tax</dt>
								<dd className="font-medium text-gray-900">$6.16</dd>
							</div>
							<div className="flex items-center justify-between pt-4">
								<dt className="font-medium text-gray-900">Order total</dt>
								<dd className="font-medium text-indigo-600">$83.16</dd>
							</div>
						</dl>
					</div>
				</section>
			</main>
		</div>
	);
}
