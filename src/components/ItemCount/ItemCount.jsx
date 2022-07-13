import React from 'react';
import './ItemCount.css';
import Button from '@mui/material/Button';

export const ItemCount = ({ onAdd, sumar, restar, reset, stock, count }) => {

    return (
        <div className='contador'>
            <Button size="small" variant="contained" color="primary" onClick={restar}>-</Button>    
            <span className='spanCount'>{count}</span>
            <Button size="small" variant="contained" color="primary" onClick={sumar}>+</Button>
            <div className='agregarCarrito'>
                <Button size="small" variant="contained" color="primary" onClick={() => {onAdd(count); reset()}}>Agregar al Carrito</Button>
            </div>
        </div>
    );   
}

export default ItemCount;
