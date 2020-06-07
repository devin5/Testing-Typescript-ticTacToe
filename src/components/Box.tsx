import React, { useState } from "react";
import { handleBoxClick } from "../utils/HandleBoxClick";
import "../styles/Box.css";
interface BoxProps {
  name: string;
  userSymbol: [any, any];
  setScoreObject: (obj: object) => any;
}

const Box: React.FC<BoxProps> = ({ userSymbol, setScoreObject, name }) => {
  const [marked, setMarked] = useState<string | null>(null);
  const params = {
    marked: marked,
    setMarked: setMarked,
    symbol: userSymbol[0],
    setScoreObject: setScoreObject,
    name: name,
    setSymbol: userSymbol[1],
  };

  return (
    <div onClick={() => handleBoxClick(params)} className="box">
      {marked}
    </div>
  );
};

export default Box;
