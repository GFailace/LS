import React from 'react';

import './Banner.css';
import play from '../Assets/play-arrow.svg'

export default function Banner() {
    return (
        <div>
            <div className="video">
                <div className="text">
                    <h4><span>Transforme</span> seu</h4>
                    <h4>jeito de investir</h4>
                </div>
                <div className="play">
                    <a href="/" ><h4><img src={play} alt="Assistir Vídeo" /> Assista ao vídeo</h4></a>
                </div>
            </div>
        </div>
    );
}
