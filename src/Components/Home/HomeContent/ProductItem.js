import React,{useState} from 'react';
import style from './ProductItem.module.css';
import Button from '../../UI/Button';
import Form from './Form.js';

const ProductItem = (props) => {

    const [hoverProduct,setHoverProduct]= useState(null);

    const handleMouseEnter=(productId)=>{
        setHoverProduct(productId);
    }
    
    const handleMouseLeave=()=>{
        setHoverProduct(null)
    }


  return (

    <div className={`${style.category} col-md-4`} key={props.product.id} onMouseEnter={()=>handleMouseEnter(props.product.id)} onMouseLeave={()=>handleMouseLeave()} >
        <div className={`${style.category_container} my-5`}>
            <div className={style.prod_img_div}>
                <img src={props.product.src_two?hoverProduct===props.product.id?props.product.src_two:props.product.src_one:props.product.src_one} className={style.prod_img} alt={props.product.name}/>
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
            <Form productId={props.product.id}/>
        </div>
    </div>
  )
}

export default ProductItem
