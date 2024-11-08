import Image from "next/image"
import CityPic from "../images/bgcity.png"
const City = () => {
  return (
    <div className="justify-items-center pt-8">
        <Image src={CityPic} alt="City Car" />
     <div className=" justify-items-center" >
    <ul className="flex space-x-12">
    <li> Number of Doors: 4 </li>
    <li> Engine: 1400cc </li>
    <li> Condition: 9/10  </li>
    <li> Driven: 16000 KM </li>
    <li> Avg: 11 Km/Ltr </li>
    </ul>

    <br/>
    <p className="w-2/3"> The Honda City is a subcompact car which has been produced by the Japanese manufacturer Honda since 1981.
        The City was originally a 3-door hatchback/2-door convertible for the Japanese, European and Australasian markets. The 3-door City was retired in 1994 after the second-generation and replaced by the Logo. The nameplate was revived in 1996 for use on a series of subcompact four-door sedans aimed primarily at developing markets, first mainly sold in Asia but later also in Latin America and Australia.
        </p>
<br/>
    <h3 className="text-green-600 text-lg py-6"> PKR 4,500,000 </h3>
   <form action="../forms">
    <button type="submit" className="border text-white border-green-900 px-2 rounded-md bg-blue-400 "> Buy Now </button>
    </form>
    <br/><br/><br/>
     </div>


    </div>
  )
}

export default City