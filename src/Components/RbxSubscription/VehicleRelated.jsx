import React,{useState} from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function VehicleRelated() {

    const [active,setActive]=useState(null);
    

    let vehicleData=[
        {
            id:21,
            question:'What should I do in case my vehicle breaks down?',
            answer:'Give us a call and we take care of the rest. However, we will not be responsible for flat tyres'
        },
        {
            id:22,
            question:'Will the vehicle be serviced even for long-term rentals?',
            answer:'We conduct regular vehicle maintenance throughout your rental period to ensure that you are always in possession of a top notch bike!'
        },
        {
            id:23,
            question:'What should I do in the case of prior damages already on the vehicle?',
            answer:'At the time of pick-up, we will take pictures of any physical damages to the bike. Once the bike is returned at the end of the rental period, we will compare and intimate you about any damages'
        },
        {
            id:24,
            question:'What should I do if I meet with a minor accident while riding the vehicle?',
            answer:'Give us a call, and depending on the situation, we’ll do the right thing for you'
        },
        {
            id:25,
            question:'What should I do in case the vehicle is damaged during the rental duration?',
            answer:'We will take a look at the extent of the damage and make a record of it. Accordingly, you will be charged for the repairs.'
        }
    ];

  return (
    <div className='faq-content-child-pk'>
        <ul className='faq-ul-pk'>
            {
                vehicleData.map((ele)=>{
                    return <li key={ele.id} onClick={()=>{active==null?setActive(ele.id):setActive(null)}}
                        className={`${active == ele.id ? 'active' : ''}`}
                    >
                        <div className='faq-questios-pk'>
                            {ele.question}
                            <span className={`material-icons${active == ele.id ? ' active-material-icons' : ''}`}><ExpandMoreIcon /></span>
                        </div>
                        <div className={`faq-answer-pk${active == ele.id ? ' active-faq-answer-pk' : ''}`}>
                            <span>{ele.answer}</span>
                        </div>
                    </li>
                })
            }
        </ul>
    </div>
  )
}
