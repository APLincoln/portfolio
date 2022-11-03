import type { PropsWithChildren } from "react"
import { UserIcon } from "@heroicons/react/24/outline"
import DropDown from "../dropdown"

const Layout = (props: PropsWithChildren) => {
	const something = null
	const dropDownLinks: { link: string; title: string }[] = [
		{ link: "/about-me", title: "about me" },
		{ link: "/projects", title: "Projects" },
	]

	return (
		<div className="flex flex-col min-h-screen">
			<div className="flex h-20 shadow-md w-full justify-end items-center bg-orange-300 ">
				<DropDown />
			</div>
			<div className="min-h-[calc(100vh-10rem)]">{props.children}</div>
			<div className="flex h-20 justify-center items-center bg-orange-300 mt-auto">
				<div>some links here</div>
				<UserIcon className="h-10 w-10"></UserIcon>
				<div>some more links</div>
			</div>
		</div>
	)
}
export default Layout
