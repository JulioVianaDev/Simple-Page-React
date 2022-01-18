import React from "react";
import styled from "styled-components";

let Rodape =()=>{
    return(
        <>
           <Rodopio> 
               <p>
                Desenvolvido por <a href="http://github.com/juliovianadev">Julio Viana Dev</a>
               </p>
            </Rodopio>
        </>
    )
}

export default Rodape;

const Rodopio = styled.div`
    background-color:black;
    width:50vw;
    height:11.5vh;
    text-align:right;
    padding-right:10px;
    a{
        color:white;
    };
    p{
        color:white;
        padding-top:22px;
    };
`;