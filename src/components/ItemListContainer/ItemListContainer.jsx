import React, {useState, useEffect} from 'react';
import './ItemListContainer.css';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';

import productos from '../../ProductData';

const ItemListContainer = ({ greeting }) => {

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);

  const {categoriaId} = useParams();
 
  useEffect(() => {
    const getData = new Promise((resolve, rej) => {
      setTimeout(() => {
        resolve(productos);  
      }, 2000);
    });
    if (categoriaId) {
      getData.then(res => setData(res.filter(producto => producto.category === categoriaId)));
    }else {
      getData.then(res => setData(res));
    }
    getData.catch((error) => {
      setError(true);
      console.log(error);
    });
    getData.finally(() => {
      setLoading(false);
    });
  }, [categoriaId])
  
  return (
    <>
      <h1 className='myH1'>{greeting}</h1>;
      <div className="loading">{loading && 'Cargando...'}</div>
      <div className="error">{error && 'Hubo un error al cargar los Productos'}</div>
      <ItemList data={data} />
    </>
  )

}

export default ItemListContainer;
