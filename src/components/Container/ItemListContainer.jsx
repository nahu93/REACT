
import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link, NavLink} from 'react-router-dom'
import { getFetch } from '../helpers/getFetch';
import ItemLIst from './ItemLIst';
import { getFirestore } from 'firebase/firestore';






const Greeting  = () => {

  const [products, setProducts] = useState ([])
  const [loading,  setLoading] = useState (true)
  const [bool,setBool] = useState(true)
  
  useEffect (()=>{
/*
    const db = getFirestore ()
  const itemCollection =db.collection('Productos')
  itemCollection.get ()
  .then(QuerySnapshot=>{
    if(QuerySnapshot.size ===0){
      console.log('No results')
    }
    setProducts(QuerySnapshot.docs.map(doc=>doc.data()))
  })
  .catch(error=>console.log(error))
  .finally(()=>setLoading(false))
*/

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


  },[])


 return(
   <div>
     {
       <ItemLIst lista={products} />
     }
   </div>
  

  

 )

  
   
}


export default Greeting 
