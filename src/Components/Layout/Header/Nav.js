import React from 'react'
// import { NavLink } from 'react-router-dom'
import style from './Nav.module.css';
import HeaderCardButton from './HeaderCardButton.js';
import logo from '../../../images/logo.png';


const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg">
    <div className="container-fluid">
      <a className="navbar-brand" href="#"><img src={logo} className={style.nav_logo} alt='Panda logo'/></a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className={`${style.nav_item} nav-item mx-5`}>
            <a className="nav-link active" aria-current="page" to="#">Home</a>
          </li>
          <li className={`${style.nav_item} nav-item mx-5`}>
            <a className="nav-link" href="#">Store</a>
          </li>
          <li className={`${style.nav_item} nav-item mx-5`}>
            <a className="nav-link" href="#">Contact</a>
          </li> 
        </ul>
        <div className='ms-auto me-5'>
             <button className={style.nav_btn_icons}>  <i className="fa-solid fa-moon"></i></button> 
             <button className={style.nav_btn_icons}><i className="fa-solid fa-user"></i></button>
              <HeaderCardButton/>
        </div>
      </div>
    </div>
  </nav>
  )
}

export default Nav
