const express = require('express');
const app = express();

// Route: /
app.get('/', (req, res) => {
  const instructions = 'Go to /number/:num to check if :num is prime or composite';
  res.send(instructions);
});

// Route: /number
app.get('/number', (req, res) => {
  res.send(instructions);
});

// Route: /number/:num
app.get('/number/:num', (req, res) => {
  const num = parseInt(req.params.num);

  if (isNaN(num)) {
    res.send('Invalid number');
    return;
  }

  if (num < 0) {
    res.send('The number is negative');
    return;
  }

  if (num === 1) {
    res.send('The number 1 is neither prime nor composite');
    return;
  }

  let isPrime = true;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      isPrime = false;
      break;
    }
  }

  if (isPrime) {
    res.send(`The number ${num} is prime`);
  } else {
    res.send(`The number ${num} is composite`);
  }
});

// Starting the server
app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
