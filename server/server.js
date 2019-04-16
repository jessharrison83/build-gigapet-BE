const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const server = express();
const { authenticate } = require("../middleware/auth");

const authRoutes = require("../routes/auth");
const parentRoutes = require("../routes/parent");
const foodEntriesRoutes = require("../routes/foodEntries");

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use("/api/auth", authRoutes);


server.get("/", (req, res) => {
    res.status(200).send("Welcome to the Gigapet API 🐾");
});



server.use(authenticate);

// Routes:
server.use("/api/parents", parentRoutes);
server.use("/api", foodEntriesRoutes);

module.exports = server;
