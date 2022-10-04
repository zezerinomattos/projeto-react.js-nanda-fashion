import React, {useState, useEffect} from "react";
import { useSelector } from 'react-redux';
import { Link, useParams} from 'react-router-dom';
import 'firebase/auth';


//Meus Imports
import './style.css';
import firebase from '../../config/firebase';
import Navbar from '../../components/Header';
import Footer from '../../components/Footer';

function ProdutosDetalhes(){

    const[produto, setProduto] = useState({});
    const[urlImagem, setUrlImagem] = useState({});
    const{id} = useParams();
    const usuarioLogado = useSelector(state => state.usuarioLogado);
    const [carregando, setCarregando] = useState(1);

    useEffect(() => {
        if(carregando){

            firebase.firestore().collection('nanda_fashion').doc(id).get()
                .then(resultado => {
                    setProduto(resultado.data())

                    //Incremento de Visualizações
                    firebase.firestore().collection('nanda_fashion').doc(id).update('visualizacoes', resultado.data().visualizacoes + 1)

                    firebase.storage().ref(`imagens/${resultado.data().imagem}`).getDownloadURL()
                        .then(url => {
                            setUrlImagem(url);
                            setCarregando(0);
                        });
                });
        }else{
            firebase.storage().ref(`imagens/${produto.imagem}`).getDownloadURL()
                .then(url => setUrlImagem(url));
        }
    }, []);

    return(
        <>
            <Navbar />

            <div className="container-fluid text-center">
                {carregando ?
                    <div className="row mt-5"><div class="spinner-border text-warning text-center" role="status"><span class="visually-hidden">Loading...</span></div></div>
                :

                    <div>
                        <div className="row">
                            <img src={urlImagem} className="img-produto" alt={produto.imagem}  />
                        </div>

                        <div className="mt-2 detalhes-mestre">
                            <div className="col-md-3 col-sm-12 box-info p-3 my-2">
                                <h3>{produto.nomeProduto}</h3>
                            </div>

                            <div className="col-12 mt-1 text-right visualizações">
                                <ion-icon name="eye-outline"></ion-icon><span className="">{produto.visualizacoes + 1}</span>
                            </div> 

                            <div className="col-md-3 col-sm-12 box-info p-3 my-2">
                                <h3 className="my-3">Valor</h3>
                                <h2><strong>R${produto.promocao}</strong></h2>
                            </div>

                            <Link to='#' className="btn-comprar my-5" ><strong>COMPRAR</strong></Link>

                            <div className="row box-detalhes mt-5">
                                <h5 className="text-center mt-5"><strong>Detalhes do Produtos</strong></h5>
                                <p className="text-justify p-4">{produto.descricao}</p>
                            </div>
                        </div>

                        {
                            usuarioLogado ?
                                <Link to='' className="btn-editar my-5" ><ion-icon name="create-outline"></ion-icon></Link>
                            : ""
                        }

                    </div>
                }

            </div>

            <Footer />

        </>
    );
}

export default ProdutosDetalhes;