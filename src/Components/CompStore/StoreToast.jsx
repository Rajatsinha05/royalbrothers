import { Button, ChakraProvider, Wrap, WrapItem, useToast } from "@chakra-ui/react"

function StoreToast() {
    const toast = useToast()
    const positions = [
      'top',
     
    ]
  
    return (
        <ChakraProvider>

        
      <Wrap>
        {positions.map((position, i) => (
          <WrapItem key={i}>
            <Button
              onClick={() =>
                toast({
                  title: ` Product added`,
                  position: position,
                  isClosable: true,
                })
              }
            >
              Buy
            </Button>
          </WrapItem>
        ))}
     
      </Wrap>
      </ChakraProvider>
    )
  }

  export default StoreToast