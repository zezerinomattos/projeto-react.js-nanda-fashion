import React, { useState, useEffect } from "react";
import {Link} from "react-router-dom";


//MEUS INPORTS
import './style.css';
import firebase from '../../config/firebase';

function ProdutoCard({key, id, titulo, descricao, promocao, valor, img}){

    const [urlImagem, setUrlImagem] = useState();
    
    useEffect(() => {
        firebase.storage().ref(`imagens/${img}`).getDownloadURL()
                .then(url => setUrlImagem(url));       
    }, [urlImagem]);

    return(
        <div className="col-md-3 col-sm-12 ">
            <div className="card-img-mestre">
                <img src={urlImagem} className="card-img-top img-cartao" alt={img} />
            </div>
                                 
            <div className="card-body">
                <h5 className="card-title mt-2 mb-2 card-titulo" >{titulo}</h5>
                <p className="card-text text-justify">{descricao}</p>
                <div className="valores d-flex mb-3">
                    <span className="valor-por me-2">R${promocao}</span>
                    <div className="valor-mestre-de">
                        <hr/>
                        <span className="valor-de ms-2">R${valor}</span>
                    </div>
                </div>
                <div className="row rodape-card align-items-center">
                    <div className="col-12">
                        <Link to={'/produtosdetalhes/' + id} className="btn btn-sm btn-detalhes mb-2">+ DETALHES</Link>
                    </div>
                </div>
                
            </div>

        </div>
    );
}

export default ProdutoCard;