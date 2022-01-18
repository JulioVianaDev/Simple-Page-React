import React from "react";
import styled from 'styled-components';
import eu from '../images/tomateanime.png';
import './pessoa.css';
let Navbar = () =>{
    return(
    <>  
        <div className="Esquerda">
            <center>
                <figure className="avatar">
                    <Tomateimg src={eu} alt="carregando"/>
                </figure>
            </center>
        </div>
    </>
    )
}


export default Navbar;

const Tomateimg = styled.img`
    width:25vw;
    height:80vh;
    background-image: url('../images/fogos.jpg');
`;
