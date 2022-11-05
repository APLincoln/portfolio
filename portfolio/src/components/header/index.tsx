import DropDown from "../dropdown"
import Link from "next/link"

const Header = () => (
	<div className="flex h-20 shadow-md w-full justify-end items-center border-b-[1px] border-b-slate-600">
		<Link
			className="font-bold text-3xl mr-auto ml-4 lg:text-5xl lg:mx-auto cursor-pointer"
			href="/"
		>
			Arron Lincoln
		</Link>
		<DropDown />
	</div>
)

export default Header
