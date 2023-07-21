import React from 'react'

const CardContext=React.createContext({
    products:[],
    totalAmount:0,
    addProduct:(product)=>{},
    removeProduct:(id)=>{}
});

export default CardContext;
