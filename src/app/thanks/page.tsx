import Image from "next/image"
import greeting from "../images/thankyou.png"
const Thanks = () => {
  return (
    <div>

<Image src={greeting} alt="Thank you image" className="w-full"/>

    </div>
  )
}

export default Thanks