function createHelloWorld() {

  return function (...args: string[]): string {
    return 'Hello World';
  };
}

/**
* const f = createHelloWorld();
* f(); // "Hello World"
*/