// If you using 'fs', you should use the `{promises as fs}` API.
import {promises as fs} from 'fs';

async function correctReadData(filePath) {
  const content = await fs.readFile(filePath, 'utf8');
  return content;
}

correctReadData();

// The approach from the following example is considered erroneous.
// Uncomment the following example for demonstration.
// -----
// import fs from 'fs';
//
// function incorrectReadData(filePath) {
//   fs.readFile(filePath, 'utf8', (error, content) => {
//     if (error) {
//       console.log(error);
//     }
//     return content;
//   });
// }
//
// incorrectReadData();
