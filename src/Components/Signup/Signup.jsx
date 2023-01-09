import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from "@chakra-ui/react";
import styles from "./css/login.module.css";
import { useDispatch, useSelector } from 'react-redux';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Signup() {
let nav=useNavigate();
    // States for registration
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const [password, setPassword] = useState('');

    // States for checking the errors
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(false);

    
    const dispatch = useDispatch();
    
    const handleSubmit = () => {
        const registredData = {
            type: "REGISTER",
            payload: {
                id: (new Date).getTime(),
                name, email, mobile, password, otp: '1234'
            },

        };

        const expression = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

        const inputEmail = email;
        const result = expression.test(inputEmail); // true
        
        console.log('e-mail is ' + (result ? 'correct' : 'incorrect'));

        if (name === '' || email === '' || mobile === '' || password === '') {
            setError(true);
            // alert("Enter all the fields");

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
                return false;
  
        }else if(!result){
            setError(true);
            // alert('Enter valid email!');
            toast.warn('Enter valid email!', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
                return false;
        }
        else if(password.length < 8 || password.length > 15){
            setError(true);
            // alert("Password length should be between 8 to 15");
            toast.warn('Password length should be between 8 to 15', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
                return false;
        } 
        else if(mobile.length < 10 || mobile.length >10){
            setError(true);

            // alert("Enter valid mobile number ");
            toast.warn('Enter valid mobile number', {
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
        else {
            setSubmitted(true);
            setError(false);
          


            toast.success('Account Created Successfully', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });


                setTimeout(() => {
                    // window.location.href = "./otp";


nav('/otp')
                
                },1100 )
                
           
        }


        dispatch(registredData);
        const regiteredUsers = [];
        regiteredUsers.push(registredData.payload);
        localStorage.setItem('users', JSON.stringify(regiteredUsers));

    }

    return (
        <div className={styles.fullContainer}>
            <h3 className={styles.riders}>Rent . Ride . Explore</h3>
            {/* Calling to the methods */}
            {/* <div className="messages">
		  {errorMessage()}
		   {successMessage()}
	    </div> */}
 <ToastContainer />
            <div className={styles.ParentLog}>
                <ul className={styles.login_signup_tabs}>
                    <li className={styles.tab_log}><Link to={'/login'}>Login</Link></li>
                    <li className={styles.tab_sig}><Link to={'/signup'}>Sign Up</Link></li>
                </ul>
                <input type="text" name="name" autoComplete='off' value={name} onChange={e => setName(e.target.value)} placeholder="Name as per Aadhaar/Passport" required></input>
                <input type="email" name="email" autoComplete='off' onChange={e => setEmail(e.target.value)} value={email} placeholder="Email" required="required"></input>
                <div className={styles.divMobile}>
                    <p className={styles.countryCode}>Mobile</p>
                    <div className={styles.divMobile1}>
                        <input type="text" name="mCode" autoComplete='off' placeholder="+91" className={styles.inpTag1}></input>
                        <input type="text" name="mobile" autoComplete='off' onChange={e => setMobile(e.target.value)} value={mobile} placeholder="As Per Aadhar" className={styles.inpTag2} required></input>
                    </div>
                </div>
                <input type="password" name="password" autoComplete='off' onChange={e => setPassword(e.target.value)} value={password} placeholder="Password" required></input>

                <div className={styles.recapt}>
                    <input type="checkbox" className={styles.inpTag3}></input>
                    <p className={styles.robot}>I'm not a robot</p>
                    <img className={styles.recapimg} src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/RecaptchaLogo.svg/130px-RecaptchaLogo.svg.png" alt="img"></img>
                </div>
                <Button className={styles.spBt} onClick={handleSubmit} >SignUp</Button>

            </div>
        </div>
    )
}


export default Signup;