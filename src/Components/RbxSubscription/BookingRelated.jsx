import React,{useState} from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function BookingRelated() {

    const [active,setActive]=useState(null);

    let bookingData=[
        {
            id:1,
            question:'What happens if I go beyond the monthly km limit?',
            answer:'There is a monthly limit on kilometres based on which bike you have selected. Any extra kms being utilized will be charged extra. Both, the km limit and the additional charge will be defined on the bike’s tariff page.'
        },
        {
            id:2,
            question:'What is the process for late return of the vehicle?',
            answer:'In such an instance, you will be charged double the bike’s day’s rent. You can choose to pay that late fees, or it will be deducted from the refundable deposit.'
        },
        {
            id:3,
            question:'How do I extend my booking for another month?',
            answer:'Give us a call before the end date of the rental and we will extend the booking for you'
        },
        {
            id:4,
            question:'How do I pay any additional amount for extended bookings?',
            answer:'At the end of the rental period, we will send a link for online payment, or it can be deducted from the refundable deposit.'
        },
        {
            id:5,
            question:'What is your cancellation policy on vehicle returns?',
            answer:'If this instance occurs before the date and time of pick-up, 10% of the first month’s rent will be charged'
        },
        {
            id:6,
            question:'Is it possible for me to return the vehicle before the end of the rental period?',
            answer:'If this instance occurs during the rental period, half a month’s rent will be deducted from the refundable deposit'
        },
        {
            id:7,
            question:'When will I receive my refundable deposit?',
            answer:'After the drop-off and if the bike is returned in undamaged condition, the entire deposit will be refunded within 5-7 working days.'
        },
        {
            id:8,
            question:'How do I track the number of kms I have utilized?',
            answer:'At the time of pick-up/home delivery of the bike, the information will be noted and can be compared once the rental period has ended.'
        },
        {
            id:9,
            question:'How do I change my address for home delivery?',
            answer:'Give us a call and let us know as soon as possible, so we can update your address for safe delivery'
        },
        {
            id:10,
            question:'Do I collectively pay all the months’ rent at the time of initial booking of the vehicle?',
            answer:'You will only be liable to pay the first month’s rent and the refundable deposit at the time of initial booking. You will be duly informed (through email, SMS and call) about the upcoming month’s rental payment two days before that month’s due date'
        },
        {
            id:11,
            question:'What are the documents that I have to submit to rent a vehicle?',
            answer:'You will need to present us with your valid Driver’s Licence, ID proof - Aadhar Card/Passport that will be validated by our team before the beginning of your rental period.'
        }
    ];

  return (
    <div className='faq-content-child-pk'>
        <ul className='faq-ul-pk'>
            {
                bookingData.map((ele)=>{
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
