import * as React from 'react';
import { useCartContext } from '../../context/CartContext';
import {Link} from 'react-router-dom';
import ItemCart from '../ItemCart/ItemCart';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import './Cart.css';

const Cart = () => {

  const { cart, getItemPrice } = useCartContext();

  if(cart.length === 0){
    return(
      <>
        <div className="emptyContainer">
          <p>El carrito se encuentra vacío</p>
          <Link to='/' className="linkHome">Volver a Comprar</Link>
        </div>
      </>
    );
  }

  return (
    <>
      {
        cart.map(product => <ItemCart key={product.id} product={product} />)
      }
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
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item>
                  <Typography variant="body2" gutterBottom align="center">
                    Total: U$S {getItemPrice()}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </div>  
    </>
  )
}

export default Cart;