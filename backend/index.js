const express = require("express"); // Import the Express library
require("dotenv").config(); // Load environment variables from .env file

// Create an Express application
const app = express();

// Middleware to parse JSON requests
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// Define a route for the root URL
app.get("/", (req, res) => {
  res.json({ message: "Hello, World!" });
});

// listen on port 3000
app.listen(process.env.PORT, () => {
  console.log("Server is running on http://localhost:" + process.env.PORT);
});
