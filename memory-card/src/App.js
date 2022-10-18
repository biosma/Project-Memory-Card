import React from "react";
import Card from "./Card";
import { cardData } from "./cardInfo.js";

function App() {
  return (

    <div className="general-container">
      {cardData.map((data, key) => {
        return(
      <Card key={key} name={data.name} imagen={data.image} description={data.description} utility={data.utility}/>
        )
      })}
    </div>
  );
}

export default App;
