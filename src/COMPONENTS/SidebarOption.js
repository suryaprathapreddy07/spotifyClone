import { fontSize } from '@mui/system';
import React, { useContext, useEffect, useRef } from 'react';
import Datacontext from '../STORE/data';
import styles from './sidebarOption.module.css'



function SidebarOption({Icon,title,playlist,spotify}) {

  const data=useContext(Datacontext)
  const playlistHandler=function(playlist){
    spotify.getPlaylist(playlist.id).then(ele=>{
      console.log(ele)
      data.setCurrentPlaylist(ele)})
    // console.log(playlist)
    // data.setCurrentPlaylist(playlist)
  }
  const ref=useRef(null)
  useEffect(()=>{
    const div=ref.current

    div.addEventListener('click',()=>{playlistHandler(playlist)})

    return div.removeEventListener('click',playlist)

  },[])
  return (
    <div className={styles.sidebarOption} ref={ref}>
        {Icon&&<Icon style={{fontSize:'30px',
                              padding: '0 10px',
                              boxSizing: 'content-box'}}></Icon>}
        {Icon?<h1 className={styles.sidebarTitle}>{title}</h1>:<p className={styles.playlistTitle}>{title}</p>}
        
    </div>
  )
}

export default SidebarOption