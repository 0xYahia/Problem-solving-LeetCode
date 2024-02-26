import { F, compose } from "./30 Days of JavaScript/4-function-composition";

const arr: F[] = [x => x + 1, x => x * x, x => 2 * x];
compose(arr);

function test() {
  console.log(arr);

  for (let i: number = 0; i < 5; i++) {
    console.log(i);
    console.log('yahia');
  }
  return 0;
}

test();
