const express = require("express");
const router = express.Router();
const db = require("../helpers/petsModel");

router.get("/", async (req, res) => {
  try {
    const allPets = await db.get();
    res.status(200).json(allPets);
  } catch (error) {
    res.status(500).json({ error: "Could not retrieve pets" });
  }
});

module.exports = router;
