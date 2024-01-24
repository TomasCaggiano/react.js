import React from 'react' 
import Contador from '../contador/contador'

const Product = ((img,title,descripcion, precio)) => {
    return (
        <div>
            <img src={img} width="30px" height="30px"  alt="img" />
            <h1>{title}</h1>
            <p>{descripcion}</p>
            <p>${precio}</p>
            <Product/>
        </div>
    );
};

export default Product