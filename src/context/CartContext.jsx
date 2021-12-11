import { createContext, useEffect, useState } from "react";

export const CartContext = createContext ([])

function CartContextProvider ({children}) {

    const [cartList,setCartList] = useState ([])

    const agregarProducto = (item) =>{
        setCartList([...cartList, item])
    }

    const vaciarCarrito = () =>{
        setCartList([])
    }

  

    return (
        <CartContext.Provider value={{
            cartList,
            agregarProducto,
            vaciarCarrito
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider