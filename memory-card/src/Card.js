import React from "react";
import "./styles/styles.css";

function Card({data, handleCardClick}){
    return ( 
    <div className="conteiner-card" onClick={handleCardClick}>
        <h2 className="name-card">{data.name}</h2>
        <img
            className="image-card"
            src={`${data.imagen}`}
            alt={`Foto de ${data.name}`}
        />
        <div className="description-div">
            <p className="description-card">{data.description}</p>    
            <p className="utilities-card">{data.utility}</p>
        </div>
    </div>
    );
 }
 export default Card;
