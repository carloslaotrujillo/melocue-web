import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/20/solid";
import NextImage from "../_components/NextImage/NextImage";

const page = {
	name: "Charles La O",
	email: "charleslaot@protonmail.com",
	avatar: "/avatar.jpg",
	backgroundImage:
		"https://images.unsplash.com/photo-1444628838545-ac4016a5418a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
	fields: [
		["Phone", "+1 (239) 878-7268"],
		["Email", "charleslaot@protonmail.com"],
		["Title", "Senior Fullstack Developer"],
		["Team", "Product Development"],
		["Location", "Florida"],
		["Sits", "Oasis, 4th floor"],
		["Salary", "$150,000"],
		["Birthday", "August 9, 1990"],
	],
};

export default function ProfilePage() {
	return (
		<div>
			<div>
				<NextImage
					className="h-32 w-full object-cover lg:h-48"
					src={page.backgroundImage}
					alt=""
					width={1920}
					height={1080}
				/>
			</div>
			<div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
				<div className="-mt-12 sm:-mt-16 sm:flex sm:items-end sm:space-x-5">
					<div className="flex">
						<NextImage
							className="h-24 w-24 rounded-full ring-4 ring-white sm:h-32 sm:w-32"
							src={page.avatar}
							alt=""
							width={128}
							height={128}
						/>
					</div>
					<div className="mt-6 sm:flex sm:min-w-0 sm:flex-1 sm:items-center sm:justify-end sm:space-x-6 sm:pb-1">
						<div className="mt-6 min-w-0 flex-1 sm:hidden md:block">
							<h1 className="truncate text-2xl font-bold text-gray-900">{page.name}</h1>
						</div>
						<div className="mt-6 flex flex-col justify-stretch space-y-3 sm:flex-row sm:space-x-4 sm:space-y-0">
							<button
								type="button"
								className="inline-flex justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
							>
								<EnvelopeIcon className="-ml-0.5 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
								<span>Message</span>
							</button>
							<button
								type="button"
								className="inline-flex justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
							>
								<PhoneIcon className="-ml-0.5 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
								<span>Call</span>
							</button>
						</div>
					</div>
				</div>
				<div className="mt-6 hidden min-w-0 flex-1 sm:block md:hidden">
					<h1 className="truncate text-2xl font-bold text-gray-900">{page.name}</h1>
				</div>
			</div>
		</div>
	);
}
