import React from "react";
import Item from "./Item";






export default function ItemLIst (props){


    return (
        <div>
            {
                props.lista.map((item, index)=>{
                    return(
                        
                       <Item key={index} item={item}/>

                   )
                     
                })
            }
        </div>
    )
}