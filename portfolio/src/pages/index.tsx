import { type NextPage } from "next"
import Link from "next/link"

const Home: NextPage = () => {
	return (
		<div className="flex flex-col bg-blue-400 w-full min-h-full justify-center items-center">
			<div className="font-extrabold text-5xl my-7">Hey my name is Arron!</div>
			<div className="font-extrabold text-5xl">This is my portfolio page</div>
			<Link
				href="/about-me"
				className="bg-pink-200 p-3 rounded-md flex justify-center items-center m-7 hover:bg-pink-700"
			>
				ClickMe
			</Link>
		</div>
	)
}

export default Home
