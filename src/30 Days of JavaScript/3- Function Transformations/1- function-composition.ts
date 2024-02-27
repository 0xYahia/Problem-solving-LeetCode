// 2704. To Be Or Not To Be
// Easy
// Companies
// Write a function expect that helps developers test their code. It should take in any value val and return an object with the following two functions.

// toBe(val) accepts another value and returns true if the two values === each other. If they are not equal, it should throw an error "Not Equal".
// notToBe(val) accepts another value and returns true if the two values !== each other. If they are equal, it should throw an error "Equal".


// Example 1:

// Input: func = () => expect(5).toBe(5)
// Output: {"value": true}
// Explanation: 5 === 5 so this expression returns true.
// Example 2:

// Input: func = () => expect(5).toBe(null)
// Output: {"error": "Not Equal"}
// Explanation: 5 !== null so this expression throw the error "Not Equal".
// Example 3:

// Input: func = () => expect(5).notToBe(null)
// Output: {"value": true}
// Explanation: 5 !== null so this expression returns true.

export type F = (x: number) => number;

export function compose(functions: F[]): F {


  return function (x: number): number {
    if (functions.length === 0) {
      return x;
    }

    let result: number = functions[functions.length - 1](x);
    for (let i: number = functions.length - 2; i >= 0; i--) {
      result = functions[i](result);
    }

    return result;
  };
};





const arr: F[] = [x => x + 1, x => x * x, x => 2 * x];
compose(arr);




/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */