import { Box, Button, Center, Flex,Grid,Image,Input,Modal,Spacer,Text, useDisclosure,ModalOverlay, ModalContent, ModalHeader, ModalBody } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
function City({city,img}){
    return(
        <Center>
            <Box >
                <Image src={img} borderRadius='md'/>
                <Text fontWeight='600' align='center' mt='-9' color='white' mb='7'>{city}</Text>
            </Box>
        </Center>
    )   
}
function CitySelect() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    useEffect(()=>{
        onOpen()
    },[])
    useEffect(()=>{
        setCity(data)
    },[])
    const [cityArray,setCity] = useState([])
    const [input,setInput] = useState();
    let style ={
        bRadius: 'md',
        paddingBox: '15px 20px',
        paddingText: '5px',
        shadowbox: '0 2px 2px 0 rgba(0,0,0,0.14),0 3px 1px -2px rgba(0,0,0,0.12),0 1px 5px 0 rgba(0,0,0,0.2)',
        mt:'3',
        mb:'4'
      }
      let data=[{
        city:'Agra',
        img:'https://d3vp2rl7047vsp.cloudfront.net/cities/round_images/000/000/039/original/Agra_new.jpg?1558599458'
    },
    {
        city:'Ahemdabad',
        img:'https://d3vp2rl7047vsp.cloudfront.net/cities/round_images/000/000/023/original/Ahmedabad_b8d1eb5783c996a077aff887d35e4168.jpg?1558599488'
    },
    {
        city:'Alleppey',
        img:'https://d3vp2rl7047vsp.cloudfront.net/cities/round_images/000/000/022/original/Alleppy_817ae817e23cf6708ce38c850cc42e6d.jpg?1558599504'
    },
    {
        city:'Ahemdabad',
        img:'https://d3vp2rl7047vsp.cloudfront.net/cities/round_images/000/000/023/original/Ahmedabad_b8d1eb5783c996a077aff887d35e4168.jpg?1558599488'
    },
    {
        city:"Bangalore",
        img:"https://d3vp2rl7047vsp.cloudfront.net/cities/round_images/000/000/001/original/Bangalore_1cf1aa53741a94edc3532f7b2b583c52.jpg?1558599565"
    },
    {
        city:"Bangkok",
        img:"https://d3vp2rl7047vsp.cloudfront.net/cities/round_images/000/000/028/original/Bankok_efd1b11328e1ac61488cac98a15dc584.jpg?1558599580"
    },
    {
        city:"Belagavi",
        img:"https://d3vp2rl7047vsp.cloudfront.net/cities/round_images/000/000/103/original/Belagaum.jpg?1576578730"
    },
    {
        city:"Bhubaneswar",
        img:"https://d3vp2rl7047vsp.cloudfront.net/cities/round_images/000/000/097/original/Bhubneswar_1f33e6ba5edf52d880c1bd9f340b80f4.jpg?1558599591"
    },
    {
        city:"Bhuj",
        img:"https://d3vp2rl7047vsp.cloudfront.net/cities/round_images/000/000/049/original/Bhuj_abf00061bcecebbbd41e8fc317949439.jpg?1558599605"
    },
    {
        city:"Calicut",
        img:"https://d3vp2rl7047vsp.cloudfront.net/cities/round_images/000/000/098/original/Calicut-city-icon.jpg?1567059129"
    },
    {
        city:"Chandigarh",
        img:"https://d3vp2rl7047vsp.cloudfront.net/cities/round_images/000/000/024/original/Chandigarh_72374d6c6de8b70d5b4ea5c05c59ba32.jpg?1558599669"
    },
    {
        city:"Chennai",
        img:"https://d3vp2rl7047vsp.cloudfront.net/cities/round_images/000/000/018/original/Chennai_e20539d5200238901011bdc1bb2e5a7f.jpg?1558599681"
    },
    {
        city:"Chikmagalur",
        img:"https://d3vp2rl7047vsp.cloudfront.net/cities/round_images/000/000/007/original/Chikmagalur_2651596b6f7e5cbf2d2399fe6ca9c7ad.jpg?1558599756"
    },
    {
        city:"Cochin",
        img:"https://d3vp2rl7047vsp.cloudfront.net/cities/round_images/000/000/021/original/Cochin_1606932e14a0d0aa3b02afaffeb23157.jpg?1558599768"
    },
    {
        city:"Coimbatore",
        img:"https://d3vp2rl7047vsp.cloudfront.net/cities/round_images/000/000/020/original/Coimbatore_0916e4a9a1cbd3a31eaa15b3a54cc7d2.jpg?1558599789"
    },
    {
        city:"Davanagere",
        img:"https://d3vp2rl7047vsp.cloudfront.net/cities/round_images/000/000/104/original/Davangere.jpg?1576578716"
    },
    {
        city:"Delhi",
        img:"https://d3vp2rl7047vsp.cloudfront.net/cities/round_images/000/000/034/original/Delhi_21f83b0bf9a5a2c816623238b7628e52.jpg?1558599930"
    },
    {
        city:"Dharamshala",
        img:"https://d3vp2rl7047vsp.cloudfront.net/cities/round_images/000/000/043/original/Dharmshala_7a856e0aa3f643752440791c28853737.jpg?1558599942"
    },
    {
        city:"Gandhinagar",
        img:"https://d3vp2rl7047vsp.cloudfront.net/cities/round_images/000/000/033/original/Gandhinagar_8e02524723e889989ea128e58d7a229f.jpg?1558599954"
    },
    {
        city:"Goa",
        img:"https://d3vp2rl7047vsp.cloudfront.net/cities/round_images/000/000/046/original/Goa_2509358334abe698322e4f7523b3356b.jpg?1558599985"
    },
    {
        city:"Guntur",
        img:"https://d3vp2rl7047vsp.cloudfront.net/cities/round_images/000/000/096/original/Guntur_a31f793bf22c68fe01479c65dcacd9b7.jpg?1558600001",
    },
    {
        city:"Gurugram",
        img:"https://d3vp2rl7047vsp.cloudfront.net/cities/round_images/000/000/040/original/Gurugram_652fd0242a3833bf5b68f9d647a12253.jpg?1558600016"
    },
    {
        city:"Guwahati",
        img:"https://d3vp2rl7047vsp.cloudfront.net/cities/round_images/000/000/095/original/Guwahati_3adb5736296c93fec082f24b87dce70d.jpg?1558600028"
    },
    {
        city:"Hyderabad",
        img:"https://d3vp2rl7047vsp.cloudfront.net/cities/round_images/000/000/012/original/Hyderabad_e23f5904385e0c21afd0fe4b7ff698fb.jpg?1558600101"
    },
    {
        city:"Indore",
        img:"https://d3vp2rl7047vsp.cloudfront.net/cities/round_images/000/000/036/original/Indore_6122bfbe93086a5ae36ab1849b9e458a.jpg?1558600112"
    },
    {
        city:"Jaipur",
        img:"https://d3vp2rl7047vsp.cloudfront.net/cities/round_images/000/000/089/original/Jaipur_5d0bb59a74413b8ff68e8e3b0678579b.jpg?1558600131"
    },
    {
        city:"Jaisalmer",
        img:"https://d3vp2rl7047vsp.cloudfront.net/cities/round_images/000/000/035/original/Jaisalmer_803980ec3a977dd61c215c5fbefd3909.jpg?1558600142"
    },
    {
        city:"Jodhpur",
        img:"https://d3vp2rl7047vsp.cloudfront.net/cities/round_images/000/000/041/original/Jodhpur_43e3b5d3b7a6ecf2b8e33c5d5364f959.jpg?1558600154"
    },
    {
        city:"Kolkata",
        img:"https://d3vp2rl7047vsp.cloudfront.net/cities/round_images/000/000/042/original/Kolkata_656fd6c811baa1db3af9c01e0a1c29f8.jpg?1558600283"
    },
    {
        city:"Konark",
        img:"https://d3vp2rl7047vsp.cloudfront.net/cities/round_images/000/000/106/original/Konark.jpg?1576578685"
    },
    {
        city:"Lucknow",
        img:"https://d3vp2rl7047vsp.cloudfront.net/cities/round_images/000/000/100/original/Lucknow.jpg?1567678107"
    },
    {
        city:"Manali",
        img:"https://d3vp2rl7047vsp.cloudfront.net/cities/round_images/000/000/088/original/Manali_db3125c181b228a8b97ace561edff2da.jpg?1558600294"
    },
    {
        city:"Mangalore",
        img:"https://d3vp2rl7047vsp.cloudfront.net/cities/round_images/000/000/005/original/Mangalore_bbaef83490a59adabb31955b66e96ece.jpg?1558600312"
    },
    {
        city:"Mohali",
        img:"https://d3vp2rl7047vsp.cloudfront.net/cities/round_images/000/000/092/original/Mohali_5245075067b3493799088e81ff562e47.jpg?1558600322"
    },
    // {
    //     city:"Mount Abu",
    //     img:""
    // },
    // {
    //     city:"Mumbai",
    //     img:""
    // },
    // {
    //     city:"Mysore",
    //     img:""
    // },
    // {
    //     city:"Nashik",
    //     img:""
    // },
    ]


    return (
        <Modal
        size="xl"
        onClose={onClose}
        isOpen={isOpen}
        scrollBehavior='inside'
        style={{width:"90%"}}
        >
            <ModalOverlay 
            bg='blackAlpha.300'
            backdropFilter='blur(10px) hue-rotate(90deg)'
            
            />
            {/* <Center> */}
            <ModalContent bgColor='#f5f5f5'  >
                <ModalHeader>
                    <Flex mb={style.mb} style={{display:"flex", alignItems:"center"}}>
                        <Spacer />
                        <Image /><img
                src="data:image/png;base64,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"
                alt="" style={{width:"100px"}}
              /> <Text fontWeight='600' fontSize='18px'> | Bike Rentals</Text>
                        <Spacer/>
                    </Flex>
                    <Center>
                        <Flex borderRadius={style.bRadius} bgColor='white' mb={style.mb} w='100%' >
                            <Input border='none' value={input} placeholder='Search or type city to select' onChange={(event)=>{
                                setCity(data.filter((e,i)=>{
                                    return e.city.toLowerCase().includes(event.target.value.toLowerCase())
                                }))
                            }} />
                            <Button bgColor='white' color='#666'  border='none' onClick={()=>{setInput("")}}>Clear</Button>
                        </Flex>
                    </Center>
                </ModalHeader>
                <ModalBody style={{}}>
                    <Center>
                        <Grid templateColumns='repeat(4, 1fr)' gap={4} w='90%'>
                            {cityArray.map((e)=>{
                                return <Link to={`/${e.city.toLowerCase()}`}><City city={e.city} img={e.img}></City></Link>
                            })}
                        </Grid>
                    </Center>
                </ModalBody >
                    <Box >
                        <Text textTransform='uppercase' color='#343434' fontWeight='600' align='center' mt='0' borderRadius={'md'} borderTopEndRadius='0' borderTopLeftRadius='0' bgColor='white' w='100%' p='10px'>
                            Select City to continue
                        </Text>
                    </Box>
            </ModalContent>
    </Modal>)
}

export default CitySelect;