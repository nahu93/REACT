import React, {useEffect , useContext} from "react";
import { CartContext } from "../../context/CartContext";
import {Container,Row,Col,ListGroup,Image,Button,Badge} from 'react-bootstrap'
import { productos } from "../helpers/getFetch";
import { prettyDOM } from "@testing-library/dom";


const Cart = ( ) => {


    const{cartList,vaciarCarrito}= useContext(CartContext)

    let Total = 0;

    

   


    return (

        <div className='align-item-center' >


        { cartList.map( prod => /*<li key={prod.id}> {prod.nombre} {prod.cantidad}</li>*/
        
        <ListGroup horizontal key={prod.id}>
  <ListGroup.Item>
   <Container>
  <Row>
    <Col xs={6} md={4}>
      <Image src={prod.foto} style={{width:'20rem'}} thumbnail />
    </Col>
    </Row>
</Container>
  </ListGroup.Item>
  <ListGroup.Item style={{width:'15rem'}}>{prod.nombre}</ListGroup.Item>
  <ListGroup.Item>{prod.precio}$</ListGroup.Item>
  <ListGroup.Item>{prod.cantidad}</ListGroup.Item>
</ListGroup>

      
 
        ) }
     <div>  
          { 
            cartList.map(
                prod=>{
                  
                        Total = Total + (prod.precio*prod.cantidad)
                        console.log (Total)
                 
   
                }
                
            )
            
        }
         <h2>
    Total=<Badge bg="secondary">${Total}</Badge>
        </h2>
    </div>
       
    
        <Button variant="primary" onClick={()=>vaciarCarrito()}>Borrar</Button>



        </div>
    )



}

export default Cart