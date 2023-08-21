import React,{Fragment,useContext} from 'react';
import style from './Cart.module.css';
import Button from '../UI/Button.js';
import CartContext from '../../Store/CartContext.js'
import CartItem from './CartItem';

const Cart = () => {

const cartCtx =useContext(CartContext);

const totalAmountCtx = `Total Amount :${cartCtx.totalAmount}$`;
const hasProducts= cartCtx.products.length >0;

const onAddHandler=(item)=>{
    cartCtx.addProduct({...item,amount:1})
}
const onRemoveHandler=(id)=>{
  cartCtx.removeProduct(id);
}
const onDeleteHandler=(id)=>{
  cartCtx.removeSelectedProduct(id);
}


const ctxProducts = cartCtx.products.map((product)=>
{
   return <CartItem onDelete={onDeleteHandler.bind(null,product.id)} onAdd={onAddHandler.bind(null,product)} onRemove={onRemoveHandler.bind(null,product.id)} key={product.id}  product={product}/>
})


  return (
    <Fragment>
        <div className={`${style.off_canvas} offcanvas offcanvas-start`} tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
            <div className={`${style.off_canvas_header} offcanvas-header`}>
                <h5 className="offcanvas-title" id="offcanvasExampleLabel">Your Cart</h5>
                <button type="button" className=" btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>

            <div className="offcanvas-body py-4">
                  <ul className='px-0'>
                     {ctxProducts}
                   </ul>    
            </div>

            <div className={`${style.offcanvas_footer}  offcanvas-footer d-flex justify-content-evenly align-items-center`}>
                <h5>{totalAmountCtx}</h5>
               {hasProducts&&<Button name='Order Now'/>} 
            </div>
        </div>
  </Fragment>
  )
}

export default Cart
