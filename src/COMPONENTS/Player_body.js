import React, { useContext } from 'react'
import Datacontext from '../STORE/data'
import styles from './player_body.module.css'
import BodyHeader from './player_body_header'
import { AiFillPlayCircle } from "react-icons/ai";
import { BsThreeDots } from "react-icons/bs";
import { AiOutlineClockCircle } from "react-icons/ai";
import Song from './Song';



function PlayerBody() {

  const data=useContext(Datacontext)
  // console.log(data?.currentPlaylist)
  
  const songs=data?.currentPlaylist?.tracks?.items
  console.log(songs)
  let songsList=[]

  if(songs){
    for(let i=0;i<songs.length;i++){
      songsList.push(<a href={songs[i]?.track?.preview_url} target='blank' style={{textDecoration:'none'}}><Song song={songs[i]} no={i+1}></Song></a>)
    }
  }

 

  // let count=0
  return (
    <div className={styles.playerBody}>
      <BodyHeader></BodyHeader>
      <div className={styles.body_banner}>
        <img src={data?.currentPlaylist?.images[0].url} alt='playlist image'></img>
        <div className={styles.playlist_data}>
          <h6>PLAYLIST</h6>
          <h1 className={styles.playlist_name}>{data?.currentPlaylist?.name}</h1>
          <p className={styles.playlist_description}>{data?.currentPlaylist?.description}</p>
          <h5>{`${data?.currentPlaylist?.owner?.display_name}  .  ${data?.currentPlaylist?.tracks?.total} Songs`}</h5>
        </div>
      </div>
      <div className={styles.player_body_body}>
        <div className={styles.player_body_options}>
          <AiFillPlayCircle className={styles.playBtn}></AiFillPlayCircle>
          <BsThreeDots style={{style:'#fff',fontSize:'30px'}} className={styles.playOptions}></BsThreeDots>
        </div>
        <div className={styles.song_container}>
          <div className={styles.song_container_header}>
            <h4 style={{flex:'0.4'}}>#    TITLE</h4>
            <h4 style={{flex:'0.2'}}>ALBUM</h4>
            <h4 style={{flex:'0.2'}}>DATE ADDED</h4>
            <AiOutlineClockCircle style={{flex:'0.2'}}></AiOutlineClockCircle>
          </div>
          <hr></hr>
          <div className={styles.songs}>
            {/* <Song></Song> */}
            {/* songs.map((ele)=><Song></Song>) */}
            {/* {songs &&songs.map(ele=>
            <a href={ele?.track?.preview_url} target='blank' style={{textDecoration:'none'}}><Song song={ele}></Song></a>)} */}
            {songs&&songsList}
            
            

          </div>
        </div>
      </div>
      



    </div>
  )
}

export default PlayerBody