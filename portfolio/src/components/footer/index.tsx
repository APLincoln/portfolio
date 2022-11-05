import Image from "next/image"
import iconLinkedIn from "../../assets/linkedin.png"
import iconGit from "../../assets/github.png"

const Footer = () => (
	<div className="flex h-20 justify-evenly items-center bg-gray-800 mt-auto">
		<a href="https://www.linkedin.com/in/arron-lincoln-214494195/">
			<Image src={iconLinkedIn} alt="linkedin" height="40" width="40" />
		</a>
		<a href="https://github.com/APLincoln" className="bg-white rounded-full">
			<Image src={iconGit} alt="github" height="40" width="40" />
		</a>
	</div>
)

export default Footer
