import React from "react";
import Cards from "./Cards";



export default props =>{
    const {texto, nota, aluno} = props
    return(
        <Cards title={texto} green>
            <div>
                <span>
                    <span>{aluno} sua nota : {nota}</span>
                    
                </span>
            </div>
        </Cards>
    )
}