import Image from "next/image"
import CivicPic from "../images/bgcivic.png"
const Civic = () => {
  return (
    <div className="justify-items-center pt-8">
        <Image src={CivicPic} alt="Civic Car" />

        <div className=" justify-items-center"  >
    <ul className="flex space-x-12">
    <li> Number of Doors: 4 </li>
    <li> Engine: 1900cc </li>
    <li> Avg: 12 Km/Ltr </li>
    </ul>
<br/>
    <p className="w-2/3">The Honda Civic, is a series of automobiles manufactured by Honda since 1972. As of 2023, the Civic is positioned between the Honda Fit/City and Honda Accord in Honda's global passenger car line-up 
    The first-generation Civic was introduced in July 1972 as a two-door fastback sedan,[2] followed by a three-door hatchback that September. With a 1,169 cc transverse engine and front-wheel drive, the car provided good interior space despite overall small dimensions.[3] Initially gaining a reputation for being fuel-efficient, reliable and environmentally friendly, later iterations have become known for performance and sportiness, especially the Civic Type R, Civic VTi, Civic GTi and Civic SiR/Si.</p>

    <h3 className="text-green-600 text-lg py-6"> PKR 6,000,000 </h3>
    <form action="../forms">
    <button type="submit" className="border text-white border-green-900 px-2 rounded-md bg-blue-400 "> Buy Now </button>
    </form>
    <br/><br/><br/>
     </div>



    </div>
  )
}

export default Civic