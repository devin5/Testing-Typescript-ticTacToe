import {handleBoxClick} from "../HandleBoxClick";

const Params: any = {
    marked: "X",
    setMarked: jest.fn(x => x+1),
    symbol: "X",
    setScoreObject: jest.fn(x => x+1),
    name: "box-3",
    setSymbol: jest.fn(x => x+1),
  };

test("function exists", () => {
  expect(handleBoxClick).toBeDefined();
});

test("function return null if marked is true", () => {
    expect(handleBoxClick(Params)).toBe(null);
  });

  test("setMarked and setScoreObject gets called if marked is true", () => {
    Params.marked = null
    handleBoxClick(Params)
    expect(Params.setMarked).toHaveBeenCalled();
    expect(Params.setScoreObject).toHaveBeenCalled();
    expect(Params.setSymbol).toHaveBeenCalled();
  });
  
  


