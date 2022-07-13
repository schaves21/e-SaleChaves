import React, {useState, useEffect} from 'react';
import './ItemDetailContainer.css';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
import { doc, getDoc, getFirestore } from 'firebase/firestore';
import Spinner from 'react-bootstrap/Spinner';

const ItemDetailContainer = () => {

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);

  const {detalleId} = useParams();

  useEffect(() => {

    const db = getFirestore();

    const oneProduct = doc(db, 'products', detalleId )

    getDoc(oneProduct).then((snapshot) => {
      setData( { ...snapshot.data(), id: snapshot.id } );  
    })
    .catch((error) => {
      setError(error);
    })
    .finally(() =>{
      setLoading(false); 
    });
  }, [detalleId])

  return (
    
    <>
      <div className="loading">
        {loading && <Spinner animation="border" size="sm" />}
        {loading && <Spinner animation="border" />}
        {loading && <Spinner animation="grow" size="sm" />}
        {loading && <Spinner animation="grow" /> }
      </div>

      <div className="error">
        {error && 'Hubo un error en el Producto'}
      </div>

      <ItemDetail detail={data} id={detalleId} />
    </>
  )
}

export default ItemDetailContainer;