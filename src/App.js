import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import Contact from './components/NavBar/Contact'; 
import Footer from './components/Footer/Footer'; 
import MyProvider from './context/CartContext';

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <>
      <div className="page-container">
        <div className="content-wrap">
          <BrowserRouter>
            <MyProvider>
              <NavBar /> 
                <Routes>
                  <Route path='/' element={<ItemListContainer greeting={'Bienvenidos al sitio con las mejores ofertas en tecnología'} />} />
                  <Route path='/home' element={<ItemListContainer />} />
                  <Route path='/categoria/:categoriaId' element={<ItemListContainer />} /> 
                  <Route path='/detalle/:detalleId' element={<ItemDetailContainer />} />
                  <Route path='/contacto' element={<Contact />} />
                  <Route path='/carrito' element={<Cart />} />
                  <Route path='*' element={<h1>PAGE NOT FOUND</h1>} />
                </Routes>
              <Footer />
            </MyProvider>
          </BrowserRouter>
        </div>
      </div>
    </>
  );
  
}

export default App;