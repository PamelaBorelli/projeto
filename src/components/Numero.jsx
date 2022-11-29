import "./Numero.css"
import React from "react"

import Cards from "./Cards"

export default props =>{
    const {num} = props
    return(
        <Cards title ="Escolha seu número: " blue>
        <div className="Numero">
            <span>
            Numero:
            <input type="number" value={num} onChange = {e => props.onMinChanged(+e.target.value)} />
            </span>

            
        </div>
        </Cards>
    )
}