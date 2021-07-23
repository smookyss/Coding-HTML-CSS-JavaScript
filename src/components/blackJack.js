/** @format */

import { render } from "@testing-library/react";
import React, { useState, useEffect } from "react";
import "./blackJack.css";

function BlackJack() {
  const [card1, setcard1] = useState(0);
  const [card2, setcard2] = useState(0);
  const [Results, setResults] = useState(0);
  const [newCard, setnewCard] = useState(0);

  const [msg, setmsg] = useState("");

  function Start() {
    var cardX = Math.round(Math.random() * 6 + 1);
    var cardY = Math.round(Math.random() * 6 + 1);
    setcard1(cardX);
    setcard2(cardY);
    setResults(cardY + cardX);
  }

  function newC() {
    var cardX = Math.round(Math.random() * 6 + 1);
    var totalResults = cardX + Results;

    if (totalResults == 21) {
      setmsg("YOU WON!!");
    } else if (totalResults < 21) {
      setmsg("YOU WANNA DRAW A NEW CARD ?");
    } else {
      setmsg("GAME OVER");
    }

    setnewCard(cardX);
    setResults(cardX + Results);
  }
  function restart() {
    Start();
    setnewCard(0);
    setmsg("TAKE A NEW CARD");
  }

  return (
    <div className="game-container">
      <div className="game">
        <h1 id="tittle"> Lets Play BlackJack</h1>
        <button onClick={Start}>Start game</button>

        <p>
          Cards: {card1} : {card2}
        </p>
        <p className="message">{msg}</p>
        <p>Results: {Results}</p>

        <button onClick={newC}>New Card : {newCard}</button>
        <button onClick={restart}>RESTART</button>
      </div>
    </div>
  );
}

export default BlackJack;
