import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';


// MEUS IMPORTS
import './style.css';

function BannerCard(){
    return(
        <>
            <div id="carouselExampleControls" className="carousel slide banner-mestre" data-bs-ride="carousel">

                <div className="carousel-inner banner-mestre-img">

                    <div className="carousel-item active banner-img">
                        <img src="https://via.placeholder.com/2050x870.png" className="d-block" alt="Imagem do Banner" />
                    </div>
                    
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon banner-button-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                 </button>

                 <button className="carousel-control-next " type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon banner-button-icon" aria-hidden="true"></span>
                    <span className="visually-hidden ">Next</span>
                </button>

            </div> 

        </>
    );
}

export default BannerCard;
