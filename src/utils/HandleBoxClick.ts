
interface Params {
    marked: string | null;
    setMarked: any;
    symbol: string; 
    setScoreObject: any;
     name: string;
     setSymbol: any;
}


export function handleBoxClick(Params: Params){
    if(!Params.marked){
      Params.setMarked(Params.symbol)
      Params.setScoreObject((obj: any) => {
       return {...obj, [Params.name]: Params.symbol}
      })
      Params.setSymbol((symbol: any) => symbol === "X" ? "O" : "X")
    }
    else{
        return null
      }
}
