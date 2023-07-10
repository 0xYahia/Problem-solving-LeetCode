function numberOfSteps(num: number): number {
  let steps: number = 0;
  // while (num > 0) {
  for (let i = 0; i <= num; i++) {
    if (num % 2 === 0) {
      num = num / 2;
      console.log(
        `Step ${steps + 1}) ${num * 2} is even; divide by 2 and obtain ${num}. `
      );
    } else {
      num = num - 1;
      console.log(
        `Step ${steps + 1}) ${num + 1} is even; divide by 2 and obtain ${num}. `
      );
    }
    steps += 1;
  }
  // }
  return steps;
}

numberOfSteps(14);
