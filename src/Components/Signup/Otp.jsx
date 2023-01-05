import React,{useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@chakra-ui/react";
import styles from "./css/login.module.css";
import {useDispatch,useSelector} from 'react-redux';

function Otp(){
    const[mobile,setMobile] =useState('');
    const[otp,setOtp] =useState('1234');

    const dispatch =useDispatch();
    const users = useSelector(state => state.users)
    

    const submitOtp =() =>{
        const payload = users.find(user => user.mobile === mobile && user.otp === otp)
        if(payload){
            dispatch({
                type:'OPT',
                payload
            })
            alert('Success');
        }else{
            alert('Wrong Credentials');

        }
    }


   return(
    <div className={styles.fullContainer1}>
    <div className={styles.ParentLog}>
        <ul className={styles.login_signup_otp}>
                <li>Verify account</li>
            </ul>
        <div className={styles.divMobile_otp}>
            <p>Phone</p>
            </div>
            <input type="text" name="mobile" onChange={e => setMobile(e.target.value)} value={mobile}  placeholder="As Per Aadhar" required></input>
            <input type="text" name="otp" onChange={e => setOtp(e.target.value)} value={otp} placeholder="OTP" required></input>
            <Button className={styles.button_exp} onClick={submitOtp}>Submit</Button>

        </div>
        </div>
   )
}
export default Otp