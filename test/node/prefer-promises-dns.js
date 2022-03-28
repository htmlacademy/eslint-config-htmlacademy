// If you using 'dns', you should use the `{promises as dns}` API.
import {promises as dns} from 'dns';

async function correctLookup(hostname) {
  const {address, family} = await dns.lookup(hostname);
  console.log(`${address} - ${family}`);
}

correctLookup();

// The approach from the following example is considered erroneous.
// Uncomment the following example for demonstration.
// -----
// import dns from 'dns';
//
// function incorrectLookup(hostname) {
//   dns.lookup(hostname, (error, address, family) => {
//     ...
//   })
// }
//
// incorrectLookup();
