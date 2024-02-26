// const pages = Array(3)
//   .fill(0)
//   .map((_: any, i) => i + 1);
// console.log(pages);

function fizzBuzz(n: number): string[] {
  const result: string[] = [];
  const arr: number[] = Array(n)
    .fill(0)
    .map((_: number, i) => i + 1);
  for (const num of arr) {
    if (num % 3 == 0 && num % 5 == 0) {
      result.push("FizzBuzz");
    } else if (num % 3 == 0) {
      result.push("Fizz");
    } else if (num % 5 == 0) {
      result.push("Buzz");
    } else {
      result.push(num.toString());
    }
  }
  return result;
}

console.log(fizzBuzz(3));
console.log(fizzBuzz(5));
console.log(fizzBuzz(15));

// Enhance

function fizzBuzz2(n: number): string[] {
  const result: string[] = [];
  for (let i: number = 1; i <= n; i++) {
    if (i % 3 == 0 && i % 5 === 0) {
      result.push("FizzBuzz");
    } else if (i % 3 === 0) {
      result.push("Fizz");
    } else if (i % 5 === 0) {
      result.push("Buzz");
    } else {
      result.push(i.toString());
    }
  }
  return result;
}

console.log(fizzBuzz2(3));
console.log(fizzBuzz2(5));
console.log(fizzBuzz2(15));

// More Enhanced

function fizzBuzz3(n: number): string[] {
  const output: string[] = Array(n).fill("");
  for (let i: number = 1; i <= n; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      output[i - 1] = "FizzBuzz";
    } else if (i % 3 == 0) {
      output[i - 1] = "Fizz";
    } else if (i % 5 == 0) {
      output[i - 1] = "Buzz";
    } else {
      output[i - 1] = i.toString();
    }
  }
  return output;
}
