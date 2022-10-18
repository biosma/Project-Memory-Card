import React from "react";
import {useState, useEffect} from "react";
import "./styles/styles.css";


function Card({name, imagen, description, utility}){
    return ( 
    <div className="conteiner-card">
        <h2 className="name-card">{name}</h2>
        <img
            className="image-card"
            src={`${imagen}`}
            alt={`Foto de ${name}`}
        />
        <div className="description-div">
            <p className="description-card">{description}</p>    
            <p className="utilities-card">{utility}</p>
        </div>
    </div>
    );
 }
 export default Card;
