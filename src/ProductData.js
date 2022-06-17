const productos = [
    {
        id:1,
        category:"notebooks",
        title:"Notebook LENOVO 14'",
        description:"El rendimiento de esta Notebook Lenovo es ideal para realizar tus tareas diarias, estudiar, trabajar o simplemente navegar.",
        pictureURL:"https://d391ci4kxgasl8.cloudfront.net/fit-in/524x480/filters:fill(FFFFFF):quality(90):format(webp)/_img_productos/notebook-lenovo-81wa00fplm-foto1.jpg",
        price:"usd 607.00",
        stock:95
    },
    {
        id:2,
        category:"notebooks",
        title:"Notebook HP NUEVA 14'",
        description:"Con esta notebook HP podrás realizar todo de forma fácil y sin problemas. Cuenta con una pantalla HD de 14, un procesador AMD Athlon Silver 3050U, 4GB de RAM, 128GB SSD y gráficos AMD Radeon.", 
        pictureURL:"https://d391ci4kxgasl8.cloudfront.net/fit-in/524x480/filters:fill(FFFFFF):quality(90):format(webp)/_img_productos/notebook-hp-14-dk1013dx-foto1.jpg",
        price:"usd 499.00",
        stock:70
    },
    {
        id:3,
        category:"notebooks",
        title:"Notebook HP Spectre x360",
        description:"Esta notebook HP viene equipada con una pantalla multitáctil, antirreflectante y OLED de 13,5 con resolución 3K2K (3000 x 2000 px) y microborde de 400 nits.",
        pictureURL:"https://d391ci4kxgasl8.cloudfront.net/fit-in/524x480/filters:fill(FFFFFF):quality(90):format(webp)/_img_productos/notebook-hp-spectre-x360-14-ea0001la-foto-0.jpg",
        price:"usd 2.470",
        stock:65
    },
    {
        id:4,
        category:"celulares",
        title:"Xiaomi Redmi 9C",
        description:"Xiaomi Redmi 9C con un diseño moderno y delicado, cuenta con procesador Octa-Core que te brindará un desempeño óptimo.",
        pictureURL:"https://d391ci4kxgasl8.cloudfront.net/fit-in/524x480/filters:fill(FFFFFF):quality(90):format(webp)/_img_productos/xiaomi-redmi-9c-64gb-verde-foto1.jpg",
        price:"usd 179.00",
        stock:80
    },
    {
        id:5,
        category:"celulares",
        title:"SAMSUNG Galaxy A23",
        description:"Con la tecnología FHD+ y una frecuencia de actualización de 90Hz, el contenido de todos los días se verá más fluido y nítido.",
        pictureURL:"https://d391ci4kxgasl8.cloudfront.net/fit-in/524x480/filters:fill(FFFFFF):quality(90):format(webp)/_img_productos/samsung-a23-128gb-black-foto1.jpg",
        price:"usd 307.00",
        stock:95
    },
    {
        id:6,
        category:"celulares",
        title:"HUAWEI Nova 8i",
        description:"HUAWEI nova 8i te brinda una experiencia visual excepcional y una sensación de agarre superior. Con su pantalla sin bordes de 6.67, obtenés visualización sin límites.",
        pictureURL:"https://d391ci4kxgasl8.cloudfront.net/fit-in/524x480/filters:fill(FFFFFF):quality(90):format(webp)/_img_productos/huawei-nova-8i-foto-azul2.jpg",
        price:"usd 399.00",
        stock:90
    },
    {
        id:7,
        category:"televisores",
        title:"Smart TV LG 43",
        description:"Vas a poder disfrutar del mejor entretenimiento con esta Smart TV LG de 43”, con resolución Full HD y HDR activo que te ofrece imágenes más precisas y con colores más vivos.",
        pictureURL:"https://d391ci4kxgasl8.cloudfront.net/fit-in/524x480/filters:fill(FFFFFF):quality(90):format(webp)/_img_productos/smart-tv-lg-43-fhd-43lm6370psb-foto1-1652706374.jpg",
        price:"usd 457.00",
        stock:100
    },
    {
        id:8,
        category:"televisores",
        title:"Smart TV LG 50",
        description:"Viví una experiencia inmersiva al ver toda clase de contenidos con este Smart TV LG de 50”. Su resolución 4K te permitirá apreciar cada detalle, además, dispone de las principales aplicaciones de streaming para que no te pierdas de nada y disfrutes de cada estreno.",
        pictureURL:"https://d391ci4kxgasl8.cloudfront.net/fit-in/524x480/filters:fill(FFFFFF):quality(90):format(webp)/_img_productos/smart-tv-lg-50-50up7500psf-foto1.jpg",
        price:"usd 679.00",
        stock:101
    },
    {
        id:9,
        category:"televisores",
        title:"Smart TV LG 60",
        description:"Tus contenidos favoritos se verán con una imagen increíble gracias a este Smart TV LG 4K de 60. Tiene una resolución de 3840 x 2160 para brindarte la mejor calidad de imagen sin perderte ningún detalle.",
        pictureURL:"https://d391ci4kxgasl8.cloudfront.net/fit-in/524x480/filters:fill(FFFFFF):quality(90):format(webp)/_img_productos/smart-tv-lg-60-60up7750psb-foto1.jpg",
        price:"usd 957.00",
        stock:103
    },
    {
        id:10,
        category:"electrodomesticos",
        title:"Heladera SAMSUNG RT35",
        description:"Este refrigerador Samsung con Twin Cooling Plus mantiene tus alimentos frescos durante mucho más tiempo a la vez que le brinda un aspecto sobrio y elegante a tu cocina.",
        pictureURL:"https://d391ci4kxgasl8.cloudfront.net/fit-in/524x480/filters:fill(FFFFFF):quality(90):format(webp)/_img_productos/refrigerador-samsung-rt35-rt35k573bsl-foto1.jpg",
        price:"usd 927.00",
        stock:50
    },
    {
        id:11,
        category:"electrodomesticos",
        title:"Batidora Planetaria BM101",
        description:"Con esta batidora planetaria Peabody podrás hacer toda clase de preparaciones, logrando que los ingredientes se integren de forma homogénea y sin esfuerzo en masas de pan, cremas, merengues y más.",
        pictureURL:"https://d391ci4kxgasl8.cloudfront.net/fit-in/524x480/filters:fill(FFFFFF):quality(90):format(webp)/_img_productos/batidora-planetaria-peabody-pe-bm101-plateado-foto1.jpg",
        price:"usd 187.00",
        stock:55
    },
    {
        id:12,
        category:"electrodomesticos",
        title:"Lavarropas SAMSUNG",
        description:"Dejá tus prendas limpias e impecables con este lavarropas Samsung con una capacidad de 10kg. Su tecnología Inverter te permite mejorar el uso de energía mientras ahorrás.",
        pictureURL:"https://d391ci4kxgasl8.cloudfront.net/fit-in/524x480/filters:fill(FFFFFF):quality(90):format(webp)/_img_productos/lavarropas-samsung-ww10t554dan-foto1.jpg",
        price:"usd 897.00",
        stock:20
    }
  ]

  export default productos;