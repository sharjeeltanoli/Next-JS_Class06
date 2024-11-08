import Hero from "./components/Hero"
import Image from "next/image"
import Link from "next/link"
import Alto from "./images/alto.jpg"
import Civic from "./images/civic.jpg"
import City from "./images/city.jpg"
import Corolla from "./images/corolla.jpg"

const Home = () => {
  return (
    <div>
    <Hero/>

<h2 className="font-semibold text-xl">Featured New Cars</h2>
<div className="grid grid-cols-4 w-2/3 h-60 gap-6 mx-auto">

<Link href="./new-cars/suzuki-alto"> 
<div className="col-span-1 bg-white px-2">
<Image src={Alto} alt="Suzuki Alto Image" /> 
<h4 className="font-semibold text-blue-600">Suzuki Alto</h4>
PKR 3,000,000
<br/> Karachi
</div>
</Link>

<Link href="/new-cars/honda-civic"> 
<div className="col-span-1 bg-white px-2">
<Image src={Civic} alt="Honda Civic Image" />
<h4 className="font-semibold text-blue-600">Honda Civic</h4>
 PKR 6,000,000
<br/> Karachi
</div> 
</Link>

<Link href="/new-cars/honda-city"> 
<div className="col-span-1 bg-white px-2"> 
<Image src={City} alt="Honda City image" /> 
<h4 className="font-semibold text-blue-600">Honda City</h4>
 PKR 4,500,000
<br/> Karachi
</div>
</Link>

<Link href="/new-cars/toyota-corolla"> 
<div className="col-span-1 bg-white px-2">
<Image src={Corolla} alt="Toyota Corolla Image" /> 
<h4 className="font-semibold text-blue-600">Toyota Corolla</h4>
PKR 4,000,000
<br/> Karachi
</div>
</Link>

</div>


<br/><br/><br/><br/><br/><br/>
</div>
  )
}

export default Home