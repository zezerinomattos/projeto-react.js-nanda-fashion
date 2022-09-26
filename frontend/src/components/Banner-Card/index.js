import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';


// MEUS IMPORTS
import './style.css';
import firebase from '../../config/firebase';

function BannerCard({banners}){

    const [urlImagem, setUrlImagem] = useState();
    
    let carregaImg = [];
    let carregaId = [];
    
    (function carregar() {
        banners.map(item => {
            const { key, id, secao, imagem } = item;
            carregaImg = imagem;
            carregaId = id;
 
        });
    })();

    useEffect(() => {
        firebase.storage().ref(`imagens/${carregaImg}`).getDownloadURL()
            .then(url => setUrlImagem(url));      
      
   }, [urlImagem]);
    
    return(
        <>  
            
            <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active" >
                        <img src={urlImagem} class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src={urlImagem} class="d-block w-100" alt="..."/>
                    </div>
                    <div class="carousel-item">
                        <img src={urlImagem} class="d-block w-100" alt="..." />
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
                                       

        </>


    );
}

export default BannerCard;