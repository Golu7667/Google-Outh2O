import * as React from 'react'
import Home from './components/Home'
import Account from './components/Account'
import {Routes,Route} from 'react-router-dom'
import GoogleLogin from 'react-google-login';


function App() {
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
   
    <GoogleLogin
    clientId=""
    buttonText="Login with google"
    responseType="code"
    redirectUri="postmessage"
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
    cookiePolicy={'single_host_origin'} 
  />
     
    
  )
}
export default App

