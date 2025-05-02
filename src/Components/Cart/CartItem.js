import React from "react";
import style from "./CartItem.module.css";

const CartItem = (props) => {
  return (
    <div className={`${style.offcanvas_body_cart} mb-2 container`}>
      <div className={`${style.offcanvas_body_cart_container} row`}>
        <div className={`${style.offcanvas_body_cart_img} col-sm-5`}>
          <img
            src={props.product.src}
            className="w-100"
            alt={props.product.name}
          />
        </div>
        <div className={`${style.offcanvas_body_cart_caption} col-sm-7 p-2`}>
          <h5>{props.product.name}</h5>
          <h6>{`${props.product.price}$`}</h6>
          <div className="d-flex justify-content-center align-items-center mt-5">
            <button onClick={props.onAdd} className={style.plus}>
              <i className="fas fa-plus"></i>
            </button>
            <span>{props.product.amount}</span>
            <button onClick={props.onRemove} className={style.minus}>
              <i className="fas fa-minus"></i>
            </button>
          </div>
          <div className={style.trash_container}>
            <button className={style.trash} onClick={props.onDelete}>
              <i className="fa-regular fa-trash-can"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
