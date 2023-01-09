import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@chakra-ui/react";
import styles from "./css/login.module.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  
function LoginForm() {


  let nav=useNavigate();
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");

  // States for checking the errors
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const dispatch = useDispatch();
  const users = useSelector((state) => state.reducers.users);
  //const users = useSelector((state) => state.users);

    const logIn =() =>{
        const payload = users.find(user => user.mobile === mobile && user.password === password)
    
        if(payload){
            dispatch({
                type:'LOGIN',
                payload
            })
            toast.success('successfully logged in!', {
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


nav('/')
            
            },1100 )
        }else if (mobile === '' || password === '') {
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


            } else{
            // alert('Wrong Credentials');

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
  

  return (
    <div className={styles.fullContainer}>
      <h3 className={styles.riders}>Rent . Ride . Explore</h3>
      <ToastContainer />
      <div className={styles.ParentLog}>
        <ul className={styles.login_signup_tabs}>
          <li className={styles.tab_sig}>
            <Link to={"/login"}>Login</Link>
          </li>
          <li className={styles.tab_log}>
            <Link to={"/signup"}>Sign Up</Link>
          </li>
        </ul>

        <div className={styles.divMobile}>
          <p className={styles.countryCode}>Mobile</p>
          <div className={styles.divMobile1}>
            <input
              type="text"
              name="mCode"
              placeholder="+91"
              className={styles.inpTag1}
            ></input>
            <input
              type="text"
              name="mobile"
              autoComplete="off"
              onChange={(e) => setMobile(e.target.value)}
              value={mobile}
              placeholder="As Per Aadhar"
              className={styles.inpTag2}
              required
            ></input>
          </div>
        </div>
        <input
          type="password"
          name="password"
          autoComplete="off"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          placeholder="Password"
          required
        ></input>

        <div className={styles.recapt}>
          <input type="checkbox" className={styles.inpTag3}></input>
          <p className={styles.robot}>I'm not a robot</p>
          <img
            className={styles.recapimg}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/RecaptchaLogo.svg/130px-RecaptchaLogo.svg.png"
          ></img>
        </div>
        <Button className={styles.spBt} onClick={logIn}>
          Login with Password
        </Button>
        <p className={styles.Ors}>OR</p>
        <Button className={styles.otpsubmit}>
          <Link to={"/otp"}>Login With OTP</Link>
        </Button>
      </div>
    </div>
  );
}

export default LoginForm;
