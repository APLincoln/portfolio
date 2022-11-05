import { useState } from "react"
import { Bars3Icon } from "@heroicons/react/24/outline"

const DropDown = () => {
	const [isDropped, setIsDropped] = useState(false)
	const dropDownLinks: { link: string; title: string }[] = [
		{ link: "/", title: "Home" },
		{ link: "/about-me", title: "About me" },
		{ link: "/projects", title: "Projects" },
	]

	return (
		<div className="mr-2">
			<button
				onClick={() => {
					setIsDropped(!isDropped)
				}}
			>
				<Bars3Icon className="h-10 w-10" />
			</button>
			<div
				className={`${
					isDropped ? "flex" : "hidden"
				} flex-col bg-slate-500 p-5 absolute right-0 w-screen rounded-md justify-center items-center`}
			>
				{dropDownLinks.map((obj) => (
					<a
						href={obj.link}
						key={obj.link}
						className="p-4 font-bold text-3xl cursor-pointer"
						onClick={() => {
							setIsDropped(false)
						}}
					>
						{obj.title}
					</a>
				))}
			</div>
		</div>
	)
}

export default DropDown
