import React from "react"
const Datacontext=React.createContext({
    user:null,
    access_token:null,
    playlist:[],
    playing:false,
    item:null,
    setUser:(user)=>{},
    setToken:(token)=>{}
})

export default Datacontext;