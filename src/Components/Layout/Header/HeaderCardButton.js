import React,{useState,useEffect,useContext} from 'react';
import style from './HeaderCardButton.module.css';
import cartContext from '../../../Store/CartContext'

const HeaderCardButton = (props) => {

  let [isBtnEffect,setIsBtnEffect]=useState(false);
  const cartCtx = useContext(cartContext);
  const btnClasses=`${style.nav_btn_icons} ${isBtnEffect?style.btn_effect:''}`;

  const numberOfCartProducts= cartCtx.products.reduce((sum,product)=>{
    return sum + product.amount
  },0);


  useEffect(()=>{
    if(cartCtx.products.length===0){
      return;
    }
    setIsBtnEffect(true);
    const timer = setTimeout(()=>{
      setIsBtnEffect(false)
    },300);

    return ()=>{
      clearTimeout(timer);
    };

  },[cartCtx.products]);
  

  return (
    <button className={`${btnClasses} position-relative`} type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
     <i className="fa-solid fa-cart-shopping "></i>
     <span className='ms-2'>your cart</span>
     <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
        {numberOfCartProducts}
    </span>        
    </button>
  )
}

export default HeaderCardButton
