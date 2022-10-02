import React, {useState, useEffect} from 'react';
import { Link, useParams } from 'react-router-dom';
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

    const [pesquisa, setPesquisa] = useState('');

    useEffect(() =>{
        firebase.firestore().collection('nanda_fashion').get()
            .then(async(resposta) =>{
                await resposta.docs.forEach(doc => {
                    if(doc.data().nomeProduto.indexOf(pesquisa) >= 0){
                        listaBanners.push({
                            id: doc.id,
                            ...doc.data()
                        })
                        listaProdutos.push({
                            id: doc.id,
                            ...doc.data()
                        })
                    }
                })
                setBanners(listaBanners);
                setProdutos(listaProdutos);
            })
    });


    return(
        <>
            <Navbar />

            <form class="d-flex my-5 mx-auto col-11">
                <input onChange={(e) => setPesquisa(e.target.value)} class="form-control me-2 pesquisar" type="search" placeholder="Pesquisar" />
            </form>

            <main className='col-12 my-5'>
                <section className='banner-apresentação-inicial mx-auto row'>
                          
                </section>

                <section className='row produto-ofertas'>
                    <h2>OFERTAS</h2>
                    <div className='row produto-ofertas-mestre'>
                        {produtos.map(item => item.secaoDestacar === "Ofertas" ? <ProdutoCard id={item.id} titulo={item.nomeProduto} descricao={item.descricao} 
                            promocao={item.promocao} valor={item.valor} img={item.imagem} /> : null)} 
                    </div>
                </section>

                <section className='row produto-tendencia mt-5'>
                    <h2>TENDÊNCIA</h2>
                    <div className='row produto-d-mestre'>
                        {produtos.map(item => item.secaoDestacar === "Tendência" ? <ProdutoCard id={item.id} titulo={item.nomeProduto} descricao={item.descricao} 
                            promocao={item.promocao} valor={item.valor} img={item.imagem} /> : null)} 
                    </div>
                </section>

                <section className='row mais-vendidos mt-5'>
                    <div className='row mais-vendidos-mestre mt-5'>
                        <h2>MAIS VENDIDOS</h2>
                        <div className='row mais-vendidos-d'>
                            {produtos.map(item => item.secaoDestacar === "Mais vendidos" ? <ProdutoCard id={item.id} titulo={item.nomeProduto} descricao={item.descricao} 
                                promocao={item.promocao} valor={item.valor} img={item.imagem} /> : null)} 
                        </div>
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

//(item.secaoDestacar === "Tendência")   item.destacar === "Sim"   <BannerCard banners={banners}/> 

// MAIS VENDIDOS