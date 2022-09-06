import React from 'react';
import { useSelector } from 'react-redux';
import './style.css';

//MEUS IMPORTS
import Navbar from '../../components/Header';
import BannerCard from '../../components/Banner-Card';

function Home(){
    return(
        <>
            <Navbar />
            <main className='col-12 my-5'>
                <section className='banner-apresentação-inicial mx-auto'>
                    <BannerCard />
                </section>
                
            </main>
        </>
    );
}

export default Home;