
import { useEffect, useState } from 'react';
import { getFetch } from '../helpers/getFetch';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemCount from '../ItemCount/ItemCount';





const Greeting  = () => {

  const [products, setProducts] = useState ([])
  const [loading,  setLoading] = useState (true)
  const [bool,setBool] = useState(true)
  
  useEffect (()=>{
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
  products.map ( prod =><div  className="row">
  <div className="col-sm-3">
     <div key={prod.id} className="card w50 mt-5" >
    <div className="card-header">
      {prod.nombre}

    </div>
    <div className="card-body">
      <img src="" alt="foto" />
    </div>

    <p className="card text"> {prod.precio}$</p>
    <div className="card-footer">
      <button className="btn btn-outline-primary btn-block">AGREGAR</button>

    </div>
  </div>
 
  </div>
  
  </div>

    )

    

    

 )

  
   
}


export default Greeting 
