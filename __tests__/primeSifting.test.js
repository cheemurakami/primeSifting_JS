import { PrimeSifting } from './../src/primeSifting.js';


test("returns array counting up to num", () => {
  expect(PrimeSifting(8)).toEqual([2,3,4,5,6,7,8]);
});

// test("the function returns 16 for 16 qaurters", () => {
//   expect(CoinCounter(4.99, [0,0,0,0])).toEqual(["19 quarters","2 dimes",0,"4 pennies"]);
// });