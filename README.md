
# Proyecto e-SaLe

## Descripción

Este repositorio contiene el proyecto de e-commerce de una tienda de productos tecnológicos, desarrollado en `React JS` y conectado con una base de datos en `Firebase`.

La aplicación consiste en un e-commerce en el cual se pueden filtrar los productos de acuerdo a las categorías, y acceder al detalle de cada producto. Los productos pueden ser agregados al carrito para luego confirmar la compra completando un formulario con los datos personales del usuario.

Los productos, categorías y las órdenes de compra se almacenan en `Firebase`.

El proyecto tiene las siguientes funcionalidades:

1. Es navegable en home y muestra todos los productos disponibles con una imagen, título, precio y stock.
2. Desde el NavBar se puede navegar por las categorías de productos: Celulares, Electrodomésticos,Televisores y Notebooks. También se puede navegar hacia el Carrito para visualizar los productos seleccionados.
3. Al navegar por cada producto muestra el detalle: título, imagen, descripción, categoría, precio y stock. Aquí puede ir agregando el producto al Carrito.
4. Al agregar el producto, puede finalizar la compra navegando al Carrito.
5. Estando en el Carrito se muestra el detalle de todos los productos seleccionados con el total a pagar y podrá emitir la orden de compra. 
6. Para concretar la compra el usuario debe completar el formulario de contacto con el cual la tienda podrá comunicarse con el comprador para coordinar el pago y el envío del producto.

## Se utilizan las siguientes tecnologías/librerías que le aportan valor al proyecto: 

* [React JS](https://reactjs.org/)
* [React Router Dom](https://reactrouter.com/)
* [React-Bootstrap](https://react-bootstrap.github.io/)
* [Material UI](https://mui.com/)
* [SweetAlert](https://sweetalert.js.org/guides/) & [SweetAlert2](https://sweetalert2.github.io/)
* [React-Hook-Form](https://react-hook-form.com/)
* [Firebase](https://firebase.google.com/) & deploy

### React-Bootstrap
Se escogió `React-Bootstrap` como librería para el NavBar agilizando el proceso de desarrollo y estilos del menú de navegación.  
### Material UI
Se escogió `Material UI` como librería de componentes para agilizar el proceso de desarrollo y estilos de la aplicación, como las cards de productos y el carrito.
### SweetAlert
Se escogió `SweetAlert` para añadir alertas personalizadas al usuario cuando intenta realizar una compra incorrecta (cantidad de productos seleccionados supera el stock o cantidad menor que uno).
### React-hook-form
Se escogió `React-hook-form` como librería para la validación de datos en el formulario de compra.
### Firebase
`Firestore Database` como gestor de la base datos para almacenar los productos, categorías y las órdenes de compra emitidas. 

## Como ejecutar el proyecto de forma local:

1. Descargar y descomprimir el repositorio de GitHub: `https://github.com/schaves21/e-SaleChaves`
2. Abrir el proyecto con un editor de código preferentemente `Visual Studio Code`.
3. Ejecutar el comando *npm start*.
4. Abrir `http://localhost:3000` para ver la aplicación desde tu navegador.

## Puede visitar la aplicación en la nube desde [https://e-sale-96fbf.web.app](https://e-sale-96fbf.web.app)

![GIF navegacion](/public/Navegacion.gif "Navegación de la aplicación")

## Consideraciones importantes
Se utilizó el `LocalStorage` para persistir el carrito de los usuarios en sus equipos/dispositivos en el caso de que no finalicen el flujo de compra para mejorar la experiencia de uso.





