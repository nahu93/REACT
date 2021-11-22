import React, { useState } from "react";

const ItemCount = ({initial, stock, onAdd}) => {

const [count,setCount] = useState (1)

function Sumar (){
    if (count<stock) {
        setCount(count + 1)
    }
}

function Restar () {
    setCount(count-1)
}

function Agregar (){
    onAdd (count)
    setCount (1)
}

return (

    <>
    <section>
        <button onClick={Sumar}>+</button>
        {count}
        <button onClick={Restar}>-</button>

        <button onClick={Agregar}>Agregar al carrito</button>
        

    </section>


    </>
)



}

export default ItemCount