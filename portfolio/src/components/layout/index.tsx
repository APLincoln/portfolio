import type { PropsWithChildren } from "react"
import { UserIcon } from "@heroicons/react/24/outline"

const Layout = (props: PropsWithChildren) => {
	const something = null

	return (
		<div className="flex flex-col min-h-screen">
			<div className="flex h-20 shadow-md w-full justify-center items-center bg-orange-300 ">
				header
			</div>
			<div>{props.children}</div>
			<div className="flex h-20 mt-auto justify-center items-center bg-orange-300">
				<div>some links here</div>
				<UserIcon className="h-10 w-10"></UserIcon>
				<div>some more links</div>
			</div>
		</div>
	)
}
export default Layout
