import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
/*import Button from '@mui/material/Button';*/
import Typography from '@mui/material/Typography';
import './Item.css';
import { Link } from 'react-router-dom';

export default function Item({ producto }) {
  return (
    <div className="item">
      <Card  sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="350"
          image={producto.pictureURL}
          alt="producto"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {producto.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Precio: {producto.price}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Stock: {producto.stock}
          </Typography>
        </CardContent>
        <CardActions>
          <Link to={`/detalle/${producto.id}`}>Ver detalle del producto</Link>
        </CardActions>
      </Card>
    </div>
  );
}


