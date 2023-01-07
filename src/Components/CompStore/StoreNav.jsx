import { Box, ChakraProvider, Flex, Img, Spacer } from '@chakra-ui/react'
import React from 'react'
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
function StoreNav() {
  return (
    <ChakraProvider>
    <Box padding="20px">

<Flex justifyItems="center" alignItems="center">
<Box>

    <Img src="https://cdn.shopify.com/s/files/1/0571/9906/7323/files/RBStoreLogo.png?height=100&v=1621529392" height="50px"/>
</Box>
<Spacer/>
<Box>
<Flex gap="20px" justifyItems="center" alignItems="center">



    <SearchSharpIcon/>
   <PersonOutlineOutlinedIcon/>
    <ShoppingCartOutlinedIcon/>
</Flex>


</Box>





</Flex>






    </Box>
    
    
    
    </ChakraProvider>
  )
}

export default StoreNav