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

const [searchParams, setSearchParams] = useSearchParams();

const fltr = searchParams.get("filter");




let dispacth=useDispatch()


let get=async()=>{

let res=await fetch(`https://royalbrothers.cyclic.app/products`)
let  result=await res.json();

SetData(dispacth,result)


}


// const [val, setVal] = useState(data)
// if(fltr==''){
// setVal(data);

// }
// else if(fltr=='lth'){
//   val.sort((a,b)=>a.price-b.price)
// }
// else if(fltr=='htl'){
//   val.sort((a,b)=>b.price-a.price)

// }



// 

  return (
  <>
  
  {data.length>0 && data.map((ele,idx)=><BikeCard {...ele} key={idx}/>)}
  
  
  </>
  )
}

export default Services