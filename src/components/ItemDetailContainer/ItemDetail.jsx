import react from 'react'
import ItemCount from '../ItemCount/ItemCount'



export const ItemDetail = ({item}) =>{


    return (
        <div>
             <img src={item.foto} alt="foto" />
             <h3>{item.nombre}</h3>
             <p>{item.precio}$</p>
             <ItemCount  count= {1} stock ={11} />
             
        </div>
    )
}