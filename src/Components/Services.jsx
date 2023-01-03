import React,{useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { SetData } from '../ReduxStrore/Action';
import { useState } from 'react';
import BikeCard from './BikeCard';



function Services() {
useEffect(()=>{


get();

},[])


let [data,setData]=useState([])
let dispacth=useDispatch()
let get=async()=>{

let res=await fetch(`https://royalbrothers.cyclic.app/products`)
let  result=await res.json();
// console.log(result)
// SetData(dispacth,result.data)
setData(result)

}



// let data=useSelector((store)=>store.bikes)
// console.log('data: ', data);

  return (
  <>
  
  {data.map((ele,idx)=><BikeCard {...ele} key={idx}/>)}
  
  
  </>
  )
}

export default Services