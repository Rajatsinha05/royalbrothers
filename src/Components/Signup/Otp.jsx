import React,{useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@chakra-ui/react";
import styles from "./css/login.module.css";
import {useDispatch,useSelector} from 'react-redux';

function Otp(){
    const[mobile,setMobile] =useState('');
    const[otp,setOtp] =useState('1234');

    // States for checking the errors
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(false);  


    const dispatch =useDispatch();
    const users = useSelector(state => state.reducers.users)

    
    

    const submitOtp =() =>{
        
        const payload = users.find(user => user.mobile === mobile && user.otp === otp)
        if(payload){
            dispatch({
                type:'OTP',
                payload
            })
            alert('Login SuccessFully');
            window.location.href = "./index";
        }
        else if (mobile === '' || otp === '') {
            setError(true);
            alert("Enter all the fields");
            } else{
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
            <input type="text" name="mobile" autoComplete='off' onChange={e => setMobile(e.target.value)} value={mobile}  placeholder="Registered Mobile" required></input>
            <input type="text" name="otp" autoComplete='off' onChange={e => setOtp(e.target.value)} value={otp} placeholder="OTP" required></input>
            <Button className={styles.button_exp} onClick={submitOtp}>Submit</Button>

        </div>
        </div>
   )
}
export default Otp