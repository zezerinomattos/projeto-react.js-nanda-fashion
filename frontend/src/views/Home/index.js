import React from 'react';
import { useSelector } from 'react-redux';
import './style.css';

//MEUS IMPORTS
import Navbar from '../../components/Header';

function Home(){
    return(
        <>
            <Navbar />
            <h1>Logado: {useSelector(state => state.usuarioEmail)}</h1>
            <h1>Logado: {useSelector(state => state.usuarioLogado)}</h1>
        </>
    );
}

export default Home;