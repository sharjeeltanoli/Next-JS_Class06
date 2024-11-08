import Image from "next/image"
import CorollaPic from "../images/bgcorolla.png"
const Alto = () => {
  return (
    <div className="justify-items-center pt-8">
        <Image src={CorollaPic} alt="Alto Car"/>

        <div className=" justify-items-center" >
    <ul className="flex space-x-12">
    <li> Number of Doors: 4 </li>
    <li> Engine: 1800cc </li>
    
    <li> Avg: 10 Km/Ltr </li>
    </ul>
    <br/>
    <p className="w-2/3">
    The Toyota Corolla  is a series of compact cars (formerly subcompact) manufactured and marketed globally by the Japanese automaker Toyota Motor Corporation. Introduced in 1966, the Corolla was the best-selling car worldwide by 1974 and has been one of the best-selling cars in the world since then. In 1997, the Corolla became the best-selling nameplate in the world, surpassing the Volkswagen Beetle.[1] Toyota reached the milestone of 50 million Corollas sold over twelve generations in 2021.
</p>

    <h3 className="text-green-600 text-lg py-6"> PKR 4,000,000 </h3>
    <form action="../forms">
    <button type="submit" className="border text-white border-green-900 px-2 rounded-md bg-blue-400 "> Buy Now </button>
    </form>
    <br/><br/><br/>
     </div>

    </div>
  )
}

export default Alto