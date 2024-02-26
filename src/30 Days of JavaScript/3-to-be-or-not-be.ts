type ToBeOrNotToBe = {
  toBe: (val: boolean) => boolean;
  notToBe: (val: boolean) => boolean;
};



// eslint-disable-next-line @typescript-eslint/no-unused-vars
function expect(val: boolean) {
  const obj: ToBeOrNotToBe = {
    toBe: (value: boolean) => {
      if (value === val)
        return true;
      else
        throw new Error('Not Equal');
    },
    notToBe: (value: boolean) => {
      if (value !== val)
        return true;
      else
        throw new Error('Equal');
    },
  };
  return obj;
}

/**
* expect(5).toBe(5); // true
* expect(5).notToBe(5); // throws "Equal"
*/