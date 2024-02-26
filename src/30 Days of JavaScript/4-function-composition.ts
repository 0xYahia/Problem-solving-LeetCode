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