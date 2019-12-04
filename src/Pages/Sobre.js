import React from 'react';
import Banner from '../Layout/Banner';
import stars from '../Assets/stars.svg';
import wallet from '../Assets/wallet.svg';
import world from '../Assets/world.svg';

import './Sobre.css';

export default function Sobre() {
    return (
        <>
            <Banner />
            <div className="container">
                <div className="sobre">
                    <div className="textLeft">
                        <h1>A liberdade é feita com bons <span>investimentos</span></h1>
                        <p>Se você procura assessoria para seus investimentos, conheça a Liberta. O maior escritório de Bolsa de Valores do Brasil credenciado à <span><b>XP Investimentos</b></span> e com mais de <b>R$1 Bilhão sob custódia.</b></p>
                        <button className="btn-home btnSobre"><b>Torne-se membro</b></button>
                    </div>
                    <div className="textRight">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title"><img src={stars} alt="wallet" /></h5>
                                <p className="card-text">Queremos ajudar você a ganhar dinheiro investindo para deixar de depender de seu salário. Afinal, você já deu duro pelo seu dinheiro, é hora de fazer ele trabalhar por você.</p>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title"><img src={wallet} alt="wallet" /></h5>
                                <p className="card-text">Você nos descreve seus sonhos e nós planejamos e investimos ao seu lado para você chegar lá. Renda fixa, Renda variável ou Trader, a Liberta tem a assessoria.</p>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title"><img src={world} alt="wallet" /></h5>
                                <p className="card-text">Somos investidores e gostamos de investir. Não estamos interessados em vender serviços de que você não precisa. Queremos proporcionar um atendimento alinhado a você.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
