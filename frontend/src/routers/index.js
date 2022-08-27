import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';

import Home from '../views/Home';
import Login from "../views/Login";
import NovoUsuario from "../views/NovoUsuario";
import store from "../store";

export default function Rotas(){
    return(
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/novousuario" element={<NovoUsuario />} />
                </Routes>
        </BrowserRouter>
        </Provider>
    );
}