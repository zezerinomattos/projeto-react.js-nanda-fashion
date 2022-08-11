import React from 'react';
import './styles.css';

// IMAGENS
import logoNanda from '../../assets/logo-Nanda.png';

function Login() {
    return(
        <main className="login-content d-flex align-items-center ">
            <form className="form-signin mx-auto">
                <div className="text-center mb-4">
                    <img className="mb-4" src={logoNanda} alt="Logo Nanda Fashion" width="110" height="85" />
                    <h1 className="h3 mb-3 fw-normal ">Faça seu Login</h1>
                </div>

                <input type="email" className="form-control" id="floatingInput" placeholder="Email" />
                
                <input type="password" className="form-control my-2" id="floatingPassword" placeholder="Senha" />
                

                <button className="btn-login w-100 btn btn-lg btn-primary my-1" type="submit">Sign in</button>
                <div className="recuperar-senha mt-3 text-center">
                    <a href="#">Esqueceu a Senha?</a>
                </div>
            </form>
        </main>
    );
}

export default Login;