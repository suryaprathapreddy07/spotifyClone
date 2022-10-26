// import logo from './logo.svg';
import { useContext, useEffect, useState } from 'react';
import './App.css';
import Login from './COMPONENTS/Login';
import { getToken } from './config';
import spotifyWebApi from 'spotify-web-api-js'
import Datacontext from './STORE/data';

function App() {
  const data=useContext(Datacontext)
  // console.log(data)

  const spotify=new spotifyWebApi()

  // state to maintain authentiation using access_token
  const [token,setToken]=useState(null)

  // logic to set token on successfully logged in 
  useEffect(()=>{
    const hash=getToken()
    window.location.hash=''
    let _token=hash.access_token;
    if(_token){
      setToken(_token)

      // set accesstoken to spotify web api
      spotify.setAccessToken(_token)
      // push access token into data layer
      data.setToken(_token)

      // push user data into data layer
      spotify.getMe().then(user=>{
        data.setUser(user)
      })

    }
  }
  ,[])



console.log(data)

  return (
    <div className="app">
      {token && <h1>Successfully logged into spotify account</h1>}
      {!token && <Login></Login>}
      
    </div>
  );
}

export default App;
