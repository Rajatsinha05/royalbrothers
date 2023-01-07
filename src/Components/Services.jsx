import React,{useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { SetData } from '../ReduxStrore/Action';
import { useState } from 'react';
import BikeCard from './BikeCardPage';



function Services() {
    let data=useSelector((store)=>store.bikes)
useEffect(()=>{


get();

},[])



let dispacth=useDispatch()


let get=async()=>{

let res=await fetch(`https://royalbrothers.cyclic.app/products`)
let  result=await res.json();

SetData(dispacth,result)


}




// 

  return (
  <>
  
  {data.length>0 && data.map((ele,idx)=><BikeCard {...ele} key={idx}/>)}
  
  
  </>
  )
}

export default Services