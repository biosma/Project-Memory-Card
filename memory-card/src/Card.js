import React from "react";
import {useState, useEffect} from "react";
import "./styles/styles.css"
function Card({imagen}){
    const name = imagen.toString()
    return ( 
    <div className="conteiner-card">
        <h2 className="name-card">{name}</h2> {/* Aca hacemos uso del Atributo name */}
        <img
            className="image-card"
            src={`./img-cards/${imagen}.jpg`}
            alt={`Foto de ${imagen}`}
        />
        <div className="description-div">
            <p className="description-card">Death Knights engage their foes up-close, supplementing swings of their weapons with dark magic that renders enemies vulnerable or damages them with unholy power.</p>    
            <p className="utilities-card">Damage</p>
        </div>
    </div>
    );
 }
 export default Card;
