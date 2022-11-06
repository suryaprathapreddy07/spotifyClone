// import logo from './logo.svg';
import { useContext, useEffect, useState } from 'react';
import './App.css';
import Login from './COMPONENTS/Login';
import { getToken } from './config';
import spotifyWebApi from 'spotify-web-api-js'
import Datacontext from './STORE/data';
import Player from './COMPONENTS/Player';

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
        console.log(user)
      })

      // push playlist data into data lauyer
      spotify.getUserPlaylists().then(playlists=>{
        data.setPlaylists(playlists.items)
      })

      // get playlist data
      spotify.getPlaylist('37i9dQZEVXcN4TWb3Shvjm').then(playlist=>{
        data.setCurrentPlaylist(playlist)
      })

    }
  }
  ,[])



// console.log(data)

  return (
    <div className="app">
      {token && <Player spotify={spotify}></Player>}
      {!token && <Login></Login>}
      
    </div>
  );
}

export default App;
