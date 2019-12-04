import React from 'react';

import './Atendimento.css';
import carteira from '../Assets/carteira.png';
import lupa from '../Assets/lupa.png';
import cursos from '../Assets/cursos.png';
import especialista from '../Assets/especialista.png';

export default function Atendimento() {
  return (
    <>
      <div className="atendimento">
        <div className="texts">
          <h2>Atendimento <span>Liberta</span></h2>
          <h5>Texto falando da equipe maravilhosa que a liberta</h5>
        </div>
        <div className="passos">
          <div className="card"><p>Passo</p><h1>1</h1></div>
          <div className="line"></div>
          <div className="card"><p>Passo</p><h1>2</h1></div>
          <div className="line"></div>
          <div className="card"><p>Passo</p><h1>3</h1></div>
        </div>
        <div className="txt">
          <div className="card">
            <h6 className="card-title">Identificamos Seus Objetivos</h6>
            <p className="card-text">Assessoria especializada em renda fixa, que oferece suporte opercional e recomendações relevantes para você.</p>
          </div>
          <div className="card">
            <h6 className="card-title">Apresentamos o Cálculo de Objetivo</h6>
            <p className="card-text">Montamos sua carteira com as melhores opções de investimentos de acordo com seus interesses e princípios.</p>
          </div>
          <div className="card">
            <h6 className="card-title">Modelagem de Carteira</h6>
            <p className="card-text">
              Coverse com Stormer e nossa equipe de especialistas para traçar um modelo de investir exclusivamente seu.</p>
          </div>
        </div>
        <button className="btn btn-lg btn-home"><b>Torne-se membro</b></button>
      </div>
      <div className="investir">
        <h2>Porque investir com a <span>Liberta?</span></h2>
        <h5>Aqui você não é o número de uma conta é uma pessoa que compartilha o nosso objetivo de ser livre.<br />Temos vantagens para você que investe em</h5>
        <div className="buttons">
          <button className="fixa">Renda Fixa</button>
          <button className="variavel">Trade e Renda Variável</button>
        </div>
        <div className="icones">
          <div className="card">
            <img src={carteira} className="card-img-top" alt="..." />
            <div className="card-body">
              <h6 className="card-title">Tripla Assessoria de Carteira</h6>
              <p className="card-text">Assessoria especializada em renda fixa, que oferece suporte opercional e recomendações relevantes para você.</p>
            </div>
          </div>
          <div className="card">
            <img src={lupa} className="card-img-top" alt="..." />
            <div className="card-body">
              <h6 className="card-title">Plano Personalizado de Investimentos</h6>
              <p className="card-text">Montamos sua carteira com as melhores opções de investimentos de acordo com seus interesses e princípios.</p>
            </div>
          </div>
          <div className="card">
            <img src={especialista} className="card-img-top" alt="..." />
            <div className="card-body">
              <h6 className="card-title">Curadoria dos Especialistas</h6>
              <p className="card-text">Coverse com Stormer e nossa equipe de especialistas para traçar um modelo de investir exclusivamente seu.</p>
            </div>
          </div>
          <div className="card">
            <img src={cursos} className="card-img-top" alt="..." />
            <div className="card-body">
              <h6 className="card-title">Cursos Exclusivos Membros Liberta</h6>
              <p className="card-text">Aprenda a investir melhor com os cursos Transformando Investimentos em Liberdade e A Jornada do Trader.</p>
            </div>
          </div>
        </div>
        <button className="btn btn-lg btn-home"><b>Torne-se membro</b></button>
      </div>
    </>
  );
}
