// You must need to know Javascript in order to learn Node JS.

// How Node JS differs from Vanilla JS?
// Node JS runs on server - not in a browser (Node for Backend & JavaScript for Frontend)
// For Node JS console is the terminal window
// Node JS has global object instead of window object
// console.log(global);
// Node JS has some feature but browser dosen't
// Node JS has common core modules that we can explore

// const os = require('os');
// console.log(os.type());
// console.log(os.version());
// console.log(os.homedir());

// console.log(__dirname);
// console.log(__filename);

// const path = require('path');
// console.log(path.dirname(__filename));
// console.log(path.basename(__filename));
// console.log(path.extname(__filename));
// console.log(path.parse(__filename));

const { add, subtract, multiply, divide } = require('./math');

console.log(add(3, 2),
multiply(5, 2),
subtract(15, 10),
divide(10, 2));
