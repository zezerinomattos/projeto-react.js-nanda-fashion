import React, {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, Navigate } from 'react-router-dom';
import 'firebase/auth';

// MEUS ARQUIVOS
import './styles.css';
import firebase from '../../config/firebase';

// IMAGENS
import logoNanda from '../../assets/logo-Nanda.png';

function Login() {

    const [email, setEmail] = useState();
    const [senha, setSenha] = useState();
    const [msgTipo, setMsgtipo] = useState();
    const [carregando, setcarregando] = useState();

    const dispatch = useDispatch();

    function logar() {
        firebase.auth().signInWithEmailAndPassword(email, senha)
            .then(resultado => {
                setcarregando(0);
                setMsgtipo('sucesso')
                setTimeout(() => {
                    dispatch({type: 'LOG_IN', usuarioEmail: email});
                }, 1000)
                
            })
            .catch(erro => {
                setcarregando(0);
                setMsgtipo('erro');
            });
    }

    return(
        <main className="login-content d-flex align-items-center ">

            {
                useSelector(state => state.usuarioLogado) > 0 ? <Navigate to='/' /> : null
            }

            <form className="form-signin mx-auto">
                <div className="text-center mb-4">
                    <img className="mb-4" src={logoNanda} alt="Logo Nanda Fashion" width="110" height="85" />
                    <h1 className="h3 mb-3 fw-normal ">Faça seu Login</h1>
                </div>

                <input type="email" className="form-control" id="floatingInput" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                
                <input type="password" className="form-control my-2" id="floatingPassword" placeholder="Senha" onChange={(e) => setSenha(e.target.value)} />

                {
                    carregando > 0 ? <div class="spinner-border text-warning" role="status"><span class="visually-hidden">Loading...</span></div>
                    :<button onClick={logar} className="btn-login w-100 btn btn-lg btn-primary my-1" type="button">ENTRAR</button>
                }
                
                <div className='msg-login my-3 text-center'>
                    {msgTipo === 'sucesso' && <span><strong>Wow! </strong>Você está conectado!</span>}
                    {msgTipo === 'erro' && <span><strong>Ops! </strong>Verifique se a senha ou o usuário estão corretos!</span>}
                </div>

                <div className="recuperar-senha mt-4 text-center">
                    <Link to="/usuariorecuperarsenha">Esqueceu a Senha?</Link>
                </div>
            </form>
        </main>
    );
}

export default Login;