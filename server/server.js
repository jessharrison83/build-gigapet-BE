const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const server = express();
const { authenticate } = require("../middleware/auth");

const authRoutes = require("../routes/auth");

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use("/api/auth", authRoutes);
server.use(authenticate);

// Routes:

server.get("/", (req, res) => {
  res.status(200).send(`Welcome to the Gigapet API 🐾`);
});

module.exports = server;
