import React from 'react';
import Menu from '../Layout/Menu';

import './Home.css';
import arrow from '../Assets/next.png';

export default function Home() {
    return (
        <>
            <div className="home">
                <Menu />
                <main className="container">
                    <section className="lead">
                        <h1>Transformamos<br /><b>investimentos</b> em <b>liberdade</b>.</h1>
                        <p className="text1">Abra sua conta na XP Investimentos e acesse conteúdos exclusivos e benefícios para membros Liberta.</p>
                        <button className="btn btn-home"><b>Torne-se membro</b></button>
                        <p className="text2">ou <a href="/" className="leadLink">transfira sua conta agora mesmo</a></p>
                        <p className="text3">Conheça as vantagens de ser Liberta</p>
                        <img src={arrow} alt=""/>
                    </section>
                </main>
            </div>
            
        </>
    );
}
