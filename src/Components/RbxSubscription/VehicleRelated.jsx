import React from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function VehicleRelated() {
  return (
    <div className='faq-content-child-pk'>
        <ul className='faq-ul-pk'>
            <li>
                <div className='faq-questios-pk'>
                    What should I do in case my vehicle breaks down?
                    <span class="material-icons"><ExpandMoreIcon /></span>
                </div>
                <div className='faq-answer-pk'>
                    <span>Give us a call and we take care of the rest. However, we will not be responsible for flat tyres</span>
                </div>
            </li>
            <li>
                <div className='faq-questios-pk'>
                    Will the vehicle be serviced even for long-term rentals?
                    <span class="material-icons"><ExpandMoreIcon /></span>
                </div>
                <div className='faq-answer-pk'>
                    <span>We conduct regular vehicle maintenance throughout your rental period to ensure that you are always in possession of a top notch bike!</span>
                </div>
            </li>
            <li>
                <div className='faq-questios-pk'>
                    What should I do in the case of prior damages already on the vehicle?
                    <span class="material-icons"><ExpandMoreIcon /></span>
                </div>
                <div className='faq-answer-pk'>
                    <span>At the time of pick-up, we will take pictures of any physical damages to the bike. Once the bike is returned at the end of the rental period, we will compare and intimate you about any damages</span>
                </div>
            </li>
            <li>
                <div className='faq-questios-pk'>
                    What should I do if I meet with a minor accident while riding the vehicle?
                    <span class="material-icons"><ExpandMoreIcon /></span>
                </div>
                <div className='faq-answer-pk'>
                    <span>Give us a call, and depending on the situation, we’ll do the right thing for you</span>
                </div>
            </li>
            <li>
                <div className='faq-questios-pk'>
                    What should I do in case the vehicle is damaged during the rental duration?
                    <span class="material-icons"><ExpandMoreIcon /></span>
                </div>
                <div className='faq-answer-pk'>
                    <span>We will take a look at the extent of the damage and make a record of it. Accordingly, you will be charged for the repairs.</span>
                </div>
            </li>
        </ul>
    </div>
  )
}
