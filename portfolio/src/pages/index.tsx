import { type NextPage } from "next"
import Link from "next/link"

const Home: NextPage = () => {
	return (
		<div className="flex flex-col w-full h-full justify-center items-center text-center">
			<div className="font-bold text-5xl my-7">Hey my name is Arron!</div>
			<div className="font-bold text-5xl mb-7">This is my portfolio page</div>
		</div>
	)
}

export default Home
