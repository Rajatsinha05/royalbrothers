import React from 'react'
import './Rbxsubscription.css'
import { Outlet, Link, NavLink } from 'react-router-dom';
// import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function Rbxsubscription() {
  return (
    <div className='subscription-page-pk'>
      <section className='hero-pk'></section>
      {/* <section className='hero-mobile-pk'>
        <div className='hero-mobile-card-pk'>
          <h3 className='hero-mobile-card-heading-pk'>DELIVERY DATE</h3>
          <div className='hero-mobile-card-datetime-parent-pk'>
            <div className='hero-mobile-card-datetime-child-pk'>
              <div className='input-container-pk'>
                <input type='date'></input>
              </div>
              <div className='input-container-pk'>
                <select className='pickup-time-select-pk'>
                  <option value="">Select time</option>
                  <option value=""></option>
                  <option value=""></option>
                  <option value=""></option>
                  <option value=""></option>
                  <option value=""></option>
                  <option value=""></option>
                  <option value=""></option>
                  <option value=""></option>
                  <option value=""></option>
                  <option value=""></option>
                  <option value=""></option>
                  <option value=""></option>
                  <option value=""></option>
                  <option value=""></option>
                  <option value=""></option>
                  <option value=""></option>
                  <option value=""></option>
                  <option value=""></option>
                  <option value=""></option>
                </select>
              </div>
            </div>
            <div className='hero-mobile-card-datetime-child-pk'>
              <button className='hero-mobile-card-btn-pk'>SEARCH</button>
            </div>
          </div>
        </div>
      </section> */}

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

      {/* section rent from s start */}
      <section className='rfu-pk'>
        <div className='rfu-flex-pk'>
          <div className='rfu-items-pk'>
            <h3 className='rfu-heading-pk'>
              Why rent from 
              <br />
              us
            </h3>
          </div>
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
        {/* <div className='glide-arrows-pk'>
          <button className='glide-arrow-pk glide-arrow-left-pk'>
            <span className='material-icons-pk'>keyboard_arrow-left</span>
          </button>
          <button className='glide-arrow-pk glide-arrow-right-pk'>
            <span className='material-icons-pk'>keyboard_arrow-right</span>
          </button>
        </div> */}
        <p className='fleet-end-desc-pk'>*All prices are exclusive of taxes and fuel. Images used for representation purposes only, actual color may vary.</p>
        <button className='fleet-view-all-btn-pk'>View All Fleet</button>
      </section>
      {/* fleet section end */}

      {/* section frequently asked question start */}
      <section className='faq-pk'>
        <h3 className='faq-heading-pk'>FREQUENTLY ASKED QUESTIONS</h3>
        <div className='faq-container-pk'>
          <div className='faq-tab-pk'>
            <div className='tab-button-pk'><NavLink to='bookingrelated' className='tab-button-link-pk'>Booking Related</NavLink></div>
            <div className='tab-button-pk'><NavLink to='servicerelated' className='tab-button-link-pk'>Service Related</NavLink></div>
            <div className='tab-button-pk'><NavLink to='vehiclerelated' className='tab-button-link-pk'>Vehicle Related</NavLink></div>
          </div>
          <div className='faq-content-container-pk'>

            <Outlet />

          </div>
        </div>
      </section>
    </div>
  )
}

export default Rbxsubscription