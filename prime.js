// Import the express library
const express = require("express");

// Create an instance of the express app
const app = express();

// Define the port number
const port = 9090;

// Function to check if a number is prime
const isPrime = (num) => {
  if (num <= 1) return false; // Numbers less than or equal to 1 are not prime
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false; // Not a prime number
  }
  return true; // It's a prime number
};

// Define a GET endpoint for the prime number check
app.get("/assignments/prime/:number", (req, res) => {
  const number = parseInt(req.params.number, 10);
  if (isNaN(number)) {
    return res.status(400).json({ error: "Please provide a valid integer." });
  }

  const result = isPrime(number);
  res.json({ isPrime: result });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
