import React, { useState, useContext } from 'react';

const CartContext = React.createContext([]);

export const useCartContext = () => useContext(CartContext);

const MyProvider = ({ children }) => {

    const [cart, setCart] = useState([]);

    const isInCart = (id) => {
        return cart.some(product => product.id === id);
    }

    const addItem = (item, quantity) => {
        if (isInCart(item.id)) {
            setCart(cart.map(product => {
                return product.id === item.id ? { ...product, quantity: product.quantity + quantity} : product
            }));
        } else {
            setCart([...cart, {...item, quantity }]);
        }  
    }

    console.log('Carrito', cart);

    const clear = () => {
        setCart([]);     
    }

    const removeItem = (id) => {
        return setCart(cart.filter(c => c.id !== id));    
    }

    const getItemQty = () => {
        return cart.reduce((acc, producto) => acc += producto.quantity, 0);    
    }

    const getItemPrice = () => {
        return cart.reduce((acc, producto) => acc += producto.quantity * producto.price, 0);   
    }

    return (
        <CartContext.Provider value={{cart, isInCart, addItem, clear, removeItem, getItemQty, getItemPrice}}>{ children }</CartContext.Provider>
    ) 
}

export default MyProvider;