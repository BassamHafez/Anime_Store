import React,{Fragment} from 'react';
import style from './Cart.module.css';
import Button from '../UI/Button.js';

const Cart = () => {
  return (
    <Fragment>
        <div className={`${style.off_canvas} offcanvas offcanvas-start`} tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
            <div className={`${style.off_canvas_header} offcanvas-header`}>
                <h5 className="offcanvas-title" id="offcanvasExampleLabel">Your Cart</h5>
                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
                <div>
                    Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc.
                </div>
        
            </div>
            <div class={`${style.offcanvas_footer}  offcanvas-footer d-flex justify-content-evenly align-items-center`}>
                <h5>Total Amount : 0$</h5>
                <Button name='Order Now'/>
            </div>
        </div>
  </Fragment>
  )
}

export default Cart
