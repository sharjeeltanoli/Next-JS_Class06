import Image from "next/image"
import AltoPic from "../images/bgalto.png"
const Alto = () => {
  return (
    <div className="justify-items-center pt-8 ">
        <Image src={AltoPic} alt="Alto Car"/>

        <div className=" justify-items-center" >
    <ul className="flex space-x-12">
    <li> Number of Doors: 4 </li>
    <li> Engine: 900cc </li>
    <li> Avg: 16 Km/Ltr </li>
    </ul>
    <br/>
    <p className="w-2/3">The Suzuki Alto is a kei car produced by Suzuki since 1979. The model, currently in its ninth generation, was first introduced in 1979 and has been built in many countries worldwide. The Alto originated as a commercial vehicle derivative of the Fronte, but over time the Alto nameplate gained in popularity and by 1988 it replaced the Fronte name completely. The Alto badge has often been used on different cars in Japan and in export markets, where it is considered a city car.</p>

    <h3 className="text-green-600 text-lg py-6"> PKR 3,000,000 </h3>
    <form action="../forms">
    <button type="submit" className="border text-white border-green-900 px-2 rounded-md bg-blue-400 "> Buy Now </button>
    </form>
    <br/><br/><br/>
     </div>


    </div>
  )
}

export default Alto