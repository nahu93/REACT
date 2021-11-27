import React from "react";
import { Link } from "react-router-dom";
import DetalleWidget from '../ItemDetailContainer/DetalleWidget';

export default function Item ({item}) {

    return (
        <div  className="row aling-item-center">
        <div className="col-12 col-md-4">
           <div key={item.id} className="card w50 mt-5" >
          <div className="card-header">
            {item.nombre}
      
          </div>
          <div className="card-body">
          
          
            <img src={item.foto} alt="foto" />
         
          </div>
      
          <p className="card text"> {item.precio}$</p>
          <div className="card-footer">
            <button className="btn btn-success btn-block">AGREGAR</button>
            <hr />
            <Link to="/item/${item.id}">
                <DetalleWidget/>
            </Link>
         
          </div>
        </div>
       
        </div>
        
        </div>
       
       
    )

}