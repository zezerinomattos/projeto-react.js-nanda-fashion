import React, {useState, useEffect} from "react";
import { useSelector } from 'react-redux';
import { Link} from 'react-router-dom';
import 'firebase/auth';


//Meus Imports
import './style.css';
import firebase from '../../config/firebase';
import Navbar from '../../components/Header';
import Footer from '../../components/Footer';

function ProdutosDetalhes(){
    return(
        <>
            <Navbar />

            <div className="container-fluid text-center">
                <div className="row">
                    <img src="https://via.placeholder.com/150x100" className="img-produto" alt=""  />
                </div>

                <div className="mt-2 detalhes-mestre">
                    <div className="col-md-3 col-sm-12 box-info p-3 my-2">
                        <h3>Vestido</h3>
                    </div>

                    <div className="col-md-3 col-sm-12 box-info p-3 my-2">
                        <h3 className="my-3">Valor</h3>
                        <h2><strong>R$49,90</strong></h2>
                    </div>

                    <Link to='#' className="btn-comprar my-5" ><strong>COMPRAR</strong></Link>

                    <div className="row box-detalhes mt-5">
                        <h5 className="text-center mt-5"><strong>Detalhes do Produtos</strong></h5>
                        <p className="text-justify p-4">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </p>
                    </div>
                </div>

                <Link to='' className="btn-editar my-5" ><ion-icon name="create-outline"></ion-icon></Link>

            </div>

            <Footer />

        </>
    );
}

export default ProdutosDetalhes;