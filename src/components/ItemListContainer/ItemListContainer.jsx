import React, {useState, useEffect} from 'react';
import './ItemListContainer.css';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import {collection, getDocs, getFirestore, query, where} from 'firebase/firestore';
import Spinner from 'react-bootstrap/Spinner'

const ItemListContainer = ({ greeting }) => {

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);

  const {categoriaId} = useParams();
 
  useEffect(() => {

    const db = getFirestore();
    const productsCollection = collection(db, 'products');
    
    if(categoriaId){
      const consulta = query(productsCollection, where('category', '==', categoriaId));

      getDocs(consulta)
        .then (snapshot => {
          setData(snapshot.docs.map((doc) =>( { ...doc.data(), id: doc.id })));
        })
        .catch((error) => {
          setError(error);
        })
        .finally(() =>{
          setLoading(false); 
        });
    } else {
      getDocs(productsCollection)
      .then (snapshot => {
        setData(snapshot.docs.map((doc) =>( { ...doc.data(), id: doc.id })));
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() =>{
        setLoading(false); 
      });
    }
  }, [categoriaId]);
  
  return (

    <>

      <h1 className='myH1'>
        {greeting}
      </h1>

      <div className="loading">
        {loading && <Spinner animation="border" size="sm" />}
        {loading && <Spinner animation="border" />}
        {loading && <Spinner animation="grow" size="sm" />}
        {loading && <Spinner animation="grow" /> }
      </div>

      <div className="error">
        {error && 'Hubo un error al cargar los Productos'}
      </div>

      <ItemList data={data} />

    </>

  )

}

export default ItemListContainer;
