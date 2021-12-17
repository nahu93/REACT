
import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link, NavLink} from 'react-router-dom'
import { getFetch } from '../helpers/getFetch';
import ItemLIst from './ItemLIst';
import getFirestore from '../../Firebase/firebase';







const Greeting  = () => {

  const [products, setProducts] = useState ([])
  const [loading,  setLoading] = useState (true)
  
  
  useEffect ( () => {

    const db = getFirestore ()
    const dbQuery = db.collection('Productos')
    dbQuery.get ()
    .then (data => setProducts(data.docs.map(item =>({id: item.id,...item.data()}))))

},[])



/*
    getFetch
    .then (data => {
      console.log ('llamada API')
      setProducts (data)
    })
    .catch (err =>console.log (err))
    .finally (() =>setLoading(false))
    return () => {
      console.log ('clean')
    }

*/
  


 return(
   <div>
     {
       <ItemLIst lista={products} />
     }
   </div>
  

  

 )

  
   
}


export default Greeting 
