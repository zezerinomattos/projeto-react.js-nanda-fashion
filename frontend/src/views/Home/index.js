import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { useSelector} from 'react-redux';

//MEUS IMPORTS
import './style.css';
import firebase from '../../config/firebase';
import Navbar from '../../components/Header';
import BannerCard from '../../components/Banner-Card';
import ProdutoCard from '../../components/produto-card';
import Footer from '../../components/Footer';

function Home(){

    const [banners, setBanners] = useState([]);
    let listaBanners = [];

    const [produtos, setProdutos] = useState([]);
    let listaProdutos = [];

    useEffect(() =>{
        firebase.firestore().collection('nanda_fashion').get()
            .then(async(resposta) =>{
                await resposta.docs.forEach(doc => {
                    listaBanners.push({
                        id: doc.id,
                        ...doc.data()
                    })
                    listaProdutos.push({
                        id: doc.id,
                        ...doc.data()
                    })
                })
                setBanners(listaBanners);
                setProdutos(listaProdutos);
            })
    });


    return(
        <>
            <Navbar />
            <main className='col-12 my-5'>
                <section className='banner-apresentação-inicial mx-auto row'>
                    <BannerCard banners={banners}/>       
                </section>

                <section className='row produto-ofertas'>
                    <h2>OFERTAS</h2>
                    <div className='row produto-ofertas-mestre'>
                        {produtos.map(item => item.destacar === "Sim" && item.secaoDestacar === "Ofertas" && <ProdutoCard key={item.id} titulo={item.nomeProduto} img={item.imagem} descricao={item.descricao} promocao={item.promocao} valor={item.valor} />)}
                    </div>
                </section>
                
            </main>
            <footer>
                <Footer />
            </footer>
        </>
    );
}

export default Home;