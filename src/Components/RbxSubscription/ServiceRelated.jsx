import React,{useState} from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function ServiceRelated() {

    const [active,setActive]=useState(null);

    let serviceData=[
        {
            id:12,
            question:'Will there be a risk of contracting the coronavirus if I rent the vehicle?',
            answer:'We deeply care about your wellbeing, doing what we can to ensure that you are delivered a quality bike. Hence, your bike will be thoroughly sanitized before the pick-up date and time. We maintain hygiene standards, using A grade products to first spray the bike with a disinfectant and then clean it with a sanitizer. Should you opt for home delivery, our fleet executive will wear protective gear (mask and gloves) when handling your bike and will drop it off through contactless delivery'
        },
        {
            id:13,
            question:'If I face any issue, with whom should I get in touch?',
            answer:'Give us a call anytime on +917795687594 and we will be there to assist you.'
        },
        {
            id:14,
            question:'Can I ride the vehicle to other cities?',
            answer:'Yes. However, make sure you follow the current government protocol. Should you want to cross state borders, you will need a permit for the same. However, you will need to drop off the bike at the end of the rental period at the same location of the bike’s pick-up'
        },
        {
            id:15,
            question:'What should I do if I get caught by the police?',
            answer:'We urge you to cooperate with authorities. Dealing with the consequences is your responsibility. You can also give us a call and we’ll guide you with taking the appropriate steps'
        },
        {
            id:16,
            question:'Where can I find the vehicle’s documents?',
            answer:'At the time of pick-up, our fleet executive will hand over the bike’s documents. At all times during the rental period, you will have the valid documents in hand'
        },
        {
            id:17,
            question:'How long will it take for the bike to be delivered after completing the booking process?',
            answer:'Your bike will be sanitized and delivered to you at the date and time selected by you. In case of any delays with the delivery, we will give you a call and intimate you of the same.'
        },
        {
            id:18,
            question:'Will the vehicle be delivered with a full tank? Do I need to return the vehicle with a full tank?',
            answer:'You are free to use the reserved fuel at the time of pick-up. We suggest that you utilize the fuel you have filled during usage and return the bike at the end of the rental period. Fuel charge is NOT included in the rent amount'
        },
        {
            id:19,
            question:'What if the fleet executive is late for the home delivery of the vehicle?',
            answer:'You will be duly intimated about any delivery delays on our part. Depending on the extent of the delay, we will compensate you for the same.'
        },
        {
            id:20,
            question:'Do you offer home pick-ups once the trip ends?',
            answer:'You will need to return the bike to the drop-off location selected at the time of initial booking. If you had selected home delivery, our fleet executive will duly pick it up from your doorstep at the drop-off time.'
        }
    ];
  return (
    <div className='faq-content-child-pk'>
        <ul className='faq-ul-pk'>
            {
                serviceData.map((ele)=>{
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
