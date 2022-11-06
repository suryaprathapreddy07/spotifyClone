import styles from './player_body_header.module.css';
import { IoIosArrowBack } from "react-icons/io";

import { IoIosArrowForward } from "react-icons/io";
import { useContext } from 'react';
import Datacontext from '../STORE/data';


const BodyHeader=function(){
    const data =useContext(Datacontext)
    // console.log(data.user)

    return <div className={styles.body_header}>
        <div className={styles.body_header_left}>
           <IoIosArrowBack className={styles.navigation}></IoIosArrowBack>
           <IoIosArrowForward className={styles.navigation}></IoIosArrowForward>
           <form className={styles.search_form}>
           <input type='search' className={styles.search_bar} placeholder='What do you want to listen to?'></input>
           </form>
            
            
        </div>
        <div className={styles.body_header_right}>
            <div className={styles.bhr_sdiv}>
                <img src={data?.user?.images[0]?.url} alt='avatar' className={styles.avatar}></img>
                <strong className={styles.avatar_description}>{data?.user?.display_name}</strong>
            </div>
        </div>
    </div>
}

export default BodyHeader