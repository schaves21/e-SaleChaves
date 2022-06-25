import React, { useState, useContext } from 'react';

const CartContext = React.createContext([]);

export const useCartContext = () => useContext(CartContext);

const MyProvider = ({ children }) => {

    const [cart, setCart] = useState([]);

    const isInCart = (id) => cart.find(product => product.id === id) ? true : false;

    const addItem = (item, quantity) => {
        if (isInCart(item.id)) {
            setCart(cart.map(product => {
                return product.id === item.id ? { ...product, quantity: product.quantity + quantity} : product
            }));
        } else {
            setCart([...cart, {...item, quantity }]);
        }  
    }

    const clear = () => {
        setCart([]);     
    }

    const removeItem = (id) => setCart(cart.filter(product => product.id !== id));    

    const getItemQty = () => cart.reduce((acc, product) => acc + product.quantity, 0);    

    const getItemPrice = () => cart.reduce((acc, product) => acc + product.quantity * product.price, 0);   

    return (
        <CartContext.Provider value={{cart, isInCart, addItem, clear, removeItem, getItemQty, getItemPrice}}>{ children }</CartContext.Provider>
    ) 
}

export default MyProvider;