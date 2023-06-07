const fs = require('fs');

// Extracting the search string from the command-line argument
const searchString = process.argv[2];

fs.readFile('file.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }

  // Checking if the string exists in the file
  const exists = data.includes(searchString);
  console.log(exists);
});

// TO EXECUTE THIS CODE WE MUST RUN node main.js WITH THE DESIRED STRING TO GET THE DESIRED OUTPUT (THE FILE CONTAINING THE TEXT MUST BE PLACED IN THE SAME PATH AS MAIN.JS)
/* EXAMPLE: 

node main.js Node.js is an open-source, cross-platform, back-end JavaScript runtime
*/

// OUTPUT: true
