import React from 'react';
import './Item.css';
import Button from '../Button'

function ItemCardapio(props) {
  return (
    <div className="Item">
      <div className="itemImage">
        <img src={props.image.url} alt="Imagem do produto"/>
      </div>
      <div className="ItemInfo">
        <h2>{props.title}</h2>
        <p>{props.description}</p>
        <p className="preco">{props.price}</p>
      </div>
      <div>
        <Button/>
      </div>
    </div>
  );
}

export default ItemCardapio;
     






















/**import React, { Component } from 'react';
import '.\\Menu.css';

function Menu(){
    return(
        <section className="flex-container">
            <div id="classico">
                <div id="classico-imagem">
                    <img/>
                </div>
                <div id="classico-info">
                    <h2>Hot dog clássico</h2>
                    <p>Pão e salsicha do jeito que você já conhece e saboroso como você nunca viu</p>
                    <p class="preco"> R$8,00</p>
                </div>
            </div>
        </section>
    );
}

export default Menu;*/