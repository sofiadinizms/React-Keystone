import React, { Component } from 'react';
import '.\\Menu.css';

function Menu(){
    return(
        <div className="flex-container">
            <div id="classico">
                <div id="classico-imagem">
                    <img>
                </div>
                <div id="classico-info">
                    <h2>Hot dog clássico</h2>
                    <p>Pão e salsicha do jeito que você já conhece e saboroso como você nunca viu</p>
                    <p class="preco"> R$8,00</p>
        </div>
    );
}

export default Menu;