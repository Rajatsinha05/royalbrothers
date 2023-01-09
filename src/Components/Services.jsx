import React,{useEffect,useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { SetData } from '../ReduxStrore/Action';

import BikeCard from './BikeCardPage';
import { useSearchParams } from 'react-router-dom';



function Services() {
    let data=useSelector((store)=>store.reducer.bikes)
useEffect(()=>{


get();

},[])

const [searchParams] = useSearchParams();

const fltr = searchParams.get("filter");
console.log('fltr: ', fltr);




let dispacth=useDispatch()


let get=async()=>{

let res=await fetch(`https://royalbrothers.cyclic.app/products`)
let  result=await res.json();

SetData(dispacth,result)


}


let [val, setVal] = useState(data)

// if(val.length>0){
//   console.log('val: ', val);
  
// }
// else{
//   console.log('valless')
// }


if(fltr=='lth'){
  data.sort((a,b)=>a.price-b.price)
}
else if(fltr=='htl'){
  data.sort((a,b)=>b.price-a.price)

}
else if(fltr=='asc'){
  data.sort((a,b)=>a.name-b.name)
}
else if(fltr==499){
  data.filter((a)=>a.price <=499)
}

else if(fltr==999){
  data.filter((a)=>a.price <=499)
}




  return (
  <>
  
  {data.length>0 && data.map((ele,idx)=><BikeCard {...ele} key={idx}/>)}
  
  
  </>
  )
}

export default Services