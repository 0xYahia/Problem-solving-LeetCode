function createHelloWorld() {

  return function (..._args: string[]): string {
    return 'Hello World';
  };
}

/**
* const f = createHelloWorld();
* f(); // "Hello World"
*/