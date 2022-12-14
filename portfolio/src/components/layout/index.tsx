import type { PropsWithChildren } from "react"
import Header from "../header"
import Footer from "../footer"

const Layout = (props: PropsWithChildren) => {
	const something = null

	return (
		<div className="flex flex-col min-h-screen bg-black text-white">
			<Header />
			<div className="h-full">{props.children}</div>
			<Footer />
		</div>
	)
}
export default Layout
