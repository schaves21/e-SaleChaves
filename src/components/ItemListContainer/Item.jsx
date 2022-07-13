import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './Item.css';
import { Link } from 'react-router-dom';

export default function Item({ producto }) {
  return (
    <div className="item">
      <Card className="card" sx={{ maxWidth: 350 }}>
        <CardMedia
          className="productImg"
          component="img"
          height="300"
          image={producto.pictureURL}
          alt="producto"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {producto.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Precio: U$S {producto.price}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Stock: {producto.stock}
          </Typography>
        </CardContent>
        <CardContent>
          <Link className="link" to={`/detalle/${producto.id}`}>Ver detalle del producto</Link>
        </CardContent>
      </Card>
    </div>
  );
}


