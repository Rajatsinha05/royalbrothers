import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,Button,Input
  } from '@chakra-ui/react'
import { useEffect } from 'react'
export default function StoreCart() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    useEffect(()=>{
        onOpen()
    })
    return(
        <>
            <Drawer
                isOpen={isOpen}
                placement='right'
                onClose={onClose}
            >
                <DrawerOverlay />
                <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader>Create your account</DrawerHeader>

                <DrawerBody>
                    <Input placeholder='Type here...' />
                </DrawerBody>

                <DrawerFooter>
                    <Button variant='outline' mr={3} onClick={onClose}>
                    Cancel
                    </Button>
                    <Button colorScheme='blue'>Save</Button>
                </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    )
}