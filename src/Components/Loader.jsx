import { CircularProgress, CircularProgressLabel } from '@chakra-ui/react'


import React from 'react'

function Loader() {
  return (
    <div style={{
        width:"100%",
        height:"100vh",
        backgroundColor:"rgba(0, 0, 0, 0.289)",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        position:"fixed",
        zIndex:"500"
    }}>
        
<CircularProgress isIndeterminate color='#fed24d' />
    </div>
  )
}

export default Loader