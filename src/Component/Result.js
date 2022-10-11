import React, { useEffect, useState } from "react";

function Result(props) {
  const { UserChoice, Game, UserImage } = props;
  const [AINumber, setAINumber] = useState(Math.floor(Math.random() * 3));
  const [AIChoice, setAIChoice] = useState([]);
  const [Result, setResult] = useState("");
  const computerChoice = () => {
    setAIChoice(Game[AINumber]);
  };
  const match = () => {
    if (
      (UserChoice === "paper" && Game[AINumber].type === "paper") ||
      (UserChoice === "rock" && Game[AINumber].type === "rock") ||
      (UserChoice === "scissor" && Game[AINumber].type === "scissor")
    ) {
      setResult(" Draw ");
      return;
    }

    //For rock and paper
    if (UserChoice === "paper" && Game[AINumber].type === "rock") {
      setResult("You Won Pero Player");
    } else if (UserChoice === "rock" && Game[AINumber].type === "paper") {
      setResult("You Lose Bot");
    }
    // Paper and Sccior
    if (UserChoice === "paper" && Game[AINumber].type === "scissor") {
      setResult("You Lose Bot");
    } else if (UserChoice === "scissor" && Game[AINumber].type === "paper") {
      setResult("You Won Pero Player");
    }
    //scissor and rock
    if (UserChoice === "scissor" && Game[AINumber].type === "rock") {
      setResult("You Lose Bot");
    } else if (UserChoice === "rock" && Game[AINumber].type === "scissor") {
      setResult("You Won Pero Player");
    }
  };
  useEffect(() => {
    if (UserChoice) {
      computerChoice();
      match();
    }
  }, [UserChoice]);

  return (
    <>
      <div className="ResultContainer">
          <div className="userResult">
            <h5>User</h5>
            <img
              className="gameImages"
              src={UserImage.src}
              alt={UserImage.type}
            />
          </div>
          <div className="cpuResult">
            <h5>CPU</h5>
            <img
              className="gameImages"
              src={AIChoice.src}
              alt={AIChoice.type}
            />
          </div>
      </div>
      <p>{Result}</p>
    </>
  );
}

export default Result;
