import React from "react";
import styled from "styled-components";
import react from '../images/react.png';
const Projetos = () =>{
    return(
        <>
            <div class="container">
            <div class="row">
                <div class="col-lg-3 col-md-4 col-sm-6" data-toggle="modal" data-target="#modal">
                <a href="#lightbox" data-slide-to="0"/>
                <img src={react}/> </div>
                <div class="col-lg-3 col-md-4 col-sm-6" data-toggle="modal" data-target="#modal">
                <a href="#lightbox" data-slide-to="1"><img src={react}/></a>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6" data-toggle="modal" data-target="#modal">
                <a href="#lightbox" data-slide-to="2"><img src={react}/></a>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6" data-toggle="modal" data-target="#modal">
                <a href="#lightbox" data-slide-to="3"><img src={react}/></a>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6" data-toggle="modal" data-target="#modal">
                <a href="#lightbox" data-slide-to="4"><img src={react}/></a>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6" data-toggle="modal" data-target="#modal">
                <a href="#lightbox" data-slide-to="5"><img src={react}/></a>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6" data-toggle="modal" data-target="#modal">
                <a href="#lightbox" data-slide-to="6"><img src={react}/></a>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6" data-toggle="modal" data-target="#modal">
                <a href="#lightbox" data-slide-to="7"><img src={react}/></a>
                </div>    
            </div>
            </div>
            <div class="modal fade" id="modal" tabindex="-1" role="dialog" aria-labelledby="Lightbox Gallery by Bootstrap 4" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                        <div class="modal-body">
                            <div id="lightbox" class="carousel slide" data-ride="carousel" data-interval="5000" data-keyboard="true">
                                <ol class="carousel-indicators">
                                    <li data-target="#lightbox" data-slide-to="0"></li>
                                    <li data-target="#lightbox" data-slide-to="1"></li>
                                    <li data-target="#lightbox" data-slide-to="2"></li>
                                    <li data-target="#lightbox" data-slide-to="3"></li>
                                    <li data-target="#lightbox" data-slide-to="4"></li>
                                    <li data-target="#lightbox" data-slide-to="5"></li>
                                    <li data-target="#lightbox" data-slide-to="6"></li>
                                    <li data-target="#lightbox" data-slide-to="7"></li>
                                </ol>
                                <div class="carousel-inner">
                                    <div class="carousel-item active"><img src={react}/></div>
                                    <div class="carousel-item"><img src={react}/></div>
                                    <div class="carousel-item"><img src={react}/></div>
                                    <div class="carousel-item"><img src={react}/></div>
                                    <div class="carousel-item"><img src={react}/>=""</div>
                                    <div class="carousel-item"><img src={react}/></div>
                                    <div class="carousel-item"><img src={react}/></div>
                                    <div class="carousel-item"><img src={react}/></div>
                                </div>
                                <a class="carousel-control-prev" href="#lightbox" role="button" data-slide="prev"><span class="carousel-control-prev-icon" aria-hidden="true"></span><span class="sr-only">Previous</span></a>
                                <a class="carousel-control-next" href="#lightbox" role="button" data-slide="next"><span class="carousel-control-next-icon" aria-hidden="true"></span><span class="sr-only">Next</span></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Projetos;