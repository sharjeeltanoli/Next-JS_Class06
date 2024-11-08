import Link from "next/link"
import Image from "next/image"
import In from "../images/linkedin.png"
import Git from "../images/github.png"
const Footer = () => {
  return (
    <footer >
      <div className="bg-blue-700 justify-items-center"> 
        <p className="text-white font-mono">Contact us on: sharjeeel3@gmail.com or Join Us:</p>
        <div className="flex text-white"> 
   <Link href="https://www.linkedin.com/in/muhammad-sharjeel-10591b254/">
   <Image src={In} alt="Linkin Logo" />
   </Link>
   <Link href="https://github.com/sharjeeltanoli/">
   <Image src={Git} alt="Linkin Logo" />
   </Link>
   </div>
   </div>
 
   </footer>
  )

}

export default Footer