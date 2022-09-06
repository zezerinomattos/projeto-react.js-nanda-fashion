import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';

import Home from '../views/Home';
import Login from "../views/Login";
import NovoUsuario from "../views/NovoUsuario";
import UsuarioRecuperarSenha from "../views/usuario-recuperar-senha";
import CadastrarProdutos from "../views/Cadastrar-produtos";
import CadastrarBanners from "../views/Cadastrar-banners";
import BannerCard from "../components/Banner-Card";


import store from "../store";

export default function Rotas(){
    return(
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/novousuario" element={<NovoUsuario />} />
                    <Route path="/usuariorecuperarsenha" element={<UsuarioRecuperarSenha />} />
                    <Route path="/cadastrarprodutos" element={<CadastrarProdutos />} />
                    <Route path="/cadastrarbanners" element={<CadastrarBanners />} />
                    <Route path="/bannercard" element={<BannerCard />} />
                    
                </Routes>
        </BrowserRouter>
        </Provider>
    );
}