import * as React from 'react'
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
    clientId="655942281917-5m0p1pula6h5ivnvkb3lni39alf9cq61.apps.googleusercontent.com"
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

