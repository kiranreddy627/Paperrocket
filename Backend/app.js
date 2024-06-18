const mongoose = require("mongoose");
const express = require("express");
require("dotenv").config();

const app = express();
const PORT = 3000;
const DB = process.env.DB_URL;
const UserRouter = require("./Routes/userRouter");
const User = require("./Models/User");
// Middleware for parsing JSON
app.use(express.json());

// Connect to MongoDB
mongoose.connect(DB).then(() => {
  console.log("Connected to MongoDB");
}).catch((error) => {
  console.error("MongoDB connection error:", error);
});

// Error handling for MongoDB connection
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));

// Example route
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.use("/user",UserRouter)


// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
