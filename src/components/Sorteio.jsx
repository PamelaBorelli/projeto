import React from "react";
import Cards from "./Cards";


export default props =>{
    const {num} = props
    const {zero} = 0
    const aleatorio = parseInt(Math.random (zero) * (num)) 
    return(
        <Cards title="Sorteio dos números 0 a N" purple >
            <div>
                <span>
                    <span>Resultado: {aleatorio} </span>
                
                </span>
            </div>
        </Cards>
    )
}