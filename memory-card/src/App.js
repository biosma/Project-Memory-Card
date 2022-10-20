import React from "react";
import Card from "./Card";
import { cardData } from "./cardInfo.js";
import { shuffleObj } from './utils'
import {useState, useEffect} from "react";


function App() {
  const [clickedCards, setClickedCards] = useState([]);
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  const handleCardClick = (e) => {
    const cardName = e.target.parentNode.lastChild.textContent
    playRound(cardName) 
  }
  const playRound = (cardName) => { //Aca se da el shuffle, pues se actualiza alguna dependencia
    if (clickedCards.includes(cardName)) {
      resetGame()
    } else {
      const newScore = currentScore + 1
      if (newScore > bestScore) setBestScore(newScore)
      setCurrentScore(newScore)
      setClickedCards((prevState) => [...prevState,cardName])
    }
  }

  const resetGame = () => {
    setClickedCards([])
    setCurrentScore(0)
  }

  return (
    <div className="general-container">
      <div className="score-container">
        <p className="current-score">Current Score:{currentScore}</p>
        <p className="best-score">Best Score:{bestScore}</p>
      </div>
      <div className="cardsGrid">{shuffleObj(cardData).map((data, key) => {
        return(
      <Card key={key} data={data} handleCardClick={handleCardClick}/>
        )
      })}</div>
    </div>
  );
}

export default App;
