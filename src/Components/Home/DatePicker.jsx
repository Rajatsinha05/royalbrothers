import React from 'react'
import './DatePicker.css'
import { Link } from 'react-router-dom';

export default function DatePicker() {

  const handleColor=()=>{
    document.querySelector(".date-picker-ab").style.color="black";
  }
  const handleColorDrop=()=>{
    document.querySelector(".drop-date-picker-ab").style.color="black";
  }

  const handleColorTime=()=>{
    let time=document.querySelector(".pickup-time-select-color-ab").value;
    if(time==''){
      document.querySelector(".pickup-time-select-color-ab").style.color="#bbb7b7";
    }
    else{
      document.querySelector(".pickup-time-select-color-ab").style.color="black";
    }
  }
  const handleColorTimeDrop=()=>{
    let time=document.querySelector(".drop-time-select-ab").value;
    if(time==''){
      document.querySelector(".drop-time-select-ab").style.color="#bbb7b7";
    }
    else{
      document.querySelector(".drop-time-select-ab").style.color="black";
    }
  }

  return (
    <div className='date-picker-section-ab'>
      <div className='date-picker-container-ab'>
        <div className='date-picker-heading-ab'>Search your next ride</div>
        <div className='date-picker-inp-head-ab'>Pickup</div>
        <div className='pickup-date-container-ab'>
          <div className='date-picker-inp-div-ab'>
            <input onChange={handleColor} className='date-picker-ab' type='date'></input>
          </div>
          <div className='pickup-time-select-div-ab'>
            <select onChange={handleColorTime} className='pickup-time-select-ab pickup-time-select-color-ab'>
              <option value="">Time</option>
              <option value="9:00">9:00 AM</option>
              <option value="9:30">9:30 AM</option>
              <option value="10:00">10:00 AM</option>
              <option value="10:30">10:30 AM</option>
              <option value="11:00">11:00 AM</option>
              <option value="11:00">11:30 AM</option>
              <option value="11:00">12:00 PM</option>
              <option value="12:30">12:30 PM</option>
              <option value="1:00">1:00 PM</option>
              <option value="1:30">1:30 PM</option>
              <option value="2:00">2:00 PM</option>
              <option value="2:30">2:30 PM</option>
              <option value="3:00">3:00 PM</option>
              <option value="3:30">3:30 PM</option>
              <option value="4:00">4:00 PM</option>
              <option value="4:30">4:30 PM</option>
              <option value="5:00">5:00 PM</option>
              <option value="5:30">5:30 PM</option>
              <option value="6:00">6:00 PM</option>
              <option value="6:30">6:30 PM</option>
              <option value="7:00">7:00 PM</option>
              <option value="7:30">7:30 PM</option>
            </select>
          </div>
        </div>
        <div className='date-picker-inp-head-ab'>Dropoff</div>
        <div className='pickup-date-container-ab'>
          <div className='date-picker-inp-div-ab'>
            <input onChange={handleColorDrop} className='date-picker-ab drop-date-picker-ab' type='date'></input>
          </div>
          <div className='pickup-time-select-div-ab'>
            <select onChange={handleColorTimeDrop} className='pickup-time-select-ab drop-time-select-ab'>
              <option value="">Time</option>
              <option value="9:00">9:00 AM</option>
              <option value="9:30">9:30 AM</option>
              <option value="10:00">10:00 AM</option>
              <option value="10:30">10:30 AM</option>
              <option value="11:00">11:00 AM</option>
              <option value="11:00">11:30 AM</option>
              <option value="11:00">12:00 PM</option>
              <option value="12:30">12:30 PM</option>
              <option value="1:00">1:00 PM</option>
              <option value="1:30">1:30 PM</option>
              <option value="2:00">2:00 PM</option>
              <option value="2:30">2:30 PM</option>
              <option value="3:00">3:00 PM</option>
              <option value="3:30">3:30 PM</option>
              <option value="4:00">4:00 PM</option>
              <option value="4:30">4:30 PM</option>
              <option value="5:00">5:00 PM</option>
              <option value="5:30">5:30 PM</option>
              <option value="6:00">6:00 PM</option>
              <option value="6:30">6:30 PM</option>
              <option value="7:00">7:00 PM</option>
              <option value="7:30">7:30 PM</option>
            </select>
          </div>
        </div>
        <div className='saerch-btn-div-ab'>

<Link to="/services">



          <button className='saerch-btn-ab'   >Search</button>

          </Link>
        </div>
      </div>
    </div>
  )
}
