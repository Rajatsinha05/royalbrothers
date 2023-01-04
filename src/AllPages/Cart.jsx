import { Box, Center, Flex,Text } from '@chakra-ui/react'
import React from 'react'

function Cart() {
  let style ={
    bRadius: '10px',
    p: '10px'
  }
  return (
    <>
    <Box w='100%' bgColor='#fed250'>
      <Text fontWeight='500' maxW='80%' align='center' p='2px'>
      Now rent two wheelers for 4 or 7 days at a lower special price. Click to modify search to 4 days or 7 days ( 7 Hours and 30 Minutes )
      </Text>
    </Box>
    <Center>
      <Flex>
        <Box boxShadow='0 0 10px black' borderRadius={style.bRadius}>
          <Text fontWeight='700' p='5px'>Summary</Text>
        </Box>
        <Box boxShadow='0 0 10px black' borderRadius={style.bRadius}>
          1
        </Box>
      </Flex>
    </ Center>
    </>
  )
}

export default Cart