import React from 'react'
import styles from './Player.module.css'
import PlayerBody from './Player_body'
import PlayerFooter from './Player_footer'
import PlayerSidebar from './Player_sidebar'

function Player(props) {
  return (
    <div className={styles.player}>
      <div className={styles.playerBody}>
        <PlayerSidebar spotify={props.spotify}></PlayerSidebar>
        <PlayerBody spotify={props.spotify} ></PlayerBody>
      </div>
      <PlayerFooter></PlayerFooter>

    </div>
  )
}

export default Player