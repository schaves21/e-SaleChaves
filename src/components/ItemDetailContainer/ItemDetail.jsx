import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css';
import { useCartContext } from '../../context/CartContext';

export default function ItemDetail({ data }) {

  const [myCart, setMyCart] = useState(false);

  const { addItem } = useCartContext();

  const onAdd = (quantity) => {
    setMyCart(true);
    addItem(data, quantity);
  }

    return ( 
      <div className="itemDetail">
        <Card className="card"  sx={{ maxWidth: 350 }}>
          <Typography gutterBottom variant="h5" component="div">
            {data.title}
          </Typography>
          <CardMedia
            component="img"
            height="300"
            image={data.pictureURL}
            alt="producto"
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              {data.description}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Precio: U$S {data.price}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Stock: {data.stock}
            </Typography>
          </CardContent>
          <CardContent>  
            {
              myCart 
                ? <Link className="link" to='/carrito'>Finalizar compra</Link> 
                : <ItemCount inicio={1} stock={5} onAdd={onAdd} />
            }
          </CardContent> 
        </Card>   
      </div>
    );
  }