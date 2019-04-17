const express = require("express");
const router = express.Router();
const db = require("../helpers/childrenModel");

// Get child and pet details by id
router.get("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const child = await db.getById(id).first();
    res.status(200).json(child);
  } catch (error) {
    res.status(500).json({ message: `The child with ID ${id} doesn't exist` });
  }
});

// Edit child and pet details
router.put("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const body = req.body;
    const updatedResponse = await db.update(id, body);

    if (updatedResponse) {
      const responseBody = await db.getById(id).first();
      res.status(200).json(responseBody);
    } else {
      res
        .status(404)
        .json({ message: `The child with ID ${id} doesn't exist` });
    }
  } catch (error) {
    res.status(500).json({ message: `Error retrieving child` });
  }
});

// Delete child and pet details
router.delete("/:id", async (req, res) => {
  const id = req.params.id;

  try {
    const deletedResponse = await db.remove(id);

    if (deletedResponse) {
      res
        .status(200)
        .json({ message: `The child with ID ${id} was successfully deleted` });
    } else {
      res
        .status(404)
        .json({ error: `The child with ID ${id} could not be deleted` });
    }
  } catch (error) {
    res.status(500).json({ error: `The child with ID ${id} doesn't exist` });
  }
});

module.exports = router;
