import React from 'react'
import { Button, VStack ,Flex } from '@chakra-ui/react'
import GoogleLogin from 'react-google-login';

function Home() {
  const responseGoogle = async (authResult) => {
    try {
      if (authResult['code']) {
      
        console.log("hi");
       
      } else {
        throw new Error(authResult);
      }
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <>
    <GoogleLogin
        clientId=""
        buttonText="Login with google"
        responseType="code"
        redirectUri="postmessage"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'} 
      />

   </>
  )
}

export default Home