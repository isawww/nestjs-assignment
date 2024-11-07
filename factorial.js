// Import the express library
const express = require("express");

// Create an instance of the express app
const app = express();

// Define the port number
const port = 9090;

// Function to calculate factorial
const factorial = (num) => {
  if (num < 0) return null; // Factorial is not defined for negative numbers
  if (num === 0) return 1; // Factorial of 0 is 1
  let result = 1;
  for (let i = 1; i <= num; i++) {
    result *= i;
  }
  return result;
};

// Define a GET endpoint for the factorial calculation
app.get("/assignments/factorial/:number", (req, res) => {
  const number = parseInt(req.params.number, 10);
  if (isNaN(number)) {
    return res.status(400).json({ error: "Please provide a valid integer." });
  }

  const result = factorial(number);
  if (result === null) {
    return res
      .status(400)
      .json({ error: "Factorial is not defined for negative numbers." });
  }

  res.json({ factorial: result });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
