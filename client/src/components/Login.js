import React from 'react'
import { Button, ButtonGroup } from '@chakra-ui/react'
import { Box } from "@chakra-ui/react"
function Login() {
  return (
   <>
   <Box display="flex flex-col" alignItems="center" justifyContent="center" height="100vh" mx="10px">
    <Button colorScheme='blue'>Login</Button>
    <Button colorScheme='blue'>Register</Button>
    </Box>
   </>
  )
}

export default Login