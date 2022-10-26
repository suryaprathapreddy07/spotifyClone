import React from 'react';
import logo from '../ASSETS/logo.png'
import { loginurl } from '../config';
import styles from './Login.module.css';

function Login() {
  return (
    <div className={styles.login}>
        <img src={logo} alt='spotify logo'></img>
        <a href={loginurl}>LOGIN WITH SPOTIFY</a>
    </div>
  )
}    

export default Login