import type { PropsWithChildren } from "react"
import Header from "../header"
import Footer from "../footer"

const Layout = (props: PropsWithChildren) => {
	const something = null

	return (
		<div className="flex flex-col min-h-screen">
			<Header />
			<div className="min-h-[calc(100vh-10rem)]">{props.children}</div>
			<Footer />
		</div>
	)
}
export default Layout
