import { FindWinner } from "../FindWinner";
import { boxArray } from "../../data/boxArray";

test("function exists", () => {
  expect(FindWinner).toBeDefined();
});

test("returns loser if no one wins or ties", () => {
  const ScoreObj: any = {};
  boxArray.forEach((boxString: string) => {
    ScoreObj[boxString] = "";
  });
  expect(FindWinner(ScoreObj)).toBe("loser")
});
test("returns winner if X wins", () => {
  const ScoreObj: any = {};
  boxArray.forEach((boxString: string) => {
    ScoreObj[boxString] = "";
  });
  [1,2,3].forEach(num => {
    ScoreObj[`box-${num}`] = "X"
  })
  expect(FindWinner(ScoreObj)).toBe("winner")
});
test("returns winner if O wins", () => {
  const ScoreObj: any = {};
  boxArray.forEach((boxString: string) => {
    ScoreObj[boxString] = "";
  });
  [4,5,6].forEach(num => {
    ScoreObj[`box-${num}`] = "O"
  })
  expect(FindWinner(ScoreObj)).toBe("winner")
});
test("returns tie for tie", () => {
  const ScoreObj: any = {};
  boxArray.forEach((boxString: string) => {
    ScoreObj[boxString] = "h";
  });
 
  expect(FindWinner(ScoreObj)).toBe("tied")
});
