import React, {useContext} from "react";
import { CartContext } from "../../context/CartContext";


const Cart = ( ) => {


    const{cartList,vaciarCarrito}= useContext(CartContext)

    return (

        <div>

        { cartList.map(prod => <li key={prod.id}> {prod.nombre} {prod.cantidad}</li> ) }

        <button onClick={()=>vaciarCarrito()}>Vaciar</button>

        </div>
    )








}

export default Cart