import React, { useState } from "react";
import { useSelector } from 'react-redux';
import 'firebase/auth';

// MEUS IMPORTS
import './style.css';
import firebase from "../../config/firebase";
import Header from "../../components/Header"

function CadastrarBanners(){

    const [msgTipo, setMsgTipo] = useState();
    const [carregando, setCarregando] = useState();
    
    const [nomeProduto, setNomeProduto] = useState();
    const [secao, setSecao] = useState();
    const [imagem, setImagen] = useState();
    const usuárioEmail = useSelector(state => state.usuarioEmail);

    const storage = firebase.storage();
    const db = firebase.firestore();

    function cadastrarBanner(){
        setMsgTipo(null);
        setCarregando(1);

        storage.ref(`imagens/${imagem.name}`).put(imagem)
            .then(() => {
                db.collection('nanda_fashion').add({   
                    nomeProduto: nomeProduto,
                    secao: secao,              
                    usuario: usuárioEmail,
                    visualizacoes: 0,
                    imagem: imagem.name,
                    criacao: new Date()
                });
            })
            .then(() => {
                setMsgTipo('sucesso');
                setCarregando(0);
            })
            .catch(erro => {
                setMsgTipo('erro');
                setCarregando(0);
            });
    }

    return(
        <>
            <Header />
            <div className="col-12 cadastro-titulo">
                <div className="row">
                    <h3 className="mt-5 text-center font-weight-bold">Cadastro de Banners</h3>
                </div>
            </div>

            <form className="col-10 my-3 mx-auto">
                <div className="form-group my-4">
                    <label>Nome do Produto</label>
                    <input type="text" className="form-control" onChange={(e) => setNomeProduto(e.target.value)}/>
                </div>

                <div className="form-group col-2 mb-5">
                    <label>Seção do Banner</label>
                    <select type="text" className="form-control" onChange={(e) => setSecao(e.target.value)}>
                        <option disabled selected value >---Selecione um Tipo--</option>
                        <option>Home-Inicio</option>
                        <option>Home-Mais-Vendidos</option>
                        <option>Home-Pijamas</option>
                        <option>Home-Sex-Shop</option>
                    </select>                  
                </div>

                <div className="form-group mb-5">
                    <label>Upload da Imagem</label>
                    <input type="file" className="form-control"  onChange={(e) => setImagen(e.target.files [0])}/>
                    {console.log(imagem)}
                </div>

                <div className="row">
                    {
                        carregando > 0 ? <div class="spinner-border text-warning text-center" role="status"><span class="visually-hidden">Loading...</span></div>
                        : <button className="btn-login w-100 btn btn-lg btn-primary my-1" type="button" onClick={cadastrarBanner}>Publicar Produto</button>
                    }
                </div>

            </form>

            <div className='msg-login my-5 text-center'>
                    {msgTipo === 'sucesso' && <span><strong>Wow! </strong>Produto Publicado!</span>}
                    {msgTipo === 'erro' && <span><strong>Ops! </strong>Não foi possivel publicar esse produto!</span>}
            </div>

        </>
    );
}

export default CadastrarBanners;