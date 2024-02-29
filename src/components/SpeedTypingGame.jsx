import React, { useState, useEffect } from "react";
import sentences from "../data/data";
import { PiTimerFill } from "react-icons/pi";
import { GrUpdate } from "react-icons/gr";
import { RxCross1 } from "react-icons/rx";
import { PiPaperPlaneRightFill } from "react-icons/pi";
import "../App.css";

const SpeedTypingGame = () => {
  const [text, setText] = useState("");
  const [name, setName] = useState("");
  const [word, setWord] = useState("");

  useEffect(() => {
    // Select a random word initially
    randomWord();
  }, []);

  // Function to select a random word from the sentences array
  const randomWord = () => {
    const randomIndex = Math.floor(Math.random() * sentences.sentences.length);
    setWord(sentences.sentences[randomIndex]);
  };

  // Function to handle the click event of the "Update" button
  const handleUpdateClick = () => {
    randomWord();
  };

  return (
    <div>
      <div className="header">
        {name === "" ? (
          <>
            <p>Enter Name :</p>
            <input
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            <button onClick={() => setName(text)}>Set</button>
          </>
        ) : (
          <p>{`Hi ${name}`} lets play the game </p>
        )}
      </div>
      <div className="second_header">
        <PiTimerFill />
        <RxCross1 />
        <PiPaperPlaneRightFill />
      </div>
      <div className="generated_words">
        {word}
        <GrUpdate onClick={handleUpdateClick} />
      </div>
      <input type="text" />
    </div>
  );
};

export default SpeedTypingGame;
