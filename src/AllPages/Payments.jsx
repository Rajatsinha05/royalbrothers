import { Box, Center,Flex,Text,Tabs,TabList,Tab,TabPanels,TabPanel,Image,Radio,RadioGroup,Stack, FormControl, FormLabel, Input, Button, Spacer, ChakraProvider } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { SetData } from '../ReduxStrore/Action'
import NavBar from '../Components/NavBar'
import Footer from '../Components/Footer'

function Box1({children}) {
  return <Box w='400px' minH='425px'>{children}</Box>
}
function PayCard({text}) {
  let style ={
    bRadius: 'md',
    paddingBox: '15px 20px',
    paddingText: '5px',
    shadowbox: '0 2px 2px 0 rgba(0,0,0,0.14),0 3px 1px -2px rgba(0,0,0,0.12),0 1px 5px 0 rgba(0,0,0,0.2)',
    mt:'3',
    mb:'4',
    inputW:'70px'
  }





 


  
  return(
    <ChakraProvider>
    <Text mb='5'>{text}</Text>
    <RadioGroup mb='5'>
      <Stack direction='row'>
        <Radio value='1'><Image src='https://d36g7qg6pk2cm7.cloudfront.net/assets/visa_mastercard-24e2ffa5d62a09351fa66b54c1cac94070b87ee181ec12ff35b7f67e573973a0.png' h='1.3333rem' /></Radio>
        <Radio value='2'><Image src='https://d36g7qg6pk2cm7.cloudfront.net/assets/american_express-6d3a29aa70d346eea440f529b26c328a70cb3174956fbcedf3dad366d4100b9c.png' h='1.3333rem' /></Radio>
        <Radio value='3'><Image src='https://d36g7qg6pk2cm7.cloudfront.net/assets/diners_club-f9e57f98657b6d134bb600710e4c43c35f798acc621552e8d9cf168fb4a25988.png' h='1.3333rem' /></Radio>
        <Radio value='4'><Image src='https://d36g7qg6pk2cm7.cloudfront.net/assets/rupay-0817613f9104b0be7203a0b12910dbeac272daa38187c9e52960324532e12ba9.png' h='1.3333rem' /></Radio>
      </Stack>
    </RadioGroup>
    <Box>
      <FormControl bgColor='#f5f5f5' p='4' borderRadius={style.bRadius} mb='5'>
        <FormLabel>
          Card Number
        </FormLabel>
        <Input placeholder='Enter your card number' bgColor='white'  mb='3' ></Input>
        <FormLabel>
          Name on the card
        </FormLabel>
        <Input placeholder='Enter name on the card' bgColor='white'  mb='3'></Input>
        <Flex>
          <Box>
            <FormLabel>Expiry</FormLabel>
            <Flex><Input placeholder='M' bgColor='white' w={style.inputW}  mb='3'/><Spacer /><Input placeholder='Y' bgColor='white'  w={style.inputW} /></Flex>
          </Box>
          <Spacer/>
          <Box>
            <FormLabel>CVV</FormLabel>
            <Input placeholder='CVV' bgColor='white'  w={style.inputW} mb='3'/>
          </Box>
          <Spacer/>
        </Flex>
      </FormControl>
      <Link to='/'>
        <Button bgColor='#fed250'>MAKE PAYMENT</Button>
      </Link>
    </Box>
    </ChakraProvider>
  )
}
function Payments() {
  useEffect(() => {
    get();
   
   }, [])
   
   
   let dispacth=useDispatch();
 
 
   let get =async()=>{
   
   let res=await fetch(`https://royalbrothers.cyclic.app/Cart`);
   let result=await res.json();
   console.log('result: ', result);
   SetData(dispacth,result)
   
   
   }
   
   let data=useSelector((store)=>store.reducer.bikes)





  let style ={
    bRadius: 'md',
    paddingBox: '15px 20px',
    paddingText: '5px',
    shadowbox: '0 2px 2px 0 rgba(0,0,0,0.14),0 3px 1px -2px rgba(0,0,0,0.12),0 1px 5px 0 rgba(0,0,0,0.2)',
    mt:'3',
    mb:'4',
    border:'1px solid #f0f0f0'
  }
  return (
    <ChakraProvider>
<NavBar/>

    <Center>
      <Flex m='3' align='start'>
        <Box mr='3' boxShadow={style.shadowbox} borderRadius={style.bRadius}>
          <Text p='3' bgColor='#ddd'>
            CHOOSE PAYMENT METHOD
          </Text>
          <Tabs variant='unstyled' orientation='vertical' >
            <TabList w='250px' bg='#f7f7f7' >
              <Tab p='13px 0' _selected={{bg: 'white',borderRight:'none' }} border={style.border}>Credit Card</Tab>
              <Tab p='13px 0' _selected={{bg: 'white',borderRight:'none' }} border={style.border}>Debit Card</Tab>
              <Tab p='13px 0' _selected={{bg: 'white',borderRight:'none' }} border={style.border}>Net Banking</Tab>
              <Tab p='13px 0' _selected={{bg: 'white',borderRight:'none' }} border={style.border}>UPI Payment</Tab>
              <Tab p='13px 0' _selected={{bg: 'white',borderRight:'none' }} border={style.border}><Image src='https://d36g7qg6pk2cm7.cloudfront.net/assets/paytm_logo-fa816f9adc5494b20bd1d42dde2a740ecf907e3514f3a3ffab3f680fe0e80256.png' h='20px' /></Tab>
            </TabList>
            <TabPanels >
              <TabPanel>
                <Box1>
                  <PayCard text='Enter your Credit Card Details'></PayCard>
                </Box1>
              </TabPanel>
              <TabPanel>
                <Box1>
                <PayCard text='Enter your Debit Card Details'></PayCard>
                </Box1>
              </TabPanel>
              <TabPanel>
                <Box1>
                  
                </Box1>
              </TabPanel>
              <TabPanel>
                <Box1>
                  
                </Box1>
              </TabPanel>
              <TabPanel>
                <Box1>
                  
                </Box1>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
        <Spacer/>
        <Box minW='250px' boxShadow={style.shadowbox} borderRadius={style.bRadius} >
          <Text p='3' bgColor='#ddd'>
            Summary
          </Text>
          <Box p='4'>
          <Center>
            <Text>
              Total Payable Amount:
            </Text>
          </Center>
          <Center>
            <Text color='#555' fontWeight='700'>
            <span style={{fontWeight:'500',color:'black'}}>₹</span>
            {   Number(data.length>0&& data[data.length-1].price)+2*Number(data.length>0&& (data[data.length-1].price * 14) / 100)}
            </Text>
          </Center>
          </Box>
        </Box>
      </Flex>
    </Center>
    <Footer/>
    </ChakraProvider>
  )
}


export default Payments