import React from "react"
const Datacontext=React.createContext({
    user:null,
    access_token:null,
    playlists:[],
    currentPlaylist:null,
    playing:false,
    item:null,
    setUser:(user)=>{},
    setToken:(token)=>{},
    setPlaylists:(playLists)=>{},
    setCurrentPlaylist:(playlist)=>{}
})

export default Datacontext;