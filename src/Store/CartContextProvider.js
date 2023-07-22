import React,{useReducer} from 'react';
import CardContext from './CartContext';


const defaultCartValue={
  products:[],
  totalAmount:0
}

const cartReducer =(state,action)=>{

  if(action.type==='ADD_PRODUCT'){
    const updatedTotalAmount=state.totalAmount+ action.product.price * action.product.amount;
    const existingCardProductIndex=state.products.findIndex(item=> item.id ===action.product.id);
    const existingCardProduct= state.products[existingCardProductIndex];
    let updatedProducts;

    if(existingCardProduct){
      const updatedProduct={
        ...existingCardProduct,
        amount:existingCardProduct.amount + action.product.amount 
      };
      updatedProducts=[...state.products];
      updatedProducts[existingCardProductIndex]=updatedProduct;
    }

    else{
       updatedProducts= state.products.concat(action.product)
    }

    return{
      products:updatedProducts,
      totalAmount:updatedTotalAmount
    }
  }
  
  return defaultCartValue;
}

const CartContextProvider = (props) => {

   let [cartState,dispatchCart] = useReducer(cartReducer,defaultCartValue)

    const addProduct=(product)=>{
        dispatchCart({type:'ADD_PRODUCT',product:product})
    }

    const removeProduct=(id)=>{
      dispatchCart({type:'REMOVE_PRODUCT',id:id})
    }

    const cardContext={
        products:cartState.products,
        totalAmount:cartState.totalAmount,
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
