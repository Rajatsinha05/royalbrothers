import { Box, Center, ChakraProvider, Flex, Text } from '@chakra-ui/react'
import React from 'react'

function AzendaLine() {
  return (
   <ChakraProvider>


<Box m="10">

<Center>


<Flex flexDirection="column" alignItems="center">



<Box>

<Text fontSize="30" fontWeight="bold">

Everything that you want
</Text>
</Box>
 

   <Box mt="5">
   <Text color="grey">

Riding Gear | Motorcycle accessories | Apparel | Merchandise


</Text>

   </Box>
   </Flex>
</Center>


</Box>

   </ChakraProvider>
  )
}

export default AzendaLine