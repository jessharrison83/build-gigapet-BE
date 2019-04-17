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
        const entries = await Food.update(id, entry);
        res.status(201).json(entries);
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
        const entries = await Food.remove(id);
        res.status(201).json({ entries });
    } catch (error) {
        next({
            status: 500,
            message: "Entry not found"
        });
    }
});

module.exports = router;
