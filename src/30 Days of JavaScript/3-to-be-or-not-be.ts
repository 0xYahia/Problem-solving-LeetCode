type ToBeOrNotToBe = {
  toBe: (val: any) => boolean;
  notToBe: (val: any) => boolean;
};

function expect(val: any): ToBeOrNotToBe {
  const obj = {
    toBe: (value: boolean) => {
      if (value === val)
        return true
      else
        throw new Error('Not Equal')
    },
    notToBe: (value: boolean) => {
      if (value !== val)
        return true
      else
        throw new Error('Equal')
    },
  }
  return obj
};

/**
* expect(5).toBe(5); // true
* expect(5).notToBe(5); // throws "Equal"
*/