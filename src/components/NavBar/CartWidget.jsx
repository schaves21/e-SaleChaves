import React from 'react';
import { useCartContext } from '../../context/CartContext';

export const CartWidget = () => {

  const { getItemQty } = useCartContext();

  return (
    <>
     <span>{getItemQty() || ''}</span> 
    </>
  ); 
}

export default CartWidget;
