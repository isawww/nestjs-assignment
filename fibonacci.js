const express = require("express");
const app = express();
const port = 9090;

// Function to generate the Fibonacci sequence
function generateFibonacci(n) {
  let sequence = [0, 1];
  for (let i = 2; i < n; i++) {
    sequence.push(sequence[i - 1] + sequence[i - 2]);
  }
  return sequence.slice(0, n); // Return the first n numbers
}

// Route to handle the Fibonacci sequence request
app.get("/assignments/fibonacci/:n", (req, res) => {
  const n = parseInt(req.params.n, 10);

  // Validate input
  if (isNaN(n) || n <= 0) {
    return res
      .status(400)
      .json({ error: "Please provide a positive integer for n." });
  }

  const sequence = generateFibonacci(n);
  res.json({ sequence });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
