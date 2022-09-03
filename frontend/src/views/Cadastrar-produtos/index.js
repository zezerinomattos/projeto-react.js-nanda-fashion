import React, { useState } from "react";
import 'firebase/auth';

// MEUS IMPORTS
import './style.css';
import firebase from "../../config/firebase";
import Header from "../../components/Header"


function CadastrarProdutos (){

    const [msgTipo, setMsgTipo] = useState();

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
                    <input type="text" className="form-control"/>
                </div>

                <div className="form-group mb-5">
                    <label>Descrição do Produto</label>
                    <textarea type="text" className="form-control" rows='5' />
                </div>

                <div className="form-group d-flex mb-4">    
                    <div className="form-group col-2">
                        <label>Tipo do Produto</label>
                        <select type="text" className="form-control">
                            <option disabled selected value >---Selecione um Tipo--</option>
                            <option>Feminino</option>
                            <option>Masculino</option>
                            <option>Calçados</option>
                        </select>                  
                    </div>

                    <div className="form-group col-2 mx-5">
                        <label>Destacar em Home</label>
                        <select type="text" className="form-control">
                            <option disabled selected value >---Selecione--</option>
                            <option>Sim</option>
                            <option>Não</option>
                        </select>                  
                    </div>
                </div>

                <div className="form-group d-flex mb-4">
                    <div className="col-2">
                        <label>Valor</label>
                        <input type="text" className="form-control" placeholder="00,00"/>
                    </div>
                    <div className="col-2 mx-5">
                        <label>Promoção</label>
                        <input type="text" className="form-control" placeholder="00,00"/>
                    </div>
                </div>

                <div className="form-group mb-5">
                    <label>Upload da Imagem</label>
                    <input type="file" className="form-control"/>
                </div>

                <button className="btn-login w-100 btn btn-lg btn-primary my-1" type="button">Publicar Produto</button>

            </form>

            <div className='msg-login my-5 text-center'>
                    {msgTipo === 'sucesso' && <span><strong>Wow! </strong>Você está conectado!</span>}
                    {msgTipo === 'erro' && <span><strong>Ops! </strong>Verifique se a senha ou o usuário estão corretos!</span>}
                </div>

        </>
    );
}

export default CadastrarProdutos;