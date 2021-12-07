import React from "react";
import { Link } from "react-router-dom";
import DetalleWidget from '../ItemDetailContainer/DetalleWidget';
import {Card,Button,Col,Row} from 'react-bootstrap'
import CartWidget from "../NavBar/CartWidget";
import ItemCount from "../ItemCount/ItemCount";

export default function Item ({item}) {

  function onAdd (cant) {
    console.log(cant)
  }

    return (

          

          <Col>
          <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={item.foto} />
          <Card.Body>
            <Card.Title>{item.nombre}</Card.Title>
            <Card.Text>
              {item.precio}$
    
            </Card.Text> 
            <Card.Text>

          <Link to={'/item/'+ item.id}>

             <DetalleWidget/>
             
         </Link>
         </Card.Text>
            <Button variant="primary">Comprar</Button>
            
          
        
           
          </Card.Body>
        </Card>
        

        </Col>
      
    )

}