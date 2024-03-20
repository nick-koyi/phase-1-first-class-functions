function receivesAFunction(callback) {
  return callback();
}

function returnsANamedFunction() {
  return function unnamedFn() {};
}

function returnsAnAnonymousFunction() {
  return () => {};
}
