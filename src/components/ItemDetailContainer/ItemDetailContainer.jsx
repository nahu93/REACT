import React from "react";
import { useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import Item from "../Container/Item";
import { getFetch, productos } from "../helpers/getFetch";
import { ItemDetail } from "./ItemDetail";
import {Card,Button,Col, ThemeProvider} from 'react-bootstrap'
import getFirestore from "../../Firebase/firebase";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";








  const ItemDetailContainer  = ()  => {

 
    const [loading ,setLoading] = useState (true) ;  
    const [ prod , setProd]= useState ({});
    
    const {id} = useParams ();


useEffect (()=> {
    
 
  const db = getFirestore()
  const dbQuery = db.collection('Productos').doc('8ZWNNieXy4HzgfL7Z4y7')
  dbQuery.get()
  .then(resp=> setProd({id:resp.id,...resp.data()}))
  
  
  /* getFetch
  .then ( (res)  => setProd (res.find ( (e) => e.id === parseInt (id) )))
  .finally ( () => setLoading (false)); */

 }, [])


 console.log("info", prod)
 console.log ('id', id)

  


    return ( 
    
   <div>

       <ItemDetail prod={prod}/>

   </div>
    
    );
}

export default ItemDetailContainer