const router = require("express").Router();

router.get("/:id", async (req, res, next) => {
    const { id } = req.params;
    try {
        res.send("working");
    } catch (error) {
        next({ status: 500, message: "Could not find used" });
    }
});

module.exports = router;