import React from 'react';
import Footer from '../Components/Footer';
//import NavBar from '../Components/NavBar';
import LoginForm from '../Components/Signup/Login';
import NavBar from '../Components/NavBar';


function Login() {
  return (
    <div>
        <NavBar/>
        <LoginForm />
        <Footer />

    </div>
  )
}

export default Login