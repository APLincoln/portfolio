import DropDown from "../dropdown"
import Link from "next/link"

const Header = () => (
	<div className="flex h-20 shadow-md w-full justify-end items-center border-b-[1px] border-b-slate-600">
		<Link
			className="flex font-bold mr-auto text-3xl ml-4 lg:text-5xl lg:mx-auto cursor-pointer lg:ml-14 lg:w-full lg:justify-center"
			href="/"
		>
			Arron Lincoln
		</Link>
		<DropDown />
	</div>
)

export default Header
