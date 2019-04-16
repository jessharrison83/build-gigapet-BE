const express = require("express");
const router = express.Router();
const db = require("../helpers/childrenModel");

router.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const child = await db.getById(id);
    if (child.length) {
      res.status(200).json(child);
    } else {
      res
        .status(404)
        .json({ message: `The child with ID ${id} doesn't exist` });
    }
  } catch (error) {
    res.status(500).json({ message: `Error retrieving child` });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const body = req.body;
    const updatedResponse = await db.update(id, body);

    if (updatedResponse) {
      const responseBody = await db.getById(id);
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

router.delete("/:id", async (req, res) => {
  try {
    const id = req.params.id;
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
