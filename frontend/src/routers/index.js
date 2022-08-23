import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from '../views/Home';
import Login from "../views/Login";

export default function Rotas(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </BrowserRouter>
    );
}