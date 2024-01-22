import React from 'react' 
import Contador from '../contador/contador'

const Product = (img,title,descripcion,precio) => {
    return (
        <div>
            <img src={img} width="30px" height="30px"  alt="img1" />
            <h1>{title}</h1>
            <p>{descripcion}</p>
            <p>${precio}</p>
        <div><button onClick={restar}>-</button>
            <h2>{contador}</h2>
            <button onClick={sumar}>+</button></div>
        </div>
    )
}

export default Product