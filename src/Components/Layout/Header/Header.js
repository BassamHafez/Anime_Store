import React from 'react';
import Nav from './Nav.js';
import style from './Header.module.css'
import Button from '../../UI/Button.js';
import headerVideo from '../../../videos/loffybg.mp4'
const Header = () => {
  return (
   
     
      <header className={style.header}>
        <div className={style.headerLayer}></div>
        <video autoPlay loop muted playsInline className={style.headerBg} >
          <source src={headerVideo} type="video/mp4"></source>
        </video>
        <Nav/>
        <div className={style.content}>
          <h1>Welcome to Beso Store</h1>
          <h6>The largest website for anime products in Egypt</h6>
          <Button name='Shop Now'/>
        </div>
      </header>

  )
}

export default Header;
