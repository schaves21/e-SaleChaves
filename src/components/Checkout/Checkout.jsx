import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useCartContext } from '../../context/CartContext';
import { collection, addDoc, getFirestore } from 'firebase/firestore';
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './Checkout.css';


const Checkout = () => {

    const { cart, getItemPrice, clear } = useCartContext();

    const { register, handleSubmit, formState: { errors } } = useForm() 

    const [sentOrder, setSentOrder] = useState(false);
    const [orderId, setOrderId] = useState('');
    const [error, setError] = useState(false);
    
    const customSubmit = (data, e) => {

        const db = getFirestore();
        const orderCollection = collection (db, 'orders');

        const order = {
            buyer: data,
            items: cart.map(product => ({ id: product.id, title: product.title, price: product.price, count: product.count})),
            total: getItemPrice(),
            status: 'Generada',
            fecha: new Date()
        }

        addDoc(orderCollection, order)
            .then(({id}) => {
                setOrderId(id);
                setSentOrder(true);
                clear();
                e.target.reset();
        })
            .catch((err) => {
                setError(error);
            })
    }

    return (

        <>
            {sentOrder ? (

                <div className="ordenFirebase">
                    <h1 className="h1">¡Gracias por tu pedido!</h1>
                    <h3 className="h3">Tu número de pedido es: {orderId}</h3>
                    <p className="pMensaje">Nos pondremos en contacto para coordinar el pago y el envío</p>
                    <Link to='/' className="linkHome">Volver</Link>
                </div>

            ) : (

                <div className="contactForm">

                    <Form onSubmit={ handleSubmit(customSubmit) } className="form">

                        <h2 className="h2">Para finalizar tu compra completa el Formulario</h2>

                        <Form.Group className="mb-3" controlId="Name">
                            <Form.Control 
                                type="text" {...register('name',{ required: true })}
                                placeholder="Ingrese su Nombre" 
                            />
                            {errors.name?.type === 'required' && <small className='fail'>El campo no puede estar vacío</small>}
                        </Form.Group>
                        
                        <Form.Group className="mb-3" controlId="LastName">
                            <Form.Control 
                                type="text" {...register('lastName',{ required: true })}  
                                placeholder="Ingrese su Apellido"
                            />
                            {errors.lastName?.type === 'required' && <small className='fail'>El campo no puede estar vacío</small>}
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="Email">
                            <Form.Control 
                                type="email" {...register('mail',{ required: true, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i })}
                                placeholder="Ingrese su Email"
                            />
                            {errors.mail?.type === 'required' && <small className='fail'>El campo no puede estar vacío</small>}
                            {errors.mail?.type === 'pattern' && <small className='fail'>Formato de Email incorrecto</small>}
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="Phone">
                            <Form.Control 
                                type="text" {...register('phone',{ required: true, pattern: /^09[0-9]{7}$/gm })}
                                placeholder="Ingrese su Celular"
                            />
                            {errors.phone?.type === 'required' && <small className='fail'>El campo no puede estar vacío</small>}
                            {errors.phone?.type === 'pattern' && <small className='fail'>Formato de celular incorrecto</small>}
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="Address">
                            <Form.Control 
                                type="text" {...register('address',{ required: true })} 
                                placeholder="Ingrese su Domicilio"
                            />
                            {errors.address?.type === 'required' && <small className='fail'>El campo no puede estar vacío</small>}
                        </Form.Group>
        
                        <Button type="submit" className="buttonSent" variant="light">Confirmar</Button>

                    </Form>
                </div>
            )}
        </>
    )
}

export default Checkout;