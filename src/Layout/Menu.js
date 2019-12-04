import React from 'react';

import './Menu.css';
import logo from '../Assets/logo.png';
import menu from '../Assets/menu.svg';

export default function Menu() {
    return (
        <div>
            <header className="container">
                <div className="flex-grow-1 text-right">
                    <nav className="navbar navbar-expand-lg">
                    <a className="navbar-brand" href="/"><img src={logo} alt="Liberta Investimentos" /></a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggler" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Alterna navegação">
                            <span><img src={menu} alt="Menu" /></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarToggler">                            
                            <ul className="navbar-nav my-2 my-lg-0">
                                <li className="nav-item"><a href="/" className="nav-link"><b>Início</b></a></li>
                                <li className="nav-item"><a href="/" className="nav-link"><b>Nossa Equipe</b></a></li>
                                <li className="nav-item"><a href="/" className="nav-link"><b>Custos Operacionais</b></a></li>
                                <li className="nav-item"><a href="/" className="nav-link"><b>News</b></a></li>
                                <li className="nav-item"><a href="/" className="nav-link"><b>Contato</b></a></li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </header>
        </div>
    );
}
