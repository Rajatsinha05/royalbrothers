import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,Flex,
    useDisclosure,Button, Center,Text,Image, Box, Input, Spacer
  } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
export default function StoreCart() {
    const [cartData,setCartData] = useState([])
    const { isOpen, onOpen, onClose } = useDisclosure()
    useEffect(()=>{
        onOpen()
    })
    useEffect(()=>{
        fetch('https://royalbrothers.cyclic.app/StoreCart')
    .then((res)=>res.json())
    .then((res)=>setCartData(res))
    },[])
    return(
        <>
            <Drawer
                isOpen={isOpen}
                placement='right'
                onClose={onClose}
                size='md'
            >
                <DrawerOverlay />
                <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader>Cart</DrawerHeader>
                <Center>
                    <hr width='90%' />
                </Center>
                <DrawerBody>
                    {cartData.length? <>
                        {cartData.map((e)=>{
                            return (<Flex> 
                                <Image src={e.url_1} h='100px'/> 
                                <Box ml='3' w='100%'>
                                    <Text fontWeight='500' >{e.name}</Text>
                                    <Flex>
                                    <Input value='1' mt='3' w='40px'/>
                                    <Spacer/>
                                    <Text mt='4'>Rs. {e.pride}</Text>
                                    </Flex>
                                </Box>
                            </Flex>)
                        })}
                    </> : <><Center><Text mt='4' fontSize='2xl' fontWeight='600'>Your cart is empty</Text></Center><Center mt='5'><Link ><Text fontSize='xl' p='2' paddingLeft='4' paddingRight='4' borderRadius='xl' border='1px solid black' >Return to Shop</Text></Link></Center></>}
                </DrawerBody >
                <DrawerFooter>
                {cartData.length ? <>
                    <Link to='/store/shipping'><Button w='100%' bgColor='#fed250'>CheckOut</Button></Link>
                </>: ''}
                <br></br>
                </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    )
}