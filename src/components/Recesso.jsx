import React from "react";
import Cards from "./Cards";


export default props =>{
    const {num} = props
    return(
        <Cards title="Está chegando..." blue>
            <div>
                <span>
                    <span>Estarei de recesso em {num + 10} dias</span>
                    
                </span>
            </div>
        </Cards>
    )
}