import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import 'firebase/auth';

//// MEUS ARQUIVOS
import firebase from '../../config/firebase';
import './style.css';
import Navbar from '../../components/Header';


function NovoUsuario(){

    const [email, setEmail] = useState();
    const [senha, setSenha] = useState();
    const [msgTipo, setMsgTipo] = useState();
    const [msg, setMsg] = useState();
    const [carregando, setcarregando] = useState();

    function Cadastrar(){
        setMsgTipo(null);

        if(!email || !senha){
            setMsgTipo('erro');
            setMsg('Você precisa informar o email e a senha para fazer o cadastro!')
            return;
        }
        firebase.auth().createUserWithEmailAndPassword(email, senha)
        .then(resposta => {
            setcarregando(0);
            setMsgTipo('sucesso')
        })
        .catch(erro =>{
            setcarregando(0);
            setMsgTipo('erro')
            switch (erro.message) {
                case 'Password should be at least 6 characters':
                    setMsg('A senha de ter pelo menos 6 caracteres!');
                    break;
                case 'The email address is already in use by another account.':
                    setMsg('Este já está sendo utilizado por outro usuário!');
                    break;
                case 'The email address is badly formatted.':
                    setMsg('O formato do seu email é invalido!');
                    break;
                
                default:
                setMsg('Não foi possivel cadastrar. tente novamente mais tarde!');
                break;
                
            }
        })   
    }

    return(
        <>  
            <div className='mestre'>
                <span className='cadatro-retornar-home'><Link to="/">Home</Link></span>
                <main className='cadastro-mestre d-flex'>
                    <form className=' text-center form-cadastro mx-auto mt-5'>
                        <h1 className='h3 mb-3'>CADASTRO</h1>

                        <input type="email" className='form-control my-2' placeholder='Digite o e-mail' onChange={(e) => setEmail(e.target.value)} />
                        <input type="password" className='form-control my-2' placeholder='Digite uma senha' onChange={(e) => setSenha(e.target.value)}/>

                        {carregando ? <div class="spinner-border text-warning" role="status"><span class="visually-hidden">Loading...</span></div>
                            
                            :<button type='button' className='btn btn-lg btn-block mt-2 mb-5 btn-cadstro' onClick={Cadastrar} >CADASTRAR</button>
                        }   

                        <div className='msg-login text-white text-center my-5'>
                            {msgTipo === 'sucesso' && <span><strong>Wow! </strong>Você cadstrou com sucesso! &#128526;</span>}
                            {msgTipo === 'erro' && <span><strong>Ops! </strong>{msg} &#128526;</span>}
                        </div>

                    </form>    

                </main>
            </div>
        </>
    );
}

export default NovoUsuario;