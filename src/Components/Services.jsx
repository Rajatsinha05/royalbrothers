import React,{useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { SetData } from '../ReduxStrore/Action';
import { useState } from 'react';
import BikeCard from './BikeCard';



function Services() {
    let data=useSelector((store)=>store.bikes)
useEffect(()=>{


get();

},[])



let dispacth=useDispatch()


let get=async()=>{

let res=await fetch(`https://royalbrothers.cyclic.app/products`)
let  result=await res.json();
console.log(result)
SetData(dispacth,result)


}




// console.log('data: ', data);

  return (
  <>
  
  {data.length>0 && data.map((ele,idx)=><BikeCard {...ele} key={idx}/>)}
  
  
  </>
  )
}

export default Services