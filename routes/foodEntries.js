const router = require("express").Router();
const Food = require("../data/helpers/foodModel"); 

router.get("/child/:id/entries", async (req, res, next) => {
    const { id } = req.params;
    try {
        const food = await Food.get(id);
        res.status(200).json({ entries: food });
    } catch (error) {
        next({ status: 500, message: "entry not found"});
    }
});

router.post("/child/:id/entries", async (req, res, next) => {
    const { id } = req.params;
    console.log(id);
    try {
        const entries = await Food.get(id);
        res.status(200).json({ entries });
    } catch (error) {
        next({ status: 500, message: "entry not found" });
    }
});

module.exports = router;