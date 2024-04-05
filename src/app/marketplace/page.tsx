"use client";

import Link from "next/link";
import NextImage from "../_components/NextImage/NextImage";
import PromotionHeader from "../_components/PromotionHeader/PromotionHeader";

import { Fragment, useState } from "react";
import { Dialog, Disclosure, Popover, Tab, Transition } from "@headlessui/react";
import { Bars3Icon, MagnifyingGlassIcon, ShoppingBagIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { ChevronDownIcon, PlusIcon } from "@heroicons/react/20/solid";

const navigation = {
	categories: [
		{
			id: "guitars",
			name: "Guitars",
			featured: [
				{
					name: "New Arrivals",
					href: "#",
					imageSrc: "https://picsum.photos/300/200",
					imageAlt: "Latest electric guitars on display.",
				},
				{
					name: "Acoustic Guitars",
					href: "#",
					imageSrc: "https://picsum.photos/300/200",
					imageAlt: "Variety of acoustic guitars.",
				},
			],
			sections: [
				{
					id: "electric-guitars",
					name: "Electric Guitars",
					items: [
						{ name: "Solid Body", href: "#" },
						{ name: "Semi-Hollow Body", href: "#" },
						{ name: "Hollow Body", href: "#" },
						{ name: "7-String", href: "#" },
						{ name: "8-String", href: "#" },
						{ name: "Left-Handed", href: "#" },
						{ name: "Extended Range", href: "#" },
						{ name: "Signature Models", href: "#" },
						{ name: "Vintage Electric Guitars", href: "#" },
						{ name: "Browse All", href: "#" },
					],
				},
				{
					id: "acoustic-guitars",
					name: "Acoustic Guitars",
					items: [
						{ name: "Steel String", href: "#" },
						{ name: "Classical Guitars", href: "#" },
						{ name: "12-String Guitars", href: "#" },
						{ name: "Travel Guitars", href: "#" },
						{ name: "Left-Handed Acoustic", href: "#" },
						{ name: "Acoustic-Electric", href: "#" },
						{ name: "Small Body Acoustic", href: "#" },
						{ name: "Vintage Acoustic Guitars", href: "#" },
						{ name: "Browse All", href: "#" },
					],
				},
				{
					id: "bass-guitars",
					name: "Bass Guitars",
					items: [
						{ name: "4-String Bass", href: "#" },
						{ name: "5-String Bass", href: "#" },
						{ name: "6-String Bass", href: "#" },
						{ name: "Fretless Bass", href: "#" },
						{ name: "Acoustic Bass", href: "#" },
						{ name: "Left-Handed Bass", href: "#" },
						{ name: "Short Scale Bass", href: "#" },
						{ name: "Extended Range Bass", href: "#" },
						{ name: "Browse All", href: "#" },
					],
				},
				{
					id: "guitar-accessories",
					name: "Accessories",
					items: [
						{ name: "Strings", href: "#" },
						{ name: "Picks", href: "#" },
						{ name: "Capos", href: "#" },
						{ name: "Straps", href: "#" },
						{ name: "Tuners", href: "#" },
						{ name: "Cases", href: "#" },
						{ name: "Stands & Hangers", href: "#" },
						{ name: "Cables", href: "#" },
						{ name: "Pickups", href: "#" },
						{ name: "Effects Pedals", href: "#" },
						{ name: "Amplifiers", href: "#" },
						{ name: "Guitar Maintenance", href: "#" },
					],
				},
				{
					id: "brands",
					name: "Brands",
					items: [
						{ name: "Fender", href: "#" },
						{ name: "Gibson", href: "#" },
						{ name: "Ibanez", href: "#" },
						{ name: "PRS", href: "#" },
						{ name: "Taylor", href: "#" },
						{ name: "Martin", href: "#" },
						{ name: "Yamaha", href: "#" },
						{ name: "Epiphone", href: "#" },
						{ name: "Rickenbacker", href: "#" },
						{ name: "Jackson", href: "#" },
						{ name: "ESP", href: "#" },
						{ name: "Schecter", href: "#" },
					],
				},
			],
		},
		{
			id: "percussion",
			name: "Percussion",
			featured: [
				{
					name: "Drum Sets",
					href: "#",
					imageSrc: "https://picsum.photos/300/200",
					imageAlt: "Full drum set for beginners and professionals.",
				},
				{
					name: "Cymbals",
					href: "#",
					imageSrc: "https://picsum.photos/300/200",
					imageAlt: "Variety of cymbals.",
				},
			],
			sections: [
				{
					id: "drums",
					name: "Drums",
					items: [
						{ name: "Acoustic Drum Sets", href: "#" },
						{ name: "Electronic Drum Sets", href: "#" },
						{ name: "Snare Drums", href: "#" },
						{ name: "Tom-Toms", href: "#" },
						{ name: "Bass Drums", href: "#" },
						{ name: "Junior Drum Sets", href: "#" },
						{ name: "World Percussion", href: "#" },
						{ name: "Browse All", href: "#" },
					],
				},
				{
					id: "cymbals",
					name: "Cymbals",
					items: [
						{ name: "Crash Cymbals", href: "#" },
						{ name: "Ride Cymbals", href: "#" },
						{ name: "Hi-Hat Cymbals", href: "#" },
						{ name: "Splash Cymbals", href: "#" },
						{ name: "China Cymbals", href: "#" },
						{ name: "Cymbal Sets", href: "#" },
						{ name: "Browse All", href: "#" },
					],
				},
				{
					id: "percussion-accessories",
					name: "Accessories",
					items: [
						{ name: "Drumsticks", href: "#" },
						{ name: "Drum Heads", href: "#" },
						{ name: "Thrones", href: "#" },
						{ name: "Drum Hardware", href: "#" },
						{ name: "Drum Cases & Bags", href: "#" },
						{ name: "Percussion Stands", href: "#" },
						{ name: "Drum Rugs", href: "#" },
						{ name: "Practice Pads", href: "#" },
						{ name: "Drum Mics", href: "#" },
						{ name: "Browse All", href: "#" },
					],
				},
				{
					id: "percussion-brands",
					name: "Brands",
					items: [
						{ name: "Pearl", href: "#" },
						{ name: "Tama", href: "#" },
						{ name: "DW", href: "#" },
						{ name: "Ludwig", href: "#" },
						{ name: "Yamaha", href: "#" },
						{ name: "Roland", href: "#" },
						{ name: "Zildjian", href: "#" },
						{ name: "Sabian", href: "#" },
						{ name: "Meinl", href: "#" },
						{ name: "Vic Firth", href: "#" },
						{ name: "Browse All", href: "#" },
					],
				},
			],
		},
		{
			id: "keyboards",
			name: "Keyboards",
			featured: [
				{
					name: "Digital Pianos",
					href: "#",
					imageSrc: "https://picsum.photos/300/200",
					imageAlt: "Advanced digital pianos for professional use.",
				},
				{
					name: "MIDI Controllers",
					href: "#",
					imageSrc: "https://picsum.photos/300/200",
					imageAlt: "Various MIDI controllers for music production.",
				},
			],
			sections: [
				{
					id: "digital-pianos",
					name: "Digital Pianos",
					items: [
						{ name: "Stage Pianos", href: "#" },
						{ name: "Console Pianos", href: "#" },
						{ name: "Portable Pianos", href: "#" },
						{ name: "Grand Pianos", href: "#" },
						{ name: "Upright Pianos", href: "#" },
						{ name: "Browse All", href: "#" },
					],
				},
				{
					id: "synthesizers",
					name: "Synthesizers",
					items: [
						{ name: "Analog Synths", href: "#" },
						{ name: "Digital Synths", href: "#" },
						{ name: "Modular Synths", href: "#" },
						{ name: "Keyboard Workstations", href: "#" },
						{ name: "Grooveboxes", href: "#" },
						{ name: "Synth Accessories", href: "#" },
						{ name: "Browse All", href: "#" },
					],
				},
				{
					id: "midi-controllers",
					name: "MIDI Controllers",
					items: [
						{ name: "Keyboard Controllers", href: "#" },
						{ name: "Pad Controllers", href: "#" },
						{ name: "Control Surfaces", href: "#" },
						{ name: "Drum Controllers", href: "#" },
						{ name: "Browse All", href: "#" },
					],
				},
				{
					id: "keyboard-accessories",
					name: "Accessories",
					items: [
						{ name: "Stands", href: "#" },
						{ name: "Benchs", href: "#" },
						{ name: "Pedals", href: "#" },
						{ name: "Cases", href: "#" },
						{ name: "Headphones", href: "#" },
						{ name: "Cables", href: "#" },
						{ name: "Power Supplies", href: "#" },
						{ name: "Browse All", href: "#" },
					],
				},
				{
					id: "keyboard-brands",
					name: "Brands",
					items: [
						{ name: "Yamaha", href: "#" },
						{ name: "Roland", href: "#" },
						{ name: "Korg", href: "#" },
						{ name: "Nord", href: "#" },
						{ name: "Casio", href: "#" },
						{ name: "Moog", href: "#" },
						{ name: "Akai", href: "#" },
						{ name: "Arturia", href: "#" },
						{ name: "Browse All", href: "#" },
					],
				},
			],
		},
		// ... other categories
	],
};

const filters = [
	{
		id: "category",
		name: "Category",
		options: [
			{ value: "electric-guitars", label: "Electric Guitars" },
			{ value: "acoustic-guitars", label: "Acoustic Guitars" },
			{ value: "bass-guitars", label: "Bass Guitars" },
			{ value: "drum-sets", label: "Drum Sets" },
			{ value: "cymbals", label: "Cymbals" },
			{ value: "digital-pianos", label: "Digital Pianos" },
			{ value: "synthesizers", label: "Synthesizers" },
			{ value: "midi-controllers", label: "MIDI Controllers" },
			{ value: "audio-equipment", label: "Audio Equipment" },
			{ value: "accessories", label: "Accessories" },
		],
	},
	{
		id: "color",
		name: "Color",
		options: [
			{ value: "black", label: "Black" },
			{ value: "red", label: "Red" },
			{ value: "blue", label: "Blue" },
			{ value: "white", label: "White" },
			{ value: "natural", label: "Natural" },
			{ value: "sunburst", label: "Sunburst" },
			{ value: "green", label: "Green" },
			{ value: "yellow", label: "Yellow" },
			{ value: "silver", label: "Silver" },
			{ value: "gold", label: "Gold" },
		],
	},
	{
		id: "brand",
		name: "Brand",
		options: [
			{ value: "fender", label: "Fender" },
			{ value: "gibson", label: "Gibson" },
			{ value: "yamaha", label: "Yamaha" },
			{ value: "roland", label: "Roland" },
			{ value: "korg", label: "Korg" },
			{ value: "prs", label: "PRS" },
			{ value: "martin", label: "Martin" },
			{ value: "taylor", label: "Taylor" },
			{ value: "shure", label: "Shure" },
			{ value: "sennheiser", label: "Sennheiser" },
		],
	},
	{
		id: "price-range",
		name: "Price Range",
		options: [
			{ value: "under-100", label: "Under $100" },
			{ value: "100-500", label: "$100 to $500" },
			{ value: "500-1000", label: "$500 to $1,000" },
			{ value: "1000-2000", label: "$1,000 to $2,000" },
			{ value: "over-2000", label: "Over $2,000" },
		],
	},
	{
		id: "size",
		name: "Size",
		options: [
			{ value: "small", label: "Small" },
			{ value: "medium", label: "Medium" },
			{ value: "large", label: "Large" },
			{ value: "full-size", label: "Full Size" },
			{ value: "compact", label: "Compact" },
		],
	},
];

const products = [
	{
		id: 1,
		name: "Fender Stratocaster",
		href: "#",
		price: "$699",
		description: "The classic Fender Stratocaster, perfect for all levels of players.",
		options: "Available in various colors",
		imageSrc: [
			"/assets/strat1.png",
			"/assets/strat2.png",
			"/assets/strat3.png",
			"/assets/strat4.png",
			"/assets/strat5.png",
			"/assets/strat6.png",
			"/assets/strat7.png",
		],
		imageAlt: "Fender Stratocaster in sunburst color.",
	},
	{
		id: 2,
		name: "Yamaha Stage Custom Drum Set",
		href: "#",
		price: "$999",
		description: "Complete drum set with high-quality Yamaha sound, suitable for both beginners and professionals.",
		options: "Various configurations",
		imageSrc: [
			"/assets/yamaha1.png",
			"/assets/yamaha2.png",
			"/assets/yamaha3.png",
			"/assets/yamaha4.png",
			"/assets/yamaha5.png",
			"/assets/yamaha6.png",
			"/assets/yamaha7.png",
		],
		imageAlt: "Yamaha Stage Custom Drum Set in natural wood finish.",
	},
	{
		id: 3,
		name: "Gibson Les Paul Standard",
		href: "#",
		price: "$2,499",
		description: "Iconic Gibson Les Paul Standard, renowned for its rich tone and sustain.",
		options: "Multiple finishes available",
		imageSrc: [
			"/assets/gibson1.png",
			"/assets/gibson2.png",
			"/assets/gibson3.png",
			"/assets/gibson4.png",
			"/assets/gibson5.png",
			"/assets/gibson6.png",
			"/assets/gibson7.png",
		],
		imageAlt: "Gibson Les Paul Standard in cherry sunburst.",
	},
	{
		id: 4,
		name: "Roland TD-17KVX Electronic Drum Set",
		href: "#",
		price: "$1,599",
		description: "Top-of-the-line electronic drum set with a realistic playing feel.",
		options: "Advanced features",
		imageSrc: ["/assets/roland1.png", "/assets/roland2.png", "/assets/roland3.png", "/assets/roland4.png"],
		imageAlt: "Roland TD-17KVX Electronic Drum Set.",
	},
	{
		id: 5,
		name: "Korg B2 Digital Piano",
		href: "#",
		price: "$450",
		description: "Versatile digital piano with natural weighted keys and rich sounds.",
		options: "Includes music rest and pedal",
		imageSrc: [
			"/assets/korg1.png",
			"/assets/korg2.png",
			"/assets/korg3.png",
			"/assets/korg4.png",
			"/assets/korg5.png",
			"/assets/korg6.png",
			"/assets/korg7.png",
		],
		imageAlt: "Korg B2 Digital Piano in black.",
	},
	{
		id: 6,
		name: "Shure SM58 Microphone",
		href: "#",
		price: "$99",
		description: "Legendary Shure SM58 dynamic vocal microphone, known for its durability and clarity.",
		options: "Standard model",
		imageSrc: [
			"/assets/shure1.png",
			"/assets/shure2.png",
			"/assets/shure3.png",
			"/assets/shure4.png",
			"/assets/shure5.png",
		],
		imageAlt: "Shure SM58 Microphone.",
	},
	{
		id: 7,
		name: "Martin D-28 Acoustic Guitar",
		href: "#",
		price: "$2,899",
		description: "Classic Martin D-28 acoustic guitar with exceptional sound quality.",
		options: "Standard model",
		imageSrc: [
			"/assets/martin1.png",
			"/assets/martin2.png",
			"/assets/martin3.png",
			"/assets/martin4.png",
			"/assets/martin5.png",
			"/assets/martin6.png",
			"/assets/martin7.png",
		],
		imageAlt: "Martin D-28 Acoustic Guitar.",
	},
	{
		id: 8,
		name: "Moog Subsequent 25 Synthesizer",
		href: "#",
		price: "$849",
		description: "Compact analog synthesizer with powerful bass and dynamic sound shaping.",
		options: "Analog circuits",
		imageSrc: [
			"/assets/moog1.png",
			"/assets/moog2.png",
			"/assets/moog3.png",
			"/assets/moog4.png",
			"/assets/moog5.png",
			"/assets/moog6.png",
		],
		imageAlt: "Moog Subsequent 25 Synthesizer.",
	},
	{
		id: 9,
		name: "Pioneer DJ DDJ-400 Controller",
		href: "#",
		price: "$249",
		description: "Beginner-friendly DJ controller for learning to mix and scratch.",
		options: "Rekordbox DJ software included",
		imageSrc: [
			"/assets/pioneer1.png",
			"/assets/pioneer2.png",
			"/assets/pioneer3.png",
			"/assets/pioneer4.png",
			"/assets/pioneer5.png",
			"/assets/pioneer6.png",
		],
		imageAlt: "Pioneer DJ DDJ-400 Controller.",
	},
	{
		id: 10,
		name: "Bose L1 Compact Portable PA System",
		href: "#",
		price: "$999",
		description: "Portable and easy-to-use PA system with Bose's spatial dispersion loudspeaker technology.",
		options: "Integrated mixer",
		imageSrc: [
			"/assets/bose1.png",
			"/assets/bose2.png",
			"/assets/bose3.png",
			"/assets/bose4.png",
			"/assets/bose5.png",
			"/assets/bose6.png",
		],
		imageAlt: "Bose L1 Compact Portable PA System.",
	},
	{
		id: 11,
		name: "Akai Professional MPK Mini Mk3",
		href: "#",
		price: "$119",
		description: "Compact 25-key USB MIDI keyboard controller with drum pads for versatile music production.",
		options: "Includes software bundle",
		imageSrc: [
			"/assets/akai1.png",
			"/assets/akai2.png",
			"/assets/akai3.png",
			"/assets/akai4.png",
			"/assets/akai5.png",
			"/assets/akai6.png",
		],
		imageAlt: "Akai Professional MPK Mini Mk3.",
	},
	{
		id: 12,
		name: "Audio-Technica ATH-M50x Studio Monitor Headphones",
		href: "#",
		price: "$149",
		description: "Professional-grade studio monitor headphones known for their exceptional clarity and comfort.",
		options: "Available in multiple colors",
		imageSrc: [
			"/assets/audio-technica1.png",
			"/assets/audio-technica2.png",
			"/assets/audio-technica3.png",
			"/assets/audio-technica4.png",
			"/assets/audio-technica5.png",
			"/assets/audio-technica6.png",
		],
		imageAlt: "Audio-Technica ATH-M50x Headphones.",
	},
];

function classNames(...classes: Array<string | boolean | undefined>) {
	return classes.filter(Boolean).join(" ");
}

export default function Marketplace() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
	const [itemCount, setItemCount] = useState(0);
	const [itemsInBag, setItemsInBag] = useState([]);

	return (
		<div className="bg-white">
			<div>
				{/* Mobile menu */}
				<Transition.Root show={mobileMenuOpen} as={Fragment}>
					<Dialog as="div" className="relative z-40 lg:hidden" onClose={setMobileMenuOpen}>
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
											className="relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
											onClick={() => setMobileMenuOpen(false)}
										>
											<span className="absolute -inset-0.5" />
											<span className="sr-only">Close menu</span>
											<XMarkIcon className="h-6 w-6" aria-hidden="true" />
										</button>
									</div>

									{/* Links */}
									<Tab.Group as="div" className="mt-2">
										<div className="border-b border-gray-200"></div>
										<Tab.Panels as={Fragment}>
											{navigation.categories.map((category) => (
												<Tab.Panel key={category.name} className="space-y-10 px-4 pb-8 pt-10">
													<div className="grid grid-cols-2 gap-x-4">
														{category.featured.map((item) => (
															<div key={item.name} className="group relative text-sm">
																<div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
																	<NextImage
																		src={item.imageSrc}
																		alt={item.imageAlt}
																		className="object-cover object-center"
																		height={86}
																		width={128}
																	/>
																</div>
																<Link href={item.href} className="mt-6 block font-medium text-gray-900">
																	<span className="absolute inset-0 z-10" aria-hidden="true" />
																	{item.name}
																</Link>
																<p aria-hidden="true" className="mt-1">
																	Shop now
																</p>
															</div>
														))}
													</div>
													{category.sections.map((section) => (
														<div key={section.name}>
															<p
																id={`${category.id}-${section.id}-heading-mobile`}
																className="font-medium text-gray-900"
															>
																{section.name}
															</p>
															<ul
																role="list"
																aria-labelledby={`${category.id}-${section.id}-heading-mobile`}
																className="mt-6 flex flex-col space-y-6"
															>
																{section.items.map((item) => (
																	<li key={item.name} className="flow-root">
																		<Link href={item.href} className="-m-2 block p-2 text-gray-500">
																			{item.name}
																		</Link>
																	</li>
																))}
															</ul>
														</div>
													))}
												</Tab.Panel>
											))}
										</Tab.Panels>
									</Tab.Group>

									<div className="border-t border-gray-200 px-4 py-6">
										<Link href="#" className="-m-2 flex items-center p-2">
											<NextImage
												src="https://tailwindui.com/img/flags/flag-united-states.svg"
												alt="US Flag"
												height={15}
												width={20}
												className="block h-auto w-5 flex-shrink-0"
											/>
											<span className="ml-3 block text-base font-medium text-gray-900">USD</span>
											<span className="sr-only">, change currency</span>
										</Link>
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
							<div className="flex h-16 items-center">
								<button
									type="button"
									className="relative rounded-md bg-white p-2 text-gray-400 lg:hidden"
									onClick={() => setMobileMenuOpen(true)}
								>
									<span className="absolute -inset-0.5" />
									<span className="sr-only">Open menu</span>
									<Bars3Icon className="h-6 w-6" aria-hidden="true" />
								</button>
								{/* Flyout menus */}
								<Popover.Group className="hidden lg:ml-8 lg:block lg:self-stretch">
									<div className="flex h-full space-x-8">
										{navigation.categories.map((category) => (
											<Popover key={category.name} className="flex">
												{({ open }) => (
													<>
														<div className="relative flex">
															<Popover.Button
																className={classNames(
																	open
																		? "border-indigo-600 text-indigo-600"
																		: "border-transparent text-gray-700 hover:text-gray-800",
																	"relative z-10 -mb-px flex items-center border-b-2 pt-px text-sm font-medium transition-colors duration-200 ease-out"
																)}
															>
																{category.name}
															</Popover.Button>
														</div>

														<Transition
															as={Fragment}
															enter="transition ease-out duration-200"
															enterFrom="opacity-0"
															enterTo="opacity-100"
															leave="transition ease-in duration-150"
															leaveFrom="opacity-100"
															leaveTo="opacity-0"
														>
															<Popover.Panel className="absolute inset-x-0 top-full z-10 text-sm text-gray-500">
																{/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
																<div className="absolute inset-0 top-1/2 bg-white shadow" aria-hidden="true" />

																<div className="relative bg-white">
																	<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
																		<div className="grid grid-cols-2 gap-x-8 gap-y-10 py-16">
																			<div className="col-start-2 grid grid-cols-2 gap-x-8">
																				{category.featured.map((item) => (
																					<div key={item.name} className="group relative text-base sm:text-sm">
																						<div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
																							<NextImage
																								src={item.imageSrc}
																								alt={item.imageAlt}
																								className="object-cover object-center"
																								height={163}
																								width={244}
																							/>
																						</div>
																						<Link href={item.href} className="mt-6 block font-medium text-gray-900">
																							<span className="absolute inset-0 z-10" aria-hidden="true" />
																							{item.name}
																						</Link>
																						<p aria-hidden="true" className="mt-1">
																							Shop now
																						</p>
																					</div>
																				))}
																			</div>
																			<div className="row-start-1 grid grid-cols-3 gap-x-8 gap-y-10 text-sm">
																				{category.sections.map((section) => (
																					<div key={section.name}>
																						<p id={`${section.name}-heading`} className="font-medium text-gray-900">
																							{section.name}
																						</p>
																						<ul
																							role="list"
																							aria-labelledby={`${section.name}-heading`}
																							className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
																						>
																							{section.items.map((item) => (
																								<li key={item.name} className="flex">
																									<Link href={item.href} className="hover:text-gray-800">
																										{item.name}
																									</Link>
																								</li>
																							))}
																						</ul>
																					</div>
																				))}
																			</div>
																		</div>
																	</div>
																</div>
															</Popover.Panel>
														</Transition>
													</>
												)}
											</Popover>
										))}
									</div>
								</Popover.Group>

								<div className="ml-auto flex items-center">
									<div className="hidden lg:ml-8 lg:flex">
										<Link href="#" className="flex items-center text-gray-700 hover:text-gray-800">
											<NextImage
												src="https://tailwindui.com/img/flags/flag-united-states.svg"
												alt="US Flag"
												height={15}
												width={20}
												className="block h-auto w-5 flex-shrink-0"
											/>
											<span className="ml-3 block text-sm font-medium">USD</span>
											<span className="sr-only">, change currency</span>
										</Link>
									</div>

									{/* Search */}
									<div className="flex lg:ml-6">
										<Link href="#" className="p-2 text-gray-400 hover:text-gray-500">
											<span className="sr-only">Search</span>
											<MagnifyingGlassIcon className="h-6 w-6" aria-hidden="true" />
										</Link>
									</div>

									{/* Cart */}
									<div className="ml-4 flow-root lg:ml-6">
										<Link href="/marketplace/cart" className="group -m-2 flex items-center p-2">
											<ShoppingBagIcon
												className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
												aria-hidden="true"
											/>
											<span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
												{itemsInBag.length === 0 ? "" : itemsInBag.length}
											</span>
											<span className="sr-only">items in cart, view bag</span>
										</Link>
									</div>
								</div>
							</div>
						</div>
					</nav>
				</header>
			</div>

			<div>
				{/* Mobile filter dialog */}
				<Transition.Root show={mobileFiltersOpen} as={Fragment}>
					<Dialog as="div" className="relative z-40 lg:hidden" onClose={setMobileFiltersOpen}>
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
								enterFrom="translate-x-full"
								enterTo="translate-x-0"
								leave="transition ease-in-out duration-300 transform"
								leaveFrom="translate-x-0"
								leaveTo="translate-x-full"
							>
								<Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-6 shadow-xl">
									<div className="flex items-center justify-between px-4">
										<h2 className="text-lg font-medium text-gray-900">Filters</h2>
										<button
											type="button"
											className="relative -mr-2 flex h-10 w-10 items-center justify-center p-2 text-gray-400 hover:text-gray-500"
											onClick={() => setMobileFiltersOpen(false)}
										>
											<span className="absolute -inset-0.5" />
											<span className="sr-only">Close menu</span>
											<XMarkIcon className="h-6 w-6" aria-hidden="true" />
										</button>
									</div>

									{/* Filters */}
									<form className="mt-4">
										{filters.map((section) => (
											<Disclosure as="div" key={section.name} className="border-t border-gray-200 pb-4 pt-4">
												{({ open }) => (
													<fieldset>
														<legend className="w-full px-2">
															<Disclosure.Button className="flex w-full items-center justify-between p-2 text-gray-400 hover:text-gray-500">
																<span className="text-sm font-medium text-gray-900">{section.name}</span>
																<span className="ml-6 flex h-7 items-center">
																	<ChevronDownIcon
																		className={classNames(open ? "-rotate-180" : "rotate-0", "h-5 w-5 transform")}
																		aria-hidden="true"
																	/>
																</span>
															</Disclosure.Button>
														</legend>
														<Disclosure.Panel className="px-4 pb-2 pt-4">
															<div className="space-y-6">
																{section.options.map((option, optionIdx) => (
																	<div key={option.value} className="flex items-center">
																		<input
																			id={`${section.id}-${optionIdx}-mobile`}
																			name={`${section.id}[]`}
																			defaultValue={option.value}
																			type="checkbox"
																			className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
																		/>
																		<label
																			htmlFor={`${section.id}-${optionIdx}-mobile`}
																			className="ml-3 text-sm text-gray-500"
																		>
																			{option.label}
																		</label>
																	</div>
																))}
															</div>
														</Disclosure.Panel>
													</fieldset>
												)}
											</Disclosure>
										))}
									</form>
								</Dialog.Panel>
							</Transition.Child>
						</div>
					</Dialog>
				</Transition.Root>

				<main className="mx-auto max-w-2xl px-4 lg:max-w-7xl lg:px-8">
					<div className="border-b border-gray-200 py-10">
						<h1 className="text-4xl font-bold tracking-tight text-gray-900">New Arrivals</h1>
						<p className="mt-4 text-base text-gray-500">Checkout out the latest Signature Gibsons!</p>
					</div>

					<div className="pb-24 pt-12 lg:grid lg:grid-cols-3 lg:gap-x-8 xl:grid-cols-4">
						<aside>
							<h2 className="sr-only">Filters</h2>

							<button
								type="button"
								className="inline-flex items-center lg:hidden"
								onClick={() => setMobileFiltersOpen(true)}
							>
								<span className="text-sm font-medium text-gray-700">Filters</span>
								<PlusIcon className="ml-1 h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
							</button>

							<div className="hidden lg:block">
								<form className="space-y-10 divide-y divide-gray-200">
									{filters.map((section, sectionIdx) => (
										<div key={section.name} className={sectionIdx === 0 ? "" : "pt-10"}>
											<fieldset>
												<legend className="block text-sm font-medium text-gray-900">{section.name}</legend>
												<div className="space-y-3 pt-6">
													{section.options.map((option, optionIdx) => (
														<div key={option.value} className="flex items-center">
															<input
																id={`${section.id}-${optionIdx}`}
																name={`${section.id}[]`}
																defaultValue={option.value}
																type="checkbox"
																className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
															/>
															<label htmlFor={`${section.id}-${optionIdx}`} className="ml-3 text-sm text-gray-600">
																{option.label}
															</label>
														</div>
													))}
												</div>
											</fieldset>
										</div>
									))}
								</form>
							</div>
						</aside>

						<section aria-labelledby="product-heading" className="mt-6 lg:col-span-2 lg:mt-0 xl:col-span-3">
							<h2 id="product-heading" className="sr-only">
								Products
							</h2>

							<div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:gap-x-8 xl:grid-cols-3">
								{products.map((product) => (
									<div
										key={product.id}
										className="relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white"
									>
										<Link href={`/marketplace/item/`}>
											<div className="group pb-4">
												<div className="aspect-h-4 aspect-w-3 bg-white group-hover:opacity-75 group-hover:cursor-pointer sm:aspect-none sm:h-96">
													<NextImage
														src={product.imageSrc[0]}
														alt={product.imageAlt}
														className="h-full w-full object-contain object-center sm:h-full sm:w-full"
														height={384}
														width={335}
													/>
												</div>
												<div className="flex flex-1 flex-col space-y-2 p-4 pb-0 group-hover:cursor-pointer">
													<h3 className="text-sm font-medium text-gray-900">
														{product.name}
														{/* <span aria-hidden="true" className="absolute inset-0" /> */}
													</h3>
													<p className="text-sm text-gray-500">{product.description}</p>
												</div>
											</div>
										</Link>

										<div className="flex flex-1 flex-col justify-end space-y-2 px-4 pb-4">
											<p className="text-sm italic text-gray-500">{product.options}</p>
											<div className="flex flex-row justify-between">
												<p className="text-base font-medium text-gray-900">{product.price}</p>
												<button className="hover:opacity-75">
													<ShoppingBagIcon
														className="h-6 w-6 flex-shrink-0 text-gray-400 "
														aria-hidden="true"
														onClick={() => setItemsInBag([...itemsInBag, product] as typeof itemsInBag)}
													/>
													{itemCount >= 1 && itemCount < 10 && (
														<span className="text-[9px] absolute bottom-[18px] right-[25px] font-bold text-gray-700">
															{itemCount}
														</span>
													)}
													{itemCount >= 10 && (
														<span className="text-[9px] absolute bottom-[18px] right-[21px] font-bold text-gray-700">
															{"9+"}
														</span>
													)}
												</button>
											</div>
										</div>
									</div>
								))}
							</div>
						</section>
					</div>
				</main>
			</div>
		</div>
	);
}
