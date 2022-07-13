import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import { useCartContext } from '../../context/CartContext';
import './ItemCart.css';

const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});

export default function ItemCart({ product }) {

  const { removeItem } = useCartContext();

  return (
    <div className="gridContainer">
      <Paper
        sx={{
          p: 2,
          margin: 'auto',
          maxWidth: 500,
          flexGrow: 1,
          backgroundColor: (theme) =>
            theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        }}
      >
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase sx={{ width: 128, height: 128 }}>
              <Img alt="producto" src={product.pictureURL} />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1" component="div">
                  {product.title}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  {product.category}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Cantidad: {product.count}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Precio unitario: U$S {product.price}
                </Typography>
              </Grid>
              <Grid item>
                <Typography onClick={() => removeItem(product.id)} sx={{ cursor: 'pointer' }} variant="button">
                  Eliminar
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1" component="div">
                Subtotal: U$S {product.count * product.price} 
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
