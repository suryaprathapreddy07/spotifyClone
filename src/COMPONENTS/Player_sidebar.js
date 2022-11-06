import React, { useContext } from 'react'
import styles from './player_sidebar.module.css'
import logo from '../ASSETS/logo.png'
import LibraryMusicOutlinedIcon from '@mui/icons-material/LibraryMusicOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SearchIcon from '@mui/icons-material/Search';
import SidebarOption from './SidebarOption';
import HomeIcon from '@mui/icons-material/Home';
import FavoriteIcon from '@mui/icons-material/Favorite';
// import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import AddBoxIcon from '@mui/icons-material/AddBox';
import Datacontext from '../STORE/data';

const playlistHandler=function(playlist){
  console.log(playlist.name)
  console.log('clicked')
}


function PlayerSidebar(props) {
  const data=useContext(Datacontext)
  // console.log(typeof(data.playlists))

  return (
    <div className={styles.sidebar}>
      <img className={styles.sidebarLogo} src={logo} alt='sidebar logo'></img>
      <SidebarOption Icon={HomeOutlinedIcon} title='Home'></SidebarOption>
      <SidebarOption Icon={SearchIcon} title='Search'></SidebarOption>
      <SidebarOption Icon={LibraryMusicOutlinedIcon} title='Library'></SidebarOption>
      <br></br>
      <SidebarOption Icon={AddBoxIcon} title='Create Playlist'></SidebarOption>
      <SidebarOption Icon={FavoriteIcon} title='Liked Songs' onClick={()=>console.log('surya')}></SidebarOption>
      <br></br>
      <strong className={styles.playlistTitle} onClick={()=>{console.log('clicked')}}>PLAYLISTS</strong>
      <hr></hr>
      {/* {data.playlists.map(ele=>{
        <SidebarOption title={ele.name}></SidebarOption>
        // console.log('HI')
      })} */}
      {data.playlists.map(ele=><SidebarOption title={ele.name} playlist={ele} spotify={props.spotify}></SidebarOption>)}

    </div>
  )
}

export default PlayerSidebar