import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css';

export default function ItemDetail({ data }) {

  const [cart, setCart] = useState(false);

  const onAdd = (cantidad) => {
    setCart(true);
  }

    return ( 
      <div className="itemDetail">
        <Card  sx={{ maxWidth: 345 }}>
          <Typography gutterBottom variant="h5" component="div">
            {data.title}
          </Typography>
          <CardMedia
            component="img"
            height="350"
            image={data.pictureURL}
            alt="producto"
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              {data.description}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Precio: {data.price}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Stock: {data.stock}
            </Typography>
          </CardContent>
            
            {cart ? <Link to='/carrito'>Finalizar compra</Link> : <ItemCount inicio={1} stock={5} onAdd={onAdd} />}
            
        </Card>   
      </div>
    );
  }