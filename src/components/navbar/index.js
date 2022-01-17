import React from "react";
import styled from 'styled-components';
import tomateImg from '../images/tomato.png';
import gitImg from '../images/github.png'
let Navbar = () =>{
    return(
        <>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <div class="container-fluid">
                    <a class="navbar-brand" href="github.com/JulioVianaDev"><GitImg alt="Tomate" src={gitImg}/>Tomate</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarText">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="#">Animes Favoritos</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="#">Áreas de conhecimento</a>
                        </li>
                    </ul>
                    <span class="navbar-text">
                       Se a vida te der um tomate, faça vinagrete!<Tomateimg alt="tomate" src={tomateImg}/>
                    </span>
                    </div>
                </div>
            </nav>
        </>
    )
}


export default Navbar;

const Tomateimg = styled.img`
    width:20px;
    height:20px;
`;

const GitImg = styled.img`
    width:20px;
    height:20px;
`;