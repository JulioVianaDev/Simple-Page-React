import React from "react";
import './index.css';
import styled from "styled-components";

import react from '../images/react.png';
import js from '../images/js.png';
import html from '../images/html.png';
import python from '../images/python.png';
import ruby from '../images/ruby.png';
import css from '../images/csss.png';
import git from '../images/gitlogo.png';
import docker from '../images/docker.png';
import gitflow from '../images/gitflow.png';
import labview from '../images/labview.png';
import rn from '../images/react-native.png';
import arduino from '../images/arduino.png';
import react2 from '../images/react2.png';
import mongodb from '../images/mongodb.png';
import sql from '../images/SQL.png';
import php from '../images/php.png';
import rest from '../images/rest.png'
let Bloco =()=>{
    return(
        <>
        <div className="divgeral">
            <div id="blocoB" className="div">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-3 col-md-4 col-sm-6 " data-toggle="modal" data-target="#modal">
                        
                        <img src={react}/> </div>
                        <div class="col-lg-3 col-md-4 col-sm-6" data-toggle="modal" data-target="#modal">
                            <img src={js}/>
                        </div>
                        <div class="col-lg-3 col-md-4 col-sm-6" data-toggle="modal" data-target="#modal">
                            <img src={html}/>
                        </div>
                        <div class="col-lg-3 col-md-4 col-sm-6" data-toggle="modal" data-target="#modal">
                            <img src={python}/>
                        </div>
                        <div class="col-lg-3 col-md-4 col-sm-6" data-toggle="modal" data-target="#modal">
                            <img src={ruby}/>  
                        </div>
                        <div class="col-lg-3 col-md-4 col-sm-6" data-toggle="modal" data-target="#modal">
                            <img src={css}/>
                        </div>
                        <div class="col-lg-3 col-md-4 col-sm-6" data-toggle="modal" data-target="#modal">
                            <img src={git}/>  
                        </div>
                        <div class="col-lg-3 col-md-4 col-sm-6" data-toggle="modal" data-target="#modal">
                                <img src={docker}/>
                        </div> 
                        <div class="col-lg-3 col-md-4 col-sm-6" data-toggle="modal" data-target="#modal">
                            <img src={gitflow}/>
                        </div>
                        <div class="col-lg-3 col-md-4 col-sm-6" data-toggle="modal" data-target="#modal">
                            <img src={labview}/>  
                        </div>
                        <div class="col-lg-3 col-md-4 col-sm-6" data-toggle="modal" data-target="#modal">
                            <ReactAndroid src={react2} alt=""/>
                        </div>
                        <div class="col-lg-3 col-md-4 col-sm-6" data-toggle="modal" data-target="#modal">
                            <img src={arduino}/>  
                        </div>
                        <div class="col-lg-3 col-md-4 col-sm-6 " data-toggle="modal" data-target="#modal">
                            <img src={sql}/> 
                        </div>
                        <div class="col-lg-3 col-md-4 col-sm-6" data-toggle="modal" data-target="#modal">
                            <img src={mongodb}/>
                        </div>
                        <div class="col-lg-3 col-md-4 col-sm-6" data-toggle="modal" data-target="#modal">
                            <img src={php}/>
                        </div>
                        <div class="col-lg-3 col-md-4 col-sm-6" data-toggle="modal" data-target="#modal">
                            <img src={rest}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Bloco;

const ReactAndroid = styled.img`
    background-image: url('../images/react2.png');
    border-radius:50%;
`;