import Link from "next/link"
import Logo from "@/app/car.png"
import Image from "next/image"
const Navbar = () => {
  return (
    
<header className="flex bg-blue-700 w-full h-16 items-center mx-auto justify-between px-6">
<div className=" flex w-36 items-center animate-pulse"> 

 <Image src={Logo} alt="GoodBuy Cars logo"/>
<Link href={"/"}><h1 className="font-bold text-lg"> GoodBuy Cars</h1></Link>

    </div>  
<ul className="flex space-x-8 text-white font-serif">
<li>    <Link href={"/"}>Home</Link>                </li>
<li>    <Link href={"/used-cars"}>Used Cars</Link>   </li>
<li>    <Link href={"/new-cars"}>New Cars</Link>     </li>
<li>    <Link href={"/bikes"}>Bikes</Link>           </li>
<li>    <Link href={"/videos"}>Videos</Link>         </li>
<li>    <Link href={"/forms"}>Forms</Link>           </li>
<li>    <Link href={"/more"}>More</Link>             </li>

</ul>
<button className="border text-white border-red-900 px-2 py-1 rounded-lg bg-red-600 ">Post an Ad</button>


</header>

  )
}

export default Navbar
