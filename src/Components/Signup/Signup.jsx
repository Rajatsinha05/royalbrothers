import React,{useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@chakra-ui/react";
import styles from "./css/login.module.css";
import {useDispatch,useSelector} from 'react-redux';


function Signup (){

    // States for registration
      const [name, setName] = useState('');
      const [email, setEmail] = useState('');
      const [mobile,setMobile] =useState('');
      const [password, setPassword] = useState('');


      const dispatch =useDispatch();

    const handleSubmit =() =>{
        const registredData = {
            type: "REGISTER",
            payload :{
                id :(new Date).getTime(),
                name,email,mobile,password
            },
            
        };
        dispatch(registredData);
        const regiteredUsers = [];
        regiteredUsers.push(registredData.payload);
        localStorage.setItem('users',JSON.stringify(regiteredUsers));
         alert("succes");
         window.location.href = "./otp";
    }

    // States for checking the errors
    //   const [submitted, setSubmitted] = useState(false);
    //   const [error, setError] = useState(false);  


    // Handling the name change
    //   const handleName = (e) => {
	//     setName(e.target.value);
	//     setSubmitted(false);
    //     };

    // Handling the email change
    //   const handleEmail = (e) => {
	//    setEmail(e.target.value);
	//    setSubmitted(false);
    //   };

    // Handling the password change
    // const handleMobile = (e) => {
	//     setMobile(e.target.value);
	//     setSubmitted(false);
    //   };  

    // Handling the password change
    //   const handlePassword = (e) => {
	//     setPassword(e.target.value);
	//     setSubmitted(false);
    //   };
      
    // Handling the form submission
    //    const handleSubmit = (e) => {
	//     e.preventDefault();
	//     if (name === '' || email === '' || mobile === '' || password === '') {
	//     setError(true);
	//     } else {
	//     setSubmitted(true);
	//     setError(false);
	//     }
    // }; 

    
    
    // Showing success message
    //    const successMessage = () => {
	//     return (
	//     <div
	// 	className="success"
	// 	style={{
	// 	display: submitted ? '' : 'none',
	// 	}}>
	// 	<h3 style={{textAlign:"center",color:"green"}}>User {name} successfully registered!!</h3>
        
	//     </div>
	//    );
    // };

    // Showing error message if error is true
    //    const errorMessage = () => {
	//     return (
	//     <div
	// 	className="error"
	// 	style={{
	// 	display: error ? '' : 'none',
	// 	}}>
	// 	<h3 style={{textAlign:"center",color:"red"}}>Please enter all the fields</h3>
	//     </div>
	//     );
    //  };

    return (
        <div className={styles.fullContainer}>
        <h1 className={styles.riders}>Rent . Ride . Explore</h1>
        {/* Calling to the methods */}
	    {/* <div className="messages">
		  {errorMessage()}
		  {successMessage()}
	    </div> */}

        <div className={styles.ParentLog}>
            <ul className={styles.login_signup_tabs}>
                <li className={styles.tab_l6}><Link to={'/login'}>Login</Link></li>
                <li className={styles.tab_l6}><Link to={'/signup'}>SignUp</Link></li>
            </ul>
            <input type="text" name="name" value={name} onChange={e => setName(e.target.value)} placeholder="Name as per Aadhaar/Passport" required></input>
            <input type="email" name="email" onChange={e => setEmail(e.target.value)} value={email} placeholder="Email" required="required"></input>
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
        <Button className={styles.spBt} onClick={handleSubmit} >SignUp</Button> 
         
        </div>
        </div>
    )
}


export default Signup;