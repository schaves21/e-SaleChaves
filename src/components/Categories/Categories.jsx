import { useEffect, useState } from 'react';
import { collection, getDocs, getFirestore } from 'firebase/firestore';
import Nav from 'react-bootstrap/Nav';
import {Link} from 'react-router-dom';

const Categories = () => {

    const [category, setCategory] = useState([]);

    useEffect(() => {

        const db = getFirestore();

        const categories = collection(db, 'categories');

        getDocs(categories).then((snapshot) => {
            setCategory(snapshot.docs.map((doc) => doc.data().name));
        });
    
    }, []);
    

    return (
        <>
            {
                category.map((cat) =>(
                    <Nav className="me-auto" key={cat}>
                        <Nav.Link as={Link} to={'/categoria/' + cat}>
                            {cat}
                        </Nav.Link>
                    </Nav>
                ))
            }
        </>
    )
}

export default Categories