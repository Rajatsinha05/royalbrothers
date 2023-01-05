import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@chakra-ui/react";
import styles from "./css/login.module.css";
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

function Login() {
  const[mobile,setMobile] =useState('');
    const[password,setPassword] =useState('');

    const dispatch =useDispatch();
    const users = useSelector(state => state.users)
    

    const logIn =() =>{
        const payload = users.find(user => user.mobile === mobile && user.password === password)
        if(payload){
            dispatch({
                type:'LOGIN',
                payload
            })
            alert('Success');
        }else{
            alert('Wrong Credentials');

        }
    }

  

  return (
      <div className={styles.fullContainer}>
      <h1 className={styles.riders}>Rent . Ride . Explore</h1>

      <div className={styles.ParentLog}>
          <ul className={styles.login_signup_tabs}>
              <li className={styles.tab_l6}><Link to={'/login'}>Login</Link></li>
              <li className={styles.tab_l6}><Link to={'/signup'}>SignUp</Link></li>
          </ul>
          
      <div className={styles.divMobile}>
          <p className={styles.countryCode}>Mobile</p>
      <div className={styles.divMobile1}>
          <input type="text" name="mCode"  placeholder="+91" className={styles.inpTag1}></input>
          <input type="text" name="mobile" onChange={e => setMobile(e.target.value)} value={mobile} placeholder="As Per Aadhar" className={styles.inpTag2} required></input>
      </div>
      </div>
          <input type="password" name="password" onChange={e => setPassword(e.target.value)} value={password} placeholder="Password" required></input>

      <div className={styles.recapt}>
          <input type="checkbox" className={styles.inpTag3}></input>
          <p className={styles.robot}>I'm not a robot</p>
          <img className={styles.recapimg} src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/RecaptchaLogo.svg/130px-RecaptchaLogo.svg.png"></img>
      </div>
      <Button className={styles.spBt} onClick={logIn} >Login</Button> 
       
      </div>
      </div>
  )
}

export default Login