import React, { useState } from "react";
import { useSelector } from 'react-redux';
import 'firebase/auth';

// MEUS IMPORTS
import './style.css';
import firebase from "../../config/firebase";
import Header from "../../components/Header"


function CadastrarProdutos (){

    const [msgTipo, setMsgTipo] = useState();
    const [carregando, setCarregando] = useState();

    const [nomeProduto, setNomeProduto] = useState();
    const [descricao, setDescricao] = useState();
    const [tipo, setTipo] = useState();
    const [destacar, setDestacar] = useState();
    const [secaoDestacar, setSecaoDestacar] = useState();
    const [valor, setValor] = useState();
    const [promocao, setPromocao] = useState();
    const [imagem, setImagen] = useState();
    const usuárioEmail = useSelector(state => state.usuarioEmail);

    const storage = firebase.storage();
    const db = firebase.firestore();

    function cadastrarProduto(){
        setMsgTipo(null);
        setCarregando(1);

        storage.ref(`imagens/${imagem.name}`).put(imagem)
            .then(() => {
                db.collection('nanda_fashion').add({
                    nomeProduto: nomeProduto,
                    descricao: descricao,
                    tipo: tipo,
                    destacar: destacar,
                    secaoDestacar: secaoDestacar,
                    valor: valor,
                    promocao: promocao,
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
                    <h3 className="mt-5 text-center font-weight-bold">Cadastro de Produtos</h3>
                </div>
            </div>

            <form className="col-10 my-3 mx-auto">
                <div className="form-group my-4">
                    <label>Nome do Produto</label>
                    <input type="text" className="form-control" onChange={(e) => setNomeProduto(e.target.value)}/>
                </div>

                <div className="form-group mb-5">
                    <label>Descrição do Produto</label>
                    <textarea type="text" className="form-control" rows='5' onChange={(e) => setDescricao(e.target.value)} />
                </div>

                <div className="form-group d-flex mb-4">    
                    <div className="form-group col-2">
                        <label>Tipo do Produto</label>
                        <select type="text" className="form-control" onChange={(e) => setTipo(e.target.value)}>
                            <option disabled selected value >---Selecione um Tipo--</option>
                            <option>Feminino</option>
                            <option>Masculino</option>
                            <option>Calçados</option>
                        </select>                  
                    </div>

                    <div className="form-group col-2 mx-5">
                        <label>Destacar em Home</label>
                        <select type="text" className="form-control" onChange={(e) => setDestacar(e.target.value)}>
                            <option disabled selected value >---Selecione--</option>
                            <option>Sim</option>
                            <option>Não</option>
                        </select>                  
                    </div>

                    {
                        destacar === 'Sim' ? <div className="form-group col-2 mx-5 secaoDestacar ">                      
                            <label>Qual seção destacar</label>
                            <select type="text" className="form-control" onChange={(e) => setSecaoDestacar(e.target.value)}>
                                <option disabled selected value >---Selecione--</option>
                                <option>Ofertas</option>
                                <option>Tendência</option>
                                <option>Mais vendidos</option>
                                <option>Pijamas e Lingerie</option>
                                <option>Sex Shop</option>
                            </select>                  
                        </div>

                        :

                        <div className="form-group col-2 mx-5 secaoDestacar d-none "></div>
                    }


                </div>


                <div className="form-group d-flex mb-4">
                    <div className="col-2">
                        <label>Valor</label>
                        <input type="text" className="form-control" placeholder="00,00" onChange={(e) => setValor(e.target.value)}/>
                    </div>
                    <div className="col-2 mx-5">
                        <label>Promoção</label>
                        <input type="text" className="form-control" placeholder="00,00" onChange={(e) => setPromocao(e.target.value)}/>
                    </div>
                </div>

                <div className="form-group mb-5">
                    <label>Upload da Imagem</label>
                    <input type="file" className="form-control" onChange={(e) => setImagen(e.target.files [0])}/>
                </div>
                
                <div className="row">
                    {
                        carregando > 0 ? <div class="spinner-border text-warning text-center" role="status"><span class="visually-hidden">Loading...</span></div>
                        : <button className="btn-login w-100 btn btn-lg btn-primary my-1" type="button" onClick={cadastrarProduto}>Publicar Produto</button>
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

export default CadastrarProdutos;