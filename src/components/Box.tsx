import React, { useState } from "react";

import "../styles/Box.css"
interface BoxProps {
  name: string
  userSymbol: [any,any]
  setScoreObject: (obj: object) => any
}

const Box: React.FC<BoxProps> = ({userSymbol, setScoreObject, name}) => {
  const [marked, setMarked] = useState<string | null>()

  function handleBoxClick(){
    if(!marked){
      setMarked(userSymbol[0])
      setScoreObject((obj: any) => {
       return {...obj, [name]: userSymbol[0]}
      })

      userSymbol[1]((symbol: any) => symbol === "X" ? "O" : "X")
      
    }
    else{
      return
    }
    
  }
return (<div onClick={handleBoxClick} className="box">{marked}</div>)
};


export default Box