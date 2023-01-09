import React,{useState} from 'react';

import { Button } from "@chakra-ui/react";
import styles from "./css/login.module.css";
import {useDispatch,useSelector} from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
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
            toast.success('successfully logged!', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
            window.location.href = "/";
        }
        else if (mobile === '' || otp === '') {
            setError(true);
            toast.warn('Enter all the fields!', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
  
            } else{
                toast.error('Wrong Credentials!', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    });

        }
    }


   return(
    <div className={styles.fullContainer1}>
    <div className={styles.ParentLog}>
        <ul className={styles.login_signup_otp}>
                <li>Verify account</li>
            </ul>
            <ToastContainer />
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