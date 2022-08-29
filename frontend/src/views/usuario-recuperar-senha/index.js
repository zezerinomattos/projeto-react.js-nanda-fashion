import React, {useState} from 'react';
import { Link } from 'react-router-dom'
import 'firebase/auth';

// MEUS ARQUIVOS
import './style.css';
import firebase from '../../config/firebase';
import Header from '../../components/Header';

function UsuarioRecuperarSenha(){

    const [email, setEmail] = useState();
    const [msg, setMsg] = useState();

    function recuperaSenha(){
        firebase.auth().sendPasswordResetEmail(email)
            .then(resposta => {
                setMsg('Enviamos um link no seu email{email} para você redefinir a senha!');
            })
            .catch(erro =>{
                setMsg('Verifique se o email está correto!');
            });
    }

    return(
        <>
            <div className='mestre'>
                <span className='cadatro-retornar-home'><Link to="/login">Login</Link></span>
                <form className='text-center form-login mx-auto mt-5'>
                        <h3 className='mb-3 font-weight-bold'>Recuperar Senha</h3>
                        <input type="email" className='recuperar-email form-control my-4 mx-auto' placeholder='Digite seu email' onChange={(e) => setEmail(e.target.value)}/>

                        <div className='msg my-4 text-center'>{msg}</div>

                        <button type='button' className='btn btn-lg btn-block btn-enviar' onClick={recuperaSenha}>Recuperar Senha</button>
                </form>
            </div>
       </>
    );
}

export default UsuarioRecuperarSenha;
