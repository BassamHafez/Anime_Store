import React from 'react';
import style from './HeaderCardButton.module.css';
const HeaderCardButton = (props) => {
  return (
    <button className={`${style.nav_btn_icons} position-relative`} type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
     <i className="fa-solid fa-cart-shopping "></i>
     <span className='ms-2'>your cart</span>
     <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
        0
    </span>        
    </button>
  )
}

export default HeaderCardButton
