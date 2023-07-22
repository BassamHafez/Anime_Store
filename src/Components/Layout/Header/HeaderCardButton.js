import React,{useContext} from 'react';
import style from './HeaderCardButton.module.css';
import cartContext from '../../../Store/CartContext'

const HeaderCardButton = (props) => {

  const cartCtx = useContext(cartContext);
 
  const numberOfCartProducts= cartCtx.products.reduce((sum,product)=>{
    return sum + product.amount
  },0)

  return (
    <button className={`${style.nav_btn_icons} position-relative`} type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
     <i className="fa-solid fa-cart-shopping "></i>
     <span className='ms-2'>your cart</span>
     <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
        {numberOfCartProducts}
    </span>        
    </button>
  )
}

export default HeaderCardButton
