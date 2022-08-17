import React, {useState} from 'react';
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

    function logar() {
        firebase.auth().signInWithEmailAndPassword(email, senha)
            .then(resultado => {
                setMsgtipo('sucesso')
            })
            .catch(erro => {
                setMsgtipo('erro');
            });
    }

    return(
        <main className="login-content d-flex align-items-center ">
            <form className="form-signin mx-auto">
                <div className="text-center mb-4">
                    <img className="mb-4" src={logoNanda} alt="Logo Nanda Fashion" width="110" height="85" />
                    <h1 className="h3 mb-3 fw-normal ">Faça seu Login</h1>
                </div>

                <input type="email" className="form-control" id="floatingInput" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                
                <input type="password" className="form-control my-2" id="floatingPassword" placeholder="Senha" onChange={(e) => setSenha(e.target.value)} />
                
                <button onClick={logar} className="btn-login w-100 btn btn-lg btn-primary my-1" type="button">ENTRAR</button>

                <div className='msg-login my-3 text-center'>
                    {msgTipo === 'sucesso' && <span><strong>Wow! </strong>Você está conectado!</span>}
                    {msgTipo === 'erro' && <span><strong>Ops! </strong>Verifique se a senha ou o usuário estão corretos!</span>}
                </div>

                <div className="recuperar-senha mt-4 text-center">
                    <a href="#">Esqueceu a Senha?</a>
                </div>
            </form>
        </main>
    );
}

export default Login;