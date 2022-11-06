import React from "react";
import styles from "./player_footer.module.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { FiHeart } from "react-icons/fi";
import { BiVolume } from "react-icons/bi";
import { TbDevices2 } from "react-icons/tb";
import { MdQueueMusic } from "react-icons/md";
import { GiMicrophone } from "react-icons/gi";
import { BsShuffle } from "react-icons/bs";
import { TbRepeat } from "react-icons/tb";
import { BsFillSkipStartFill } from "react-icons/bs";
import { BsFillSkipEndFill } from "react-icons/bs";
import { AiFillPlayCircle } from "react-icons/ai";
import { IoIosRemoveCircleOutline } from "react-icons/io";
// import Slider from '@mui/material/Slider';
import Slider from '@mui/material/Slider';

function PlayerFooter() {
  return (
    <div className={styles.footer}>
      <div className={styles.footer_left}>
        <img
          src="https://i.scdn.co/image/ab67616d0000b273dfec68576484f46ec3c52497"
          className={styles.play_image}
        ></img>
        <div>
          <h2>Ponni nadhi</h2>
          <p>A R Rahman</p>
        </div>
        <FiHeart style={{ fontSize: "20px" }}></FiHeart>
        <IoIosRemoveCircleOutline
          style={{ fontSize: "20px" }}
        ></IoIosRemoveCircleOutline>
      </div>
      <div className={styles.footer_center}>
        <div className={styles.footer_center_top}>
          <BsShuffle style={{ fontSize: "20px", color: "grey" }} className={styles.play_icon}></BsShuffle>
          <BsFillSkipStartFill className={styles.play_icon}
            style={{ fontSize: "25px" }}
          ></BsFillSkipStartFill>
          <AiFillPlayCircle className={styles.play_icon} style={{ fontSize: "35px" }}></AiFillPlayCircle>
          <BsFillSkipEndFill className={styles.play_icon} style={{ fontSize: "25px" }}></BsFillSkipEndFill>
          <TbRepeat className={styles.play_icon} style={{ fontSize: "20px", color: "grey" }}></TbRepeat>
        </div>
        <div className={styles.footer_center_bottom}>
          <p>00:00</p>
          {/* <input type='range' className={styles.footer_range}></input> */}
          {/* <input type='range' classname={styles.song_slider}></input> */}
          <Slider
        className={styles.song_slider}
        size="small"
        defaultValue={0}
        aria-label="Small"
      />
          
          <p>00:00</p>
        </div>
      </div>
      <div className={styles.footer_right}>
        <GiMicrophone style={{ fontSize: "20px", color: "grey" }}></GiMicrophone>
        <MdQueueMusic style={{ fontSize: "20px", color: "grey" }}></MdQueueMusic>
        <TbDevices2 style={{ fontSize: "20px", color: "grey" }}></TbDevices2>
        <BiVolume style={{ fontSize: "20px", color: "grey" }}></BiVolume>
        {/* <input type='range' classname={styles.volume_slider}></input> */}
        <Slider
        className={styles.volume_slider}
        size="small"
        defaultValue={0}
        aria-label="Small"
      />

      </div>
    </div>
  );
}

export default PlayerFooter;
