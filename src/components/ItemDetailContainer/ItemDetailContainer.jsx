import React from "react";
import { useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import { getFetch, productos } from "../helpers/getFetch";
import { ItemDetail } from "./ItemDetail";







const ItemDetailContainer = () => {

    const [productoIndividual , setProductoIndividual]= useState ({});
    const [loading, setLoading] = useState (true);
    const {idProducto} = useParams ();



    

    useEffect (()=>{
        
       const PromesaIndividual = new Promise ((res , rej )=>{
 

        setTimeout(()=>{
            console.log (idProducto)
            res (productos.find (item => item.id  ) )
            
        },2000)
    })
PromesaIndividual.then ((prodEncontrado)=>{
        console.log ('ok');
        setProductoIndividual (prodEncontrado)
    })
   .catch ((error)=>{
       console.log ('ERROR')
   })
   .finally (()=>{
       setLoading(false)
   })
},[idProducto] )



    return (

     <div>
         
    
         <ItemDetail item={productoIndividual}/>
         

     </div>
    )








}

export default ItemDetailContainer