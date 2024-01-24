import { useState } from "react";

const Contador = () => {
    const [contador, setContador] = useState(1)
    
    const sumar =()=>{
        setContador(contador + 1)
    };
    const restar =()=>{
        setContador(contador - 1)
    };

    return(
        <div>
            <button onClick={restar}>-</button>
            <h2>{contador}</h2>
            <button onClick={sumar}>+</button>
        </div>
    );

};

export default Contador