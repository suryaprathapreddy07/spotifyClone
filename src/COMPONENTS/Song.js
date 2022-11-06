import styles from './song.module.css'

import React from 'react'

function Song({song,no}) {
const months=['Jan','Feb','Mar','Apr','May',"Jun",'July','Aug','Sep','Oct','Nov','Dec']
const date=new Date(`${song?.added_at}`)
const date_added=`${date.getDate()} ${months[date.getMonth()]}, ${date.getFullYear()}`
// console.log(date)
const songName=song?.track?.name
const albumName=song?.track?.album?.name
const durationS=Math.floor((song?.track?.duration_ms)/1000)
const duration=`${Math.floor((durationS/60))}:${Math.floor(durationS%60)}`
const imageUrl=song?.track?.album?.images[0]?.url
let artistArr=song?.track?.artists
let artistName=artistArr.map(ele=>ele.name)
let artists=artistName.join(',')

  return (
    <div className={styles.song}>
        <div className={styles.song_title}>
            <h3>{no}</h3>
            <img src={imageUrl} alt='songImage'></img>
            <div className={styles.song_description}>
                <h3>{songName}</h3>
                <h4>{artists}</h4>
            </div>
        </div>
        <h4>{albumName}</h4>
        <h4>{date_added}</h4>
        <h4 style={{textAlign:'center'}}>{duration}</h4>
        
    </div>
  )
}

export default Song