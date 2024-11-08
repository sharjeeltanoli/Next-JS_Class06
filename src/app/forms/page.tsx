import Thanks from "../thanks/page"

const Forms = () => {
  return (
    <div  className="justify-items-center">
      <br/>
      <h2 className="font-semibold">Enter Your Details</h2>
     <form action="../thanks" className="space-y-2">

<input type="text" id="fullname" name="fullname" placeholder="Full Name" className="border-2 border-blue-200 rounded-md"></input> <br/>
<input type="email" id="email" name="email" placeholder="Email" className="border-2 border-blue-200 rounded-md"></input> <br/>
<input type="text" id="address" name="address" placeholder="Address" className="border-2 border-blue-200 rounded-md"></input> <br/>
<input type="number" id="callno" name="callno" placeholder="Contact Number" className="border-2 border-blue-200 rounded-md"></input> <br/>
<input type="text" id="payment" name="payment" placeholder="Debit Card Number" className="border-2 border-blue-200 rounded-md"></input> <br/>
<select id="city" name="city" className="border-2 border-blue-200 rounded-md">
            <option value="">Select your City</option>
            <option value="abbottabad">Abbotabad</option> 
            <option value="hyderabad">Hyderabad</option>
            <option value="islamabad">Islamabad</option> 
            <option value="karachi">Karachi</option>
            <option value="lahore">Lahore</option>
            <option value="multan">Multan</option> 
            <option value="quetta">Quetta</option>
            <option value="rawalpindi">Rawalpindi</option>
            <option value="other">Other</option>
        </select>
      <br/>
      <br/>
        <button type="submit" className="border text-white border-green-900 px-2 rounded-md bg-blue-400 "> Place Your Order </button>
      
      </form> 
      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>




    </div>
  )
}

export default Forms