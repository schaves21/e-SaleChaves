import React, { useState, useContext } from 'react';
import swal from 'sweetalert';

const CartContext = React.createContext([]);

export const useCartContext = () => useContext(CartContext);

const MyProvider = ({ children }) => {

    const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) ?? []);
 
    const isInCart = (detalleId) => {
        return cart.some((detail) => detail.id === detalleId);
    }

    const addItem = (detail, count) => {

        let newCart;
        let product = cart.find(product => product.id === detail.id);

        if(product){

            let cont;
            cont = product.count + count

            if(cont > product.stock) {
                return swal("Error", `No hay suficientes unidades en stock`, "error");   
            } else {
                product.count += count;
                newCart = [...cart];
            }           
        } else {
            product = { ...detail, count: count };
            newCart = [...cart, product];
        }
        setCart(newCart);
    }

    const clear = () => {
        setCart([]);  
        localStorage.clear();   
    }

    const removeItem = (id) => setCart(cart.filter(product => product.id !== id));  

    const getItemQty = () => cart.reduce((acc, product) => acc + product.count, 0);

    const getItemPrice = () => cart.reduce((acc, product) => acc + product.count * product.price, 0);

    return (
        <CartContext.Provider value={{
            cart,
            isInCart, 
            addItem, 
            clear, 
            removeItem, 
            getItemQty, 
            getItemPrice
        }}>{ children }</CartContext.Provider>
    ) 
}

export default MyProvider;