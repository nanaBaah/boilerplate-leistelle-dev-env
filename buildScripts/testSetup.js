/*eslint no-undef: "error"*/
/*eslint-env node*/

// This file is not transpiled, so must use CommonJS and ES5

// Register babel to transpile before out tests run.
require('babel-register')();

// Disable wepack features that Mocha does not understand.
require.extensions['.css'] = () => {};
