import { useRef } from "react";
import styles from "./Royal.module.css"
function Royal(){

var refimg1 = useRef(null);
var refimg2 = useRef(null);
var refimg3 = useRef(null);
var refimg4 = useRef(null);




            var Arr=["https://d36g7qg6pk2cm7.cloudfront.net/assets/icons/inc_42-59ce79f32655b91f34e9ed4e5d53175f446ea263b57ffc85fd3572a1a4a1aade.jpg"
            ,"https://raw.githubusercontent.com/Kamleshfw11179/royalBrothersimages/main/media/bettre.png"
            ,"https://raw.githubusercontent.com/Kamleshfw11179/royalBrothersimages/main/media/hindu.png"
            ,"https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/The_Economic_Times_logo.svg/2560px-The_Economic_Times_logo.svg.png"
            ,"https://raw.githubusercontent.com/Kamleshfw11179/royalBrothersimages/main/media/times%20of%20india.png"
            ];
            var ind=0;
            var interval=4000;
            
             setInterval(() => {
                if(ind==0){
                    refimg1.current.src=Arr[ind]
                    refimg2.current.src=Arr[ind+1];
                    refimg3.current.src=Arr[ind+2];
                    refimg4.current.src=Arr[ind+3];
                   } 
                   else if(ind==1){
                    refimg1.current.src=Arr[ind]
                    refimg2.current.src=Arr[ind+1];
                    refimg3.current.src=Arr[ind+2];
                    refimg4.current.src=Arr[ind+3];
                   }else if(ind==2){
                    refimg1.current.src=Arr[ind]
                    refimg2.current.src=Arr[ind+1];
                    refimg3.current.src=Arr[ind+2];
                    refimg4.current.src=Arr[0];
                   }else if(ind==3){
                    refimg1.current.src=Arr[ind]
                    refimg2.current.src=Arr[ind+1];
                    refimg3.current.src=Arr[0];
                    refimg4.current.src=Arr[1];
                   }else if(ind==4){
                    refimg1.current.src=Arr[ind]
                    refimg2.current.src=Arr[0];
                    refimg3.current.src=Arr[1];
                    refimg4.current.src=Arr[2];
                   }
                   
                ind++;
                if(ind==5){
                   ind=0
                }
                console.log("dafds")
                
             }, interval);
       

        

    return(
            
    <div style={{ margin: "20px 0" }}>
    <h1 style={{ fontSize: "30px", textAlign: "center" }}>FEATURED IN</h1>
    <div
      style={{
        width: "50px",
        background: "#fed24d",
        margin: "auto",
        height: "5px",
        marginBottom: "40px",
      }}
    ></div>



        <div id={styles.slide}>

          
          <img src="https://d36g7qg6pk2cm7.cloudfront.net/assets/icons/inc_42-59ce79f32655b91f34e9ed4e5d53175f446ea263b57ffc85fd3572a1a4a1aade.jpg"  className={styles.img} ref={refimg1}/>
          <img src="https://raw.githubusercontent.com/Kamleshfw11179/royalBrothersimages/main/media/bettre.png"  ref={refimg2} className={styles.img} />
          <img src="https://raw.githubusercontent.com/Kamleshfw11179/royalBrothersimages/main/media/hindu.png"  ref={refimg3} className={styles.img}/>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/The_Economic_Times_logo.svg/2560px-The_Economic_Times_logo.svg.png"  ref={refimg4} className={styles.img}/>
         

       </div>
                        
    </div>
        )
    }
export default Royal