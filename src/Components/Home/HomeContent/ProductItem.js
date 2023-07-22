import React,{useState,useContext} from 'react';
import style from './ProductItem.module.css';
import Button from '../../UI/Button';
import Form from './Form.js';
import CardContext from '../../../Store/CartContext';

const ProductItem = (props) => {
    
    const cartCtx =useContext(CardContext);

    const onAddToCard =(amount)=>{
        cartCtx.addProduct({
            id:props.product.id,
            name:props.product.name,
            amount:amount,
            src:props.product.src_one,
            price:props.product.price
        })
    }

    const [hoverProduct,setHoverProduct]= useState(false);

    const handleMouseEnter=()=>{
        setHoverProduct(true);
    }
    
    const handleMouseLeave=()=>{
        setHoverProduct(false)
    }

  return (

    <div className={`${style.category} col-md-4`} >
        <div className={`${style.category_container} my-5`} >
            <div className={style.prod_img_div} onMouseEnter={()=>handleMouseEnter()} onMouseLeave={()=>handleMouseLeave()}>
                <img src={props.product.src_two?hoverProduct?props.product.src_two:props.product.src_one:props.product.src_one} className={style.prod_img} alt={props.product.name}/>
                <div className={style.img_layer}>
                    <Button name='view details'/>
                </div>
                {props.product.new?  <span className={`${style.badge} badge rounded-pill `}>
                    New
                </span>:''}
            </div>
            
            <div className={style.caption}>
                <h4>{props.product.name}</h4>
                <span> Price: {props.product.price}$ USA</span>
            </div>
            <Form productId={props.product.id} onAddToCard={onAddToCard}/>
        </div>
    </div>
  )
}

export default ProductItem
