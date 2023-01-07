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
function CitySelect(props) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    useEffect(()=>{
        onOpen()
    })
    useEffect(()=>{
        setCity(data)
    },[])
    const [cityArray,setCity] = useState([])
    const [search,SetSearch] = useState()
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
        city:'Ahemdabad',
        img:'https://d3vp2rl7047vsp.cloudfront.net/cities/round_images/000/000/023/original/Ahmedabad_b8d1eb5783c996a077aff887d35e4168.jpg?1558599488'
    },
    ]


    return (
        <Modal
        onClose={onClose}
        isOpen={isOpen}
        scrollBehavior='inside'
        >
            <ModalOverlay
            bg='blackAlpha.300'
            backdropFilter='blur(10px) hue-rotate(90deg)'
            />
            {/* <Center> */}
            <ModalContent bgColor='#f5f5f5'>
                <ModalHeader>
                    <Flex mb={style.mb}>
                        <Spacer/>
                        <Image /> <Text fontWeight='600' fontSize='18px'>| Bike Rentals</Text>
                        <Spacer/>
                    </Flex>
                    <Center>
                        <Flex borderRadius={style.bRadius} bgColor='white' mb={style.mb} w='100%'>
                            <Input border='none' placeholder='Search or type city to select' />
                            <Button bgColor='white' color='#666'  border='none'>Clear</Button>
                        </Flex>
                    </Center>
                </ModalHeader>
                <ModalBody style={{}}>
                    <Center>
                        <Grid templateColumns='repeat(2, 1fr)' gap={4} w='90%'>
                            {cityArray.map((e)=>{
                                return <Link to='/city'><City city={e.city} img={e.img}></City></Link>
                            })}
                        </Grid>
                    </Center>
                </ModalBody>
                    <Box>
                        <Text textTransform='uppercase' color='#343434' fontWeight='600' align='center' mt='0' borderRadius={'md'} borderTopEndRadius='0' borderTopLeftRadius='0' bgColor='white' w='100%' p='10px'>
                            Select City to continue
                        </Text>
                    </Box>
            </ModalContent>
    </Modal>)
}

export default CitySelect;