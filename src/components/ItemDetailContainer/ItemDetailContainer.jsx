import React, {useState, useEffect} from 'react';
import productos from '../../ProductData';
import './ItemDetailContainer.css';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);

  const {detalleId} = useParams();

  useEffect(() => {
    const getData = new Promise((resolve, rej) => {
      setTimeout(() => {
        resolve(productos);  
      }, 2000);
    });
    getData.then(res => setData(res.find(producto => producto.id === parseInt(detalleId))));
    getData.catch((error) => {
      setError(true);
      console.log(error);
    });
    getData.finally(() => {
      setLoading(false);
    });
  }, [])

  return (
    <>
      <div className="loading">{loading && 'Cargando...'}</div>
      <div className="error">{error && 'Hubo un error en el Producto'}</div>
      <ItemDetail data={data} />
    </>
  )
}

export default ItemDetailContainer;