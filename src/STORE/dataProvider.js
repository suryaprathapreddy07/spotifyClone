import React, { useReducer } from 'react'
import Datacontext from './data'

// reducer function to commit actions dispatched from the dataprovider and return required state based on the type of actions
const datareducer=function(state,action){

  
console.log(action)


if(action.type=='SET_USER'){
  return {...state,
  user:action.user}
}

if(action.type=='SET_TOKEN'){
  return{...state,
    access_token:action.token}
}




}





const defaultState={user:null,access_token:null,playlists:[],playing:false,item:null}




function DataProvider(props) {
    const [state,dispatchdataactions]=useReducer(datareducer,defaultState)


    // state handling functions
const setUserHandler=function(user){
  dispatchdataactions({type:'SET_USER',user:user})
}

const setTokenHandler=function(token){
  dispatchdataactions({type:'SET_TOKEN',token:token})
}

    const datacontext={
      user:state.user,
      access_token:state.access_token,
      playlists:state.playlists,
      playing:state.playing,
      item:state.item,
      setUser:setUserHandler,
      setToken:setTokenHandler
    }
  return (<Datacontext.Provider value={datacontext}>
    {props.children}
  </Datacontext.Provider>
  )
}

export default DataProvider