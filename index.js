function receivesAFunction(callback) {
  return callback()
};

function returnsANamedFunction(name) {
  return name || function unnamedFn() {};
}

function returnsAnAnonymousFunction() {
  return () => {}
}