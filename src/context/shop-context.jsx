import React, { createContext, useState } from 'react'
import { PRODUCTS } from '../products';

export const ShopContext = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    for(let i=1;i<=PRODUCTS.length;i++) {
        cart[i] = 0;
    }
    return cart;
}
export const ShopContextProvider = (props) => {
    const [cartItems,setCartItems] = useState(getDefaultCart());

    const getTotalCartAmount = () => {
        let amount = 0;
        for(const item in cartItems) {
           if(cartItems[item] > 0) {
                let itemInfo = PRODUCTS.find((product) => product.id === Number(item))
                amount += cartItems[item]*itemInfo.Price
           }
        }
        return amount;
    }

    const addToCart = (itemId) => {
        setCartItems((prev) => (
            {...prev,[itemId] : prev[itemId]+1}
        ))
    }
    const removeFromCart = (itemId) => {
        setCartItems((prev) => (
            {...prev,[itemId] : prev[itemId]-1}
        ))
    }

    const updateCart = (newAmount, itemId) => {
        setCartItems((prev) => (
            {...prev,[itemId] : newAmount}
        ))
    }

    const contextValue = {cartItems, addToCart, removeFromCart,updateCart,getTotalCartAmount};
  return (
    <ShopContext.Provider value={contextValue}>
        {props.children}
    </ShopContext.Provider>
  )
}

