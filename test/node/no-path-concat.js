/* global __dirname, __filename */
import path from 'path';

const filename = 'foo.js';
const fileExtension = 'js';

// If you create variables to create paths to other files
// you should use special module as `path` and his methods
// `join()` and `resolve()`.
const fullPath1 = path.join(__dirname, filename);
const fullPath2 = path.join(__filename, filename);
// Or you should create path without concatenation.
const fullPath3 = `${__dirname}.${fileExtension}`;
const fullPath4 = `${__filename}.test.${fileExtension}`;

throw new Error(fullPath1, fullPath2,fullPath3, fullPath4);

// The approach from the following example is considered erroneous.
// Uncomment the following example for demonstration.
// -----
// const fullPath5 = `${__dirname}/foo.js`;
// const fullPath6 = `${__filename}/foo.js`;
