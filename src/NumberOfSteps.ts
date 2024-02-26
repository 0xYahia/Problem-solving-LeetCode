function numberOfSteps(num: number): number {
  let steps: number = 0;
  while (num > 0) {
    if (num % 2 === 0) {
      num = num / 2;
      console.log(
        `Step ${steps + 1}) ${num * 2} is even; divide by 2 and obtain ${num}. `
      );
    } else {
      num = num - 1;
      console.log(
        `Step ${steps + 1}) ${num + 1} is odd; subtract 1 and obtain ${num}. `
      );
    }
    steps += 1;
  }
  return steps;
}

console.log(numberOfSteps(14));
console.log("########################");
console.log(numberOfSteps(8));
console.log("########################");
console.log(numberOfSteps(123));

// Enhanced
function numberOfSteps2(num: number): number {
  for (var i: number = 0; num != 0; num % 2 === 0 ? (num /= 2) : num--) {
    i++;
  }
  return i;
}
