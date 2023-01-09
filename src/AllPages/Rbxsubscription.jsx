import React from 'react'
import './Rbxsubscription.css'
import { Outlet, Link, NavLink } from 'react-router-dom';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import NavBar from '../Components/NavBar';

function Rbxsubscription() {

  const handleColor=()=>{
    document.querySelector(".date-picker-pk").style.color="black";
  }
  const handleColorTime=()=>{
    let time=document.querySelector(".pickup-time-select-pk").value;
    if(time==''){
      document.querySelector(".pickup-time-select-pk").style.color="#bbb7b7";
    }
    else{
      document.querySelector(".pickup-time-select-pk").style.color="black";
    }
  }

  const handleSubsSearch=()=>{
    let date=document.querySelector(".date-picker-pk").value;
    let time=document.querySelector(".pickup-time-select-pk").value;

    if(date==="" || time===""){
      alert("Please select date and time");
    }
    else{
      console.log(date,"&",time);
    }
    
  }

  const handleTabBtn1=()=>{
    document.querySelector("#tab1-button-pk").classList.add("active-tab-button-pk");
    document.querySelector("#tab2-button-pk").classList.remove("active-tab-button-pk");
    document.querySelector("#tab3-button-pk").classList.remove("active-tab-button-pk");
  }
  const handleTabBtn2=()=>{
    document.querySelector("#tab2-button-pk").classList.add("active-tab-button-pk");
    document.querySelector("#tab1-button-pk").classList.remove("active-tab-button-pk");
    document.querySelector("#tab3-button-pk").classList.remove("active-tab-button-pk");
  }
  const handleTabBtn3=()=>{
    document.querySelector("#tab3-button-pk").classList.add("active-tab-button-pk");
    document.querySelector("#tab1-button-pk").classList.remove("active-tab-button-pk");
    document.querySelector("#tab2-button-pk").classList.remove("active-tab-button-pk");
  }


  return (<>
  <NavBar/>

    <div className='subscription-page-pk'>
      <section className='hero-pk'></section>

      {/* date and time picker section start */}

      <section className='hero-mobile-pk'>
        <div className='hero-mobile-card-pk'>
          <h3 className='hero-mobile-card-heading-pk'>DELIVERY DATE</h3>
          <div className='hero-mobile-card-datetime-parent-pk'>
            <div className='hero-mobile-card-datetime-child-pk'>
              <div className='input-container-pk'>
                <input onChange={handleColor} className='date-picker-pk' type='date'></input>
              </div>
              <div className='input-container-pk'>
                <select onChange={handleColorTime} className='pickup-time-select-pk'>
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
            <div className='hero-mobile-card-datetime-child-pk'>
              <button onClick={handleSubsSearch} className='hero-mobile-card-btn-pk'>SEARCH</button>
            </div>
          </div>
        </div>
      </section>

      {/* section how it works start */}
      <section className='hiw-pk'>
        <h3 className='hiw-heading-pk'>How it Works</h3>
        <div className='hiw-flex-pk'>
          <div className='hiw-items-pk'>
            <img className='hiw-image-pk' src="https://d36g7qg6pk2cm7.cloudfront.net/assets/long_term/hiw_scooter-340840f2aa3263cef93a01a80ae023a2022c50e9b0294492bc991348859c82ec.png" alt="" />
            <p className='hiw-desc-pk'>Select Your Ride</p>
            <img className='hiw-image-arrow-pk' src="https://d36g7qg6pk2cm7.cloudfront.net/assets/long_term/hiw_arrow-6ba7ec172cde95d071dc770fc029f7639c295b072adea3c9a46c6748445f3f39.png" alt="" />
          </div>
          <div className='hiw-items-pk'>
            <img className='hiw-image-pk' src="https://d36g7qg6pk2cm7.cloudfront.net/assets/long_term/hiw_deposit-a2db02190834c271e9cbe48e0f26e22e6099769c9ade8886ba6fb4e44a6ffc98.png" alt="" />
            <p className='hiw-desc-pk'>
              Pay deposite & booking 
              <br />
              amount for first month
            </p>
            <img className='hiw-image-arrow-pk' src="https://d36g7qg6pk2cm7.cloudfront.net/assets/long_term/hiw_arrow-6ba7ec172cde95d071dc770fc029f7639c295b072adea3c9a46c6748445f3f39.png" alt="" />
          </div>
          <div className='hiw-items-pk'>
            <img className='hiw-image-pk' src="https://d36g7qg6pk2cm7.cloudfront.net/assets/long_term/hiw_kyc-8422dfb7da6bac4e7bbc8ef8908c3a8063fb02a4c5a7a95aad15a9b11a4f1150.png" alt="" />
            <p className='hiw-desc-pk'>
              Get KYC approved online 
              <br />
              & start ridind
            </p>
            <img className='hiw-image-arrow-pk' src="https://d36g7qg6pk2cm7.cloudfront.net/assets/long_term/hiw_arrow-6ba7ec172cde95d071dc770fc029f7639c295b072adea3c9a46c6748445f3f39.png" alt="" />
          </div>
          <div className='hiw-items-pk'>
            <img className='hiw-image-pk' src="https://d36g7qg6pk2cm7.cloudfront.net/assets/long_term/hiw_rent-ba691edeb88c3c0f8ffb1b70148122e48b37d148f421511383c07e2387cf5a5e.png" alt="" />
            <p className='hiw-desc-pk'>
              Pay for upcoming 
              <br />
              months at the start 
              <br />
              of every month
            </p>
            <img className='hiw-image-arrow-pk' src="https://d36g7qg6pk2cm7.cloudfront.net/assets/long_term/hiw_arrow-6ba7ec172cde95d071dc770fc029f7639c295b072adea3c9a46c6748445f3f39.png" alt="" />
          </div>
          <div className='hiw-items-pk'>
            <img className='hiw-image-pk' src="https://d36g7qg6pk2cm7.cloudfront.net/assets/long_term/hiw_exchange-ddece91b095998b3b4783edb0f53c65431350248da8ee437b58843e647e961fa.png" alt="" />
            <p className='hiw-desc-pk'>
              Our team will service the 
              <br />
              vehicle periodically at no cost
            </p>
            {/* <img className='hiw-image-arrow-pk' src="https://d36g7qg6pk2cm7.cloudfront.net/assets/long_term/hiw_arrow-6ba7ec172cde95d071dc770fc029f7639c295b072adea3c9a46c6748445f3f39.png" alt="" /> */}
          </div>
        </div>
      </section>
      {/* section how it works end */}

      {/* section rent from us start */}
      <section className='rfu-pk'>
        <div className='rfu-flex-pk'>
          
          <div className='rfu-flex-content-pk'>
            <h3 className='rfu-heading-pk'>
              Why rent from 
              <br />
              us?
            </h3>
          </div>
          
          <div className='rfu-flex-content-pk'>
            <div className='rfu-items-pk'>
              <img src="https://d36g7qg6pk2cm7.cloudfront.net/assets/long_term/freedom-4181bdd49f6b25fbfc20c87362163cfb6ec16bc822079e14382f8f0aeb5e7470.jpg" alt="" />
              <h4 className='card-heading-pk'>True Trvel Freedom</h4>
              <p>Our quality vehicles, reliable service & unbeatable choice of models help you unlock genuine travel independence.</p>
            </div>
            <div className='rfu-items-pk'>
            <img src="https://d36g7qg6pk2cm7.cloudfront.net/assets/long_term/convinient-f602dcca9636d57d0f4429e1dff654408400248819e10ba338a98058785f4b4d.jpg" alt="" />
              <h4 className='card-heading-pk'>Safe & Convenient</h4>
              <p>With increased social distancing measures, public transport poses great risks.Our bike rentals become a safe and convenient solution.</p>
            </div>
            <div className='rfu-items-pk'>
            <img src="https://d36g7qg6pk2cm7.cloudfront.net/assets/long_term/maintainence-d19ba04b2340287ab6ce1327a4d8cbd98ca0b2c8e053c795f600b9dfc39fd763.jpg" alt="" />
              <h4 className='card-heading-pk'>Zero Maintenance</h4>
              <p>NO hassles of paperwork, regular maintenance at no extra cost & 24/7 roadside assistance in case you face any issue.</p>
          </div>
          </div>
          
        </div>
      </section>
      {/* section rent from us end */}

      {/* section fleet start */}
      <section className='fleet-pk'>
        <h3 className='fleet-heading-pk'>TOP SELLING BIKES AND SCOOTERS</h3>
        <div className='fleet-card-container-pk'>
          <div className='fleet-card-pk'>
            <h3>Honda Activa 5G</h3>
            <img src="https://d3vp2rl7047vsp.cloudfront.net/bike_models/images/000/000/233/medium/HONDA_ACTIVA_5G.png" alt="" />
            <p className='card-bike-price-pk'>Starts at  ₹ 3312 / month</p>
            <button className='card-book-btn-pk'>Book Now</button>
          </div>
          <div className='fleet-card-pk'>
            <h3>Honda Dio</h3>
            <img src="https://d3vp2rl7047vsp.cloudfront.net/bike_models/images/000/000/035/medium/HONDA_DIO.png" alt="" />
            <p className='card-bike-price-pk'>Starts at  ₹ 4156 / month</p>
            <button className='card-book-btn-pk'>Book Now</button>
          </div>
          <div className='fleet-card-pk'>
          <h3>Honda Activa 4G</h3>
            <img src="https://d3vp2rl7047vsp.cloudfront.net/bike_models/images/000/000/121/medium/HONDA_ACTIVA_4G.png" alt="" />
            <p className='card-bike-price-pk'>Starts at  ₹ 2974 / month</p>
            <button className='card-book-btn-pk'>Book Now</button>
          </div>
        </div>
        <div className='glide-arrows-pk'>
          <span className='glide-arrows-left-pk'><ArrowBackIosIcon /></span>
          <span className='glide-arrows-right-pk'><ArrowForwardIosIcon /></span>
        </div>
        <p className='fleet-end-desc-pk'>*All prices are exclusive of taxes and fuel. Images used for representation purposes only, actual color may vary.</p>
        <button className='fleet-view-all-btn-pk'>View All Fleet</button>
      </section>
      {/* fleet section end */}

      {/* section frequently asked question start */}
      <section className='faq-pk'>
        <h3 className='faq-heading-pk' >FREQUENTLY ASKED QUESTIONS</h3>
        <div className='faq-container-pk'>
          <div className='faq-tab-pk'>
            <div className='tab-button-pk active-tab-button-pk' id='tab1-button-pk' onClick={handleTabBtn1}><NavLink to='bookingrelated' className='tab-button-link-pk'>Booking Related</NavLink></div>
            <div className='tab-button-pk' id='tab2-button-pk' onClick={handleTabBtn2}><NavLink to='servicerelated' className='tab-button-link-pk'>Service Related</NavLink></div>
            <div className='tab-button-pk' id='tab3-button-pk' onClick={handleTabBtn3}><NavLink to='vehiclerelated' className='tab-button-link-pk'>Vehicle Related</NavLink></div>
          </div>
          <div className='faq-content-container-pk'>

            <Outlet />

          </div>
        </div>
      </section>
    </div>
    </>
  )
}

export default Rbxsubscription
