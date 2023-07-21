import React from 'react';
import CardContext from './CartContext';



const CartContextProvider = (props) => {


const addProduct=(product)=>{
    
}

const removeProduct=(id)=>{

}

    const cardContext={
        products:[],
       totalAmount:0,
       addProduct:addProduct,
       removeProduct:removeProduct
   }
   


  return (
    <CardContext.Provider value={cardContext}>
      {props.children}
    </CardContext.Provider>
  )
}

export default CartContextProvider;
