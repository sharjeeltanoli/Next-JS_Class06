
const Hero = () => {
    return (
      <div className="bg-white h-52">
        <br/>
      <div className="grid grid-cols-2 w-2/3 justify-items-center border-2 rounded-md py-2  mx-auto">
        <div className="col-span-2 h-8">
          <h1 className="font-bold text-xl">Sell Your Car on GoodBuy Cars and Get the Best Price </h1> 
          </div>
        <div className="row-span-1 justify-items-center"> <h3 className="font-bold text-lg text-blue-500">Post your Ad</h3> 
        <ul className="justify-items-center">
            <li>Post your Ad for Free in Easy Steps</li>
            <li>Get Genuine offers from Verified Buyers</li>
            <li>Sell your car Fast at the Best Price</li>
            <li><button className="border text-white border-blue-900 px-2 rounded-lg bg-blue-400 ">Post your Ad</button>
            </li>
          </ul>
          
        </div>
        <div className="row-span-1 justify-items-center"> 
          <h3 className="font-bold text-lg text-blue-500">Sell It For Me</h3>
        <ul className="justify-items-center">
            <li>Dedicated Sales Expert to Sell your Car</li>
            <li>We Bargain for you and share the Best Offer</li>
            <li>We ensure Safe & Secure Transaction</li>
            <li><button className="border text-white border-blue-900 px-2 rounded-lg bg-blue-400 ">Register your Car</button>
            </li>
          </ul>
        </div>
        
        </div>
        
      </div>
  
    )
  
  }
  
  export default Hero
