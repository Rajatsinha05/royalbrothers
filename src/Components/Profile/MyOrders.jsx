import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useDispatch, useSelector } from 'react-redux';
import { SetData } from '../../ReduxStrore/Action';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import axios from 'axios'
function TabPanel(props) {

  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 2 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const [orderHistory , setOrderHistory] = React.useState([]);
  const [booking , setBooking] = React.useState([]);

  // store data to both array...

  let data=useSelector((store)=>store.reducer.bikes)

React.useEffect(() => {
  
  get()
}, [])
  
  
  let dispacth=useDispatch();


  let get =async()=>{
  
  let res=await fetch(`https://royalbrothers.cyclic.app/Cart`);
  let result=await res.json();
  console.log('result: ', result);
  SetData(dispacth,result)
  
  setBooking(data)
  }
  


  // 


  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  let handleshow=(id)=>{

    toast.success('Ordered cancelled!', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });


     data.slice(id-1,id)
  }

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" TabIndicatorProps={{
    style: {
      background: "#fed24d",
      
    } 
    
    // 
  }}>
          <Tab label="Product Orders" {...a11yProps(0)} style={{color:value==0? '#fed24d' : null , fontWeight:value==0? 'bold' : null}} />
          <Tab label="Bike Bookings" {...a11yProps(1)}  style={{color:value==1? '#fed24d' : null , fontWeight:value==1? 'bold' : null}}/>
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
                    <div className="outer_orders">

                    { orderHistory.length >0 && orderHistory.map((elem)=>{
                      return <div className="my_orders_cad" key={elem.id}>
                                <div>
                                <div><img src={elem.img} alt="Not found" /></div>

                                <div className='nameandprice'>
                                    <h3 className='product_heading'>{elem.name}</h3>
                                    <p style={{fontSize:'12px'}}>Order Id : #1234</p>
                                    <p className='product_price'>Price : &#x20B9; {elem.price}</p>
                                </div>

                                </div>

                                <div className='my_orders_button'>
                                    <button>Track Order</button>
                                    <button>Cancel Order</button>
                                </div>

                        </div>
                    }) }


                    </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <div className="outer_orders">

      { booking.length >0 && booking.map((elem,id)=>{
                      return <div className="my_orders_cad" key={elem.id}>
                                <div>
                                <div><img src={elem.img} alt="Not found" /></div>

                                <div className='nameandprice'>
                                    <h3 className='product_heading'>{elem.name}</h3>
                                    <p style={{fontSize:'12px'}}>Order Id : #1234</p>
                                    <p className='product_price'>Price : &#x20B9; {elem.price}</p>
                                </div>

                                </div>

                                <div className='my_orders_button'>
                                    <button>Track Order</button>
                                    <ToastContainer />
                                    <button onClick={()=>handleshow(elem.id)}>Cancel Order</button>
                                </div>

                        </div>
                    }) }
</div>
      </TabPanel>
    </Box>
  );
}