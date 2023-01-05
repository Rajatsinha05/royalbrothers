import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    // <div>Home</div>
    <>
    <Link to="/signup">Signup Page</Link>
      <Link to="/login">Login Page</Link>
      </>
  )
}

export default Home