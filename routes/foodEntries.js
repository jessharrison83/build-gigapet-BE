const router = require("express").Router();
const Food = require("../helpers/foodEntriesModel");

router.get("/child/:id/entries", async (req, res, next) => {
  const { id } = req.params;
  const { query } = req;

  try {
    let entries;
    const queriesExist = Object.keys(query).length;
    if (queriesExist) {
      entries = await Food.getFilter(id, query);
    } else {
      entries = await Food.get(id);
    }
    res.status(200).json(entries);
  } catch (error) {
    next({
      status: 500,
      message: "Entry not found"
    });
  }
});

router.post("/child/:id/entries", async (req, res, next) => {
  const { id } = req.params;
  const entry = req.body;
  try {
    const entries = await Food.add(id, entry);
    res.status(201).json(entries);
  } catch (error) {
    next({
      status: 500,
      message: "Entry not found"
    });
  }
});

router.put("/entries/:id", async (req, res, next) => {
  const { id } = req.params;
  const entry = req.body;
  try {
    const response = await Food.update(id, entry);
    if (response) {
      const newEntry = await Food.getById(id);
      res.status(201).json(newEntry);
    } else {
      res.status(404).json({ message: `Entry could not be updated` });
    }
  } catch (error) {
    next({
      status: 500,
      message: "Entry not found"
    });
  }
});

router.delete("/entries/:id", async (req, res, next) => {
  const { id } = req.params;
  try {
    const response = await Food.remove(id);

    if (response) {
      res.status(201).json({
        message: `The food entry with ${id} was successfully deleted`
      });
    }
  } catch (error) {
    next({
      status: 500,
      message: "Entry not found"
    });
  }
});

module.exports = router;
