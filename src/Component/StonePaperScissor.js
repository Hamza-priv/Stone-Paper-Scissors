import React, { useState, useEffect } from "react";
import Result from "./Result";
const gameImages = [
  { src: "../img/rock.png", type: "rock" },
  { src: "../img/paper.png", type: "paper" },
  { src: "../img/scissor.png", type: "scissor" },
];
function StonePaperScissor() {
  const [Game, setGame] = useState([]);
  const [UserChoice, setUserChoice] = useState("");
  const [UserImage, setUserImage] = useState([]);
  const [Restart, setRestart] = useState(false);
  const CreateBoard = () => {
    setGame(gameImages);
  };
  const userChoice = (e) => {
    setUserImage(e.target);
    setUserChoice(e.target.alt);
    setRestart(false);
  };
  const restart = () => {
    setRestart(true);
    setUserChoice("");
  };
  useEffect(() => {
    CreateBoard();
  }, [UserChoice, Restart]);

  return (
    <div>
      {!UserChoice && (
        <>
          <p className="choice">Select your Choice</p>
          <div className="GameContainer">
            <div className="GameBoard">
              {Game.map((game, index) => (
                <img
                  className="gameImages"
                  key={index}
                  src={game.src}
                  alt={game.type}
                  data-id={index}
                  draggable={true}
                  onClick={userChoice}
                />
              ))}
            </div>
          </div>
        </>
      )}

      {UserChoice && Restart === false && (
        <>
          <Result
            UserChoice={UserChoice}
            Game={Game}
            UserImage={UserImage}
            restart={restart}
          />
          <button className="button" onClick={restart}>
            Restart
          </button>
        </>
      )}
    </div>
  );
}

export default StonePaperScissor;
