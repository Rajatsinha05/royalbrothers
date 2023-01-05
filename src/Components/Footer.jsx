import styles from '../AllPages/css/footer.module.css';
import Bar from "./bar"
export default function Footer(){
    return(
        <div className={styles.mainFoot}>
        <div className={styles.mainFootH}>
        <div className={styles.sDivs1}>
            <p>ROYAL BROTHERS</p>
            <div className={styles.barD}>
            <Bar />
            </div>
            <div className={styles.labelF1}>
                <img className={styles.msg} src="https://raw.githubusercontent.com/Kamleshfw11179/royalBrothersimages/main/email%201.png" alt="da"></img>
                <p>support@royalbrothers.com</p>
                <img className={styles.call} src="https://raw.githubusercontent.com/Kamleshfw11179/royalBrothersimages/main/white-phone-d7daea12563d63fb4bd1cbb2fa0a824d19501def56934aff125e23343912895e%20(1).png" alt=""></img>
                <p>+917795687594/+919019595595</p>
            </div>
        </div>
        <div className={styles.sDivs2}>
            <p>COMPANY</p>
            <div className={styles.barD}>
            <Bar />
            </div>
            <div className={styles.labelF}>
                <p>About us</p>
                <p>Blog</p>
            </div>
        </div>
        <div className={styles.sDivs3}>
            <p style={{color:"white"}}>POLICIES</p>
            <div className={styles.barD}>
            <Bar />
            </div>
            <div className={styles.labelF}>
                <p>Privacy Policy</p>
                <p>Terms & Conditions</p>
            </div>
        </div>
        <div className={styles.sDivs4}>
            <p  style={{color:"white"}}>QUICK LINK</p>
            <div className={styles.barD}>
            <Bar />
            </div>
            <div className={styles.labelF}>
                <p>Tariff</p>
                <p>Own a franchise</p>
                <p>Earn with us</p>
                <p>Indian bike routes</p>
            </div>
        </div>
        </div>
        <div className={styles.mainFootH}>
        <div className={styles.sDivs1}>
            <p>FOLLOW US</p>
            <div className={styles.barD}>
            <Bar />
            </div>
            <div className={styles.labelI}>
                <img src="https://raw.githubusercontent.com/Kamleshfw11179/royalBrothersimages/main/Facebook-ad24f92a1479ca4c5b308092f11f91d3ad2189d505ba2a737f376943a89b721b%20(1).png" alt=""></img>
                <img src="https://raw.githubusercontent.com/Kamleshfw11179/royalBrothersimages/main/Linkedin-685bfa4464dc2263601740aad98014e02801299c7f2104be70458ac13d061fa1%20(1).png" alt=""></img>
                <img src="https://raw.githubusercontent.com/Kamleshfw11179/royalBrothersimages/main/Youtube-35dbc9202b8e7b71d09c782934215b9f6a78a1b3b11d190b5ad275c004484295%20(1).png" alt=""></img>
                <img src="https://raw.githubusercontent.com/Kamleshfw11179/royalBrothersimages/main/Insta-e068316ffc568b3c0162ef129542c4ec473fedb2317cc8132168a07a0616b475%20(1).png" alt=""></img>
            </div>
        </div>
        <div className={styles.sDivs2}>
            <p>DOWNLOAD OUR APP</p>
            <div className={styles.barD}>
            <Bar />
            </div>
            <div className={styles.labelIj}>
               <img src="https://raw.githubusercontent.com/Kamleshfw11179/royalBrothersimages/main/app_store-4407bc8ced0d52a50ff042ce51e32d51de3e11717955798ec54c6a28e7926c7c%20(1).png" alt=""></img>
               <img src="https://raw.githubusercontent.com/Kamleshfw11179/royalBrothersimages/main/downlod%20ffrom%20google%20play.png" alt=""></img>
            </div>
        </div>
        </div>
        <div className={styles.lastF}>
            <p>OUR PRESENCE</p>
            <Bar/>
            <div className={styles.localities}>
            <p>Bikes for rent in Agra  Bikes for rent in Ahmedabad.Bikes for rent in Alleppey.Bikes for rent in Amritsar.Bikes for rent in Andaman Nicobar.Bikes for rent in Bangalore.Bikes for rent in Bangalore Airport.Bikes for rent in Bangkok.Bikes for rent in Belagavi.Bikes for rent in Bhubaneswar.Bikes for rent in Bhuj.Bikes for rent in Calicut.Bikes for rent in Chandigarh.Bikes for rent in Chennai.Bikes for rent in Chikmagalur.Bikes for rent in Cochin.Bikes for rent in Coimbatore.Bikes for rent in Coorg - Kushalnagar.Bikes for rent in Coorg - Madikeri.Bikes for rent in Davanagere.Bikes for rent in Delhi.Bikes for rent in Dharamshala.Bikes for rent in Ganapati pule.Bikes for rent in Gandhinagar.Bikes for rent in Goa.Bikes for rent in Guntur.Bikes for rent in Gurugram.Bikes for rent in Guwahati.Bikes for rent in Hubli-Dharwad.Bikes for rent in Hyderabad.Bikes for rent in Indore. Bikes for rent in Jaipur. Bikes for rent in Jaisalmer. Bikes for rent in Jodhpur. Bikes for rent in Kolkata. Bikes for rent in Konark. Bikes for rent in Lucknow. Bikes for rent in Manali.  Bikes for rent in Mangalore.  Bikes for rent in Mohali.  Bikes for rent in Mount Abu.  Bikes for rent in Mumbai.  Bikes for rent in Mysore.  Bikes for rent in Nashik.  Bikes for rent in Ooty.  Bikes for rent in Pondicherry.  Bikes for rent in Pune.  Bikes for rent in Puri.  Bikes for rent in Ranchi.  Bikes for rent in Rishikesh.  Bikes for rent in Sakleshpur.  Bikes for rent in Siliguri.  Bikes for rent in Srinagar.  Bikes for rent in Surat.  Bikes for rent in Tirupati.  Bikes for rent in Trivandrum.  Bikes for rent in Udaipur.  Bikes for rent in Udupi - manipal.  Bikes for rent in Vijayawada. Bikes for rent in Vizag.  Bikes for rent in Wayanad</p>
            </div>
        </div>
        </div>
    )
}