import { useState } from "react";

const Card = ()=>{
    const [valor,setValor] = useState(0);
    return(
        <>
            <div className="card">
                <div className="card-header">
                    meu primeiro card
                </div>
                <div className="card-body">
                    <button 
                        type="button"
                        class="btn btn-success"
                        onClick={(event) =>{setValor(event.target.value +1)}}
                    >
                        Adicionar
                    </button>
                    <button type="button" class="btn btn-danger">Retirar</button>
                <p>{valor}</p>
                </div>
            </div>
        </>
    )
}

export default Card;