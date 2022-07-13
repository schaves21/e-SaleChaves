import * as React from 'react';
import { useState } from 'react';
import { useCartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css';
import swal from 'sweetalert';

const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});

export default function ItemDetail({ detail, detalleId }) {

  let { category, title, description, pictureURL, price, stock } = detail;

  const { isInCart, addItem } = useCartContext();

  const [cant, setCant] = useState(0);

  const [count, setCount] = useState(1);

  const sumar = () => {
    count < stock ? setCount(count + 1) : swal("Atención", `La cantidad no puede ser mayor que el stock del producto`, "warning");
  }
  const restar = () => {
    count > 1 ? setCount(count - 1) : swal("Atención",'La cantidad no puede ser menor que 1', "warning")
  }
  const reset = () => {
    setCount(1)
  }

  const agregar = (count) => {
    if (count === 1) {
      swal("Exitoso", `Se agregó ${title} al carrito`, "success");
    } else {	
      swal("Exitoso", `Se agregaron ${count} ${title} al carrito.`, "success");
    }
    setCant(count);
    addItem(detail, count);
    isInCart(detalleId);
  }

  return (
    <div className="itemDetail">

      <h2 className="titleDetail">Detalle del Producto</h2>

      <Paper
        sx={{
          p: 4,
          margin: 'auto',
          maxWidth: 700,
          flexGrow: 1,
          backgroundColor: (theme) =>
            theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        }}
      >
        <Grid container spacing={4}>
          <Grid item>
            <ButtonBase sx={{ width: 250, height: 250 }}>
              <Img className="pictureURL" alt="producto" src={pictureURL} />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={4}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1" component="div">
                  {title}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  {description}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Cantidad: {category}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Precio unitario: U$S {price}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Stock: {stock}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
      <Paper
        sx={{
          p: 4,
          margin: 'auto',
          maxWidth: 700,
          flexGrow: 1,
          backgroundColor: (theme) =>
            theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        }}
      >
        <Grid item xs>
          {
            cant > 0 ?
            <>
            <Link className="linkCount" to={'/carrito'}>Ir al Carrito</Link>
            <Link className="linkCount" to={'/'}>Seguir comprando</Link>
            </>
            : 
            <ItemCount stock={stock} initial={1} onAdd={agregar} sumar={sumar} restar={restar} reset={reset} count={count} />
          }
        </Grid>
      </Paper>
    </div>
  );
}