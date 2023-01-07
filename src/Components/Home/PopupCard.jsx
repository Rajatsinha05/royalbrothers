import React from 'react'

function PopupCard({closePopup}) {
  return (
    <div style={{    alignSelf: "flex-start",
        width: "370px",
        height: "130px",
        backgroundSize: "100% 100%",
        boxShadow: "0 4px 6px -1px rgb(0 0 0 / 10%), 0 2px 4px -1px rgb(0 0 0 / 6%)",
        position:"fixed",
        zIndex: "20",
        left:'10px',
        bottom:"10px",
        display:"flex",
        justifyContent:"flex-end",
        
        backgroundImage: `url("https://d36g7qg6pk2cm7.cloudfront.net/assets/cashback_popup-69a29e97338467110495f4ae4de6b7ad35c14d4b8b6a54aea33a8fedf2a494c6.jpg")`,
    }}>
    <i
              style={{ fontSize: "20px", padding: "5px" }}
              className="fa-solid fa-xmark"
              onClick={()=>{closePopup(false)}}
            ></i>
    </div>
  )
}

export default PopupCard