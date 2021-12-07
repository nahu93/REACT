import React from "react";
import { useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import Item from "../Container/Item";
import { getFetch, productos } from "../helpers/getFetch";
import { ItemDetail } from "./ItemDetail";
import {Card,Button,Col, ThemeProvider} from 'react-bootstrap'







  const ItemDetailContainer  = ()  => {

 
    const [loading ,setLoading] = useState (true) ;  
    const [ prod , setProd]= useState ({});
    const {id} = useParams ();


useEffect (()=> {
        
  getFetch
  .then ( (res)  => setProd (res.find ( (e) => e.id === parseInt (id) )))
  .finally ( () => setLoading (false));  
 }, [id])


 console.log("info", prod)
 console.log ('id', id)

  


    return ( 
    
   <div>

       <ItemDetail prod={prod}/>

   </div>
    
    );
}

export default ItemDetailContainer