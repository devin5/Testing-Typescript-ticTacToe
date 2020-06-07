export const FindWinner = (obj: any) => {
  let result = "loser"
  let tied = true
  
  if( obj["box-1"] === obj["box-2"] && obj["box-2"] === obj["box-3"] && obj["box-3"] !== ""){
    result = "winner"
  }
  else if( obj["box-1"] === obj["box-2"] && obj["box-2"] === obj["box-3"] && obj["box-3"] !== ""){
    result = "winner"
  }
  else if( obj["box-4"] === obj["box-5"] && obj["box-5"] === obj["box-6"] && obj["box-6"] !== ""){
    result = "winner"
  }
  else if( obj["box-7"] === obj["box-8"] && obj["box-8"] ===  obj["box-9"] && obj["box-9"] !== ""){
    result = "winner"
  }
  else if( obj["box-1"] === obj["box-4"] && obj["box-4"] === obj["box-7"] && obj["box-7"] !== ""){
    result = "winner"
  }
  else if( obj["box-2"] === obj["box-5"] && obj["box-5"] === obj["box-8"] && obj["box-8"] !== ""){
    result = "winner"
  }
  else if( obj["box-3"] === obj["box-6"] && obj["box-6"] === obj["box-9"] && obj["box-9"] !== ""){
    result = "winner"
  }
  else if( obj["box-1"] === obj["box-5"] && obj["box-5"] === obj["box-9"] && obj["box-9"] !== ""){
    result = "winner"
  }
  else if( obj["box-3"] === obj["box-5"] && obj["box-5"] === obj["box-7"] && obj["box-7"] !== ""){
    result = "winner"
  }

  Object.keys(obj).forEach((key: string) => {
if(obj[key] === ""){
    tied = false
}
  })
  return tied ? "tied" : result
};
