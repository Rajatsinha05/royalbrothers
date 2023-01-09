import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
// import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import PersonIcon from '@mui/icons-material/Person';
// import Box from '@mui/material/Box';
// import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import LogoutIcon from '@mui/icons-material/Logout';
import HomeIcon from '@mui/icons-material/Home';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import InventoryIcon from '@mui/icons-material/Inventory';
// import { useStatStyles } from '@chakra-ui/react';
const style = {
  width: '100%',
  maxWidth: 360,
  bgcolor: 'background.paper',
};



export default function ListDividers() {

  const [curr , setCurr] = React.useState("My Orders")

  function handleClick(val){
    setCurr((prev) => val);

  }

  function handleLogout(){
    alert("please first write logout logic in profilesideBar component line 33")
  }


  return (
    <List sx={style} component="nav" aria-label="mailbox folders">


      <ListItem button onClick={()=>handleClick("Profile Information")} className="selected_nav_list">

       <div className='single_nav_icon'>
          <div><span className={curr=="Profile Information" ? "testing nav_icon_activate" : "testing"}><PersonIcon/></span></div>
          <div><p>Profile Information</p></div>
       </div>
      </ListItem>

      <Divider />

      <ListItem button divider onClick={()=>handleClick("My Orders")}>
        <div className='single_nav_icon'>
          <div><span className={curr=="My Orders" ? "testing nav_icon_activate" : "testing"}><InventoryIcon/></span></div>
          <div><p>My Orders</p></div>
       </div>
      </ListItem>
      <ListItem button onClick={()=>handleClick("Manage Addresses")}>
      <div className='single_nav_icon'>
          <div><span className={curr=="Manage Addresses" ? "testing nav_icon_activate" : "testing"}><HomeIcon/></span></div>
          <div><p>Manage Addresses</p></div>
       </div>
      </ListItem>

      <Divider />
      {/* <Divider light /> */}

      <ListItem button onClick={()=>handleClick("My Wishlist")}>
      <div className='single_nav_icon'>
          <div><span className={curr=="My Wishlist" ? "testing nav_icon_activate" : "testing"}><FavoriteIcon/></span></div>
          <div><p>My Wishlist</p></div>
       </div>
      </ListItem>

      <Divider />

      <ListItem button>
      <div className='single_nav_icon' onClick={()=>handleClick("My Wallet")}>
          <div><span className={curr=="My Wallet" ? "testing nav_icon_activate" : "testing"}><AccountBalanceWalletIcon/></span></div>
          <div><p>My Wallet</p></div>
       </div>
      </ListItem>

      <Divider />

      <ListItem button onClick={handleLogout}>
      <div className='single_nav_icon'>
          <div><span className='testing'><LogoutIcon/></span></div>
          <div><p>Logout</p></div>
       </div>
      </ListItem>

    </List>
  );
}