import React from "react";
import './index.css';
import react from '../images/react.png';
import js from '../images/js.png';
import html from '../images/html.png';
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
                            <img src={react}/>
                        </div>
                        <div class="col-lg-3 col-md-4 col-sm-6" data-toggle="modal" data-target="#modal">
                            <img src={react}/>  
                        </div>
                        <div class="col-lg-3 col-md-4 col-sm-6" data-toggle="modal" data-target="#modal">
                            <img src={react}/>
                        </div>
                        <div class="col-lg-3 col-md-4 col-sm-6" data-toggle="modal" data-target="#modal">
                            <img src={react}/>  
                        </div>
                        <div class="col-lg-3 col-md-4 col-sm-6" data-toggle="modal" data-target="#modal">
                                <img src={react}/>
                        </div> 
                        <div class="col-lg-3 col-md-4 col-sm-6" data-toggle="modal" data-target="#modal">
                            <img src={react}/>
                        </div>
                        <div class="col-lg-3 col-md-4 col-sm-6" data-toggle="modal" data-target="#modal">
                            <img src={react}/>  
                        </div>
                        <div class="col-lg-3 col-md-4 col-sm-6" data-toggle="modal" data-target="#modal">
                            <img src={react}/>
                        </div>
                        <div class="col-lg-3 col-md-4 col-sm-6" data-toggle="modal" data-target="#modal">
                            <img src={react}/>  
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Bloco;