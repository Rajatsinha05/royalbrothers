import React from 'react';
import NavBar from '../NavBar';
import './Profile.css';
import ProfileSideBar from './ProfileSideBar';
import MyOrders from './MyOrders';
function Profile() {
    return (
        <>
           <NavBar/>

            <div className="profile_outer">

                    <div className='profile_left'>

                            <div className="user_name_section">
                                <div><img src="https://d36g7qg6pk2cm7.cloudfront.net/assets/icons/user-profile-menu-70666577f1d7fbe6bba1f46ceacdb2e4abdbb2575014670cf9afbfbf35376c25.png" alt="Not found" /></div>
                                <div>
                                    <p>Hello,</p>
                                    <p><b>User</b></p>
                                </div>
                            </div>

                            <div className="profile_navigation_section">
                                <ProfileSideBar/>
                            </div>
                    </div>



                    <div className='profile_right'>
                           <MyOrders />
                    </div>


            </div>
        </>
    );
}

export default Profile;