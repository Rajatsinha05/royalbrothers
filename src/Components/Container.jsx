import React,{useState} from 'react'
import Services from './Services'
import './BikeCard.css'
import Datepicker from './Datepicker'
function Container() {

const [date, setDate] = useState(new Date())
console.log(date)

console.log();
const [time, setTime] = useState(new Date().toTimeString().substring(0, 5));
return (
    <div id="container_outer">
    
    <div>
{/* <Datepicker/> */}




<div>
  
<h2>Filter</h2>

<p>Price-Low to high</p>
<p>Price-High-to-low</p>
</div>

<div>
<p>Select date and Time</p>
{/* <input type="date" value="20"/> */}
<input
      type="date"
      min={new Date()}
      defaultValue={date.toISOString().substring(0, 10)}
      onChange={(e) => setDate(e.target.value)}
    />




  
    <input
      type="time"
      step="1800"
      min="08:00"
      max="18:00"
      defaultValue={time}
      onChange={(e) => setTime(e.target.value)}
    />
  

</div>

</div>






    <div id="parent_box">


    <Services/>

    </div>


    

    </div>
  )
}

export default Container