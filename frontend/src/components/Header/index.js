import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import './styles.css';


//MEUS IMPORTS
import logo from '../../assets/logo-Nanda.png';

function Navbar(){

    const dispatch = useDispatch();

    return(
        <>
            <nav className="nav-redes-sociais navbar navbar-expand-lg">
                <ul className="nav">
                    <li className="nav-item">
                        <Link className="nav-link" to=""><ion-icon name="logo-instagram"></ion-icon></Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to=""><ion-icon name="logo-facebook"></ion-icon></Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to=""><ion-icon name="logo-whatsapp"></ion-icon></Link>
                    </li>
                </ul>
            </nav>     
            <div className="header-Logo navbar my-4">
                <hr/>
                <div className="heder-logo-img">
                    <img src={logo} alt="Logotipo" />
                </div>
                <hr/>
            </div>
            <nav className="nav-menu navbar navbar-expand-lg">
                <div class="container-fluid nav-menu-mestre">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item"><div className="menu-icon"><ion-icon name="checkmark-done"></ion-icon></div><Link class="nav-link" to="/">Home</Link></li>                                                                  
                        
                        {
                            useSelector(state => state.usuarioLogado) > 0 ?
                                <>
                                        <li class="nav-menu-roupas nav-item"><div className="menu-icon"><ion-icon name="shirt"></ion-icon></div><Link class="nav-link" to="">Roupas</Link>
                                            <ul class="nav-ul-roupas navbar-nav me-auto mb-2 mb-lg-0">
                                                <li class="nav-item"><Link class="nav-link" to="#">Feminino</Link></li>
                                                <li class="nav-item"><Link class="nav-link" to="#">Masculino</Link></li>
                                                <li class="nav-item"><Link class="nav-link" to="#">Calçados</Link></li>
                                            </ul>
                                        </li>

                                        <li class="nav-item"><div className="menu-icon"><ion-icon name="shirt"></ion-icon></div><Link class="nav-link" to="#">Pijamas & Lingerie</Link></li>
                                        <li class="nav-item"><div className="menu-icon"><ion-icon name="chatbubble-ellipses"></ion-icon></div><Link class="nav-link" to="#">Contato</Link></li>

                                        <li class="nav-item"><div className="menu-icon"><ion-icon name="person-add"></ion-icon></div><Link class="nav-link" to="/cadastrarprodutos">Cadastrar Produtos</Link></li>
                                        <li class="nav-item"><div className="menu-icon"><ion-icon name="person-add"></ion-icon></div><Link class="nav-link" to="/cadastrarbanners">Cadastrar Banner</Link></li>

                                        <li class="nav-item"><div className="menu-icon"><ion-icon name="person-add"></ion-icon></div><Link class="nav-link" to="/novousuario">Cadastrar Usuário</Link></li>
                                        <li class="nav-item nav-link btn-sair" onClick={() => dispatch({type: 'LOG_OUT'})}><div className="menu-icon"><ion-icon name="close-circle"></ion-icon></div> Sair</li>
                                </>
                            :
                                <>
                                        <li class="nav-menu-roupas nav-item"><div className="menu-icon"><ion-icon name="shirt"></ion-icon></div><Link class="nav-link" to="">Roupas</Link>
                                            <ul class="nav-ul-roupas navbar-nav me-auto mb-2 mb-lg-0">
                                                <li class="nav-item"><Link class="nav-link" to="#">Feminino</Link></li>
                                                <li class="nav-item"><Link class="nav-link" to="#">Masculino</Link></li>
                                                <li class="nav-item"><Link class="nav-link" to="#">Calçados</Link></li>
                                            </ul>
                                        </li>

                                        <li class="nav-item"><div className="menu-icon"><ion-icon name="shirt"></ion-icon></div><Link class="nav-link" to="#">Pijamas & Lingerie</Link></li>
                                        <li class="nav-item"><div className="menu-icon"><ion-icon name="chatbubble-ellipses"></ion-icon></div><Link class="nav-link" to="#">Contato</Link></li>
                                </>
                        }
                    </ul>
                    <form class="d-flex">
                        <input class="form-control me-2 pesquisar" type="search" placeholder="Pesquisar" />
                        <button class="btn-pesquisa btn btn-outline-success" type="submit"><ion-icon name="search"></ion-icon></button>
                    </form>
                    </div>
                </div>
            </nav>      
        </>
    );
}

export default Navbar;