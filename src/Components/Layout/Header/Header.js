import React from 'react';
import Nav from './Nav.js';
import style from './Header.module.css'
const Header = () => {
  return (
   
     
      <header>
        <Nav/>
        <div className='container-fluid'>
          <div className={style.cover}>
          </div>
        </div>
      </header>

  )
}

export default Header;
