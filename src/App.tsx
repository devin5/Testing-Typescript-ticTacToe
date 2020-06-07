import React, { useState } from "react";
import Box from "./components/Box";
import { boxArray } from "./data/boxArray";
import { FindWinner } from "./utils/FindWinner";
import "./styles/App.css";
const ScoreObj: any = {};
boxArray.forEach((boxString: string) => {
  ScoreObj[boxString] = "";
});

const App: React.FC = () => {
  const [userSymbol, setUserSymbol] = useState("X");
  const [scoreObject, setScoreObject] = useState(ScoreObj);

function restart(){
  window.location.reload();
}
  
  const result = FindWinner(scoreObject);

  return (
    <div data-testid="app" className="App">

      {result === "loser" ? null : <h1>{`${userSymbol === "X"? "O": "X"} is ${result}`}</h1>}
      <div data-testid="game-board" className={result === "winner" ||result ===  "tied" ? "game-board dulled" : "game-board"}>
        {boxArray.map((box: string) => (
          <Box
            key={box}
            name={box}
            setScoreObject={setScoreObject}
            userSymbol={[userSymbol, setUserSymbol]}
          />
        ))}
      </div>
      {result === "loser" ? null : <button onClick={restart} >Restart</button>}

    </div>
  );
};

export default App;
