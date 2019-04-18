const router = require("express").Router();
const Parent = require("../helpers/parentsModel");
const Child = require("../helpers/childrenModel");

router.get("/:id", async (req, res, next) => {
    const { id } = req.params;

    try {
        const parent = await Parent.get(id);
        res.status(200).json(parent);
    } catch (error) {
        next({ status: 500, message: "Could not find user" });
    }
});

router.post("/:id/child", async (req, res, next) => {
    const { id } = req.params;
    const { body } = req;
    try {
        const childId = await Child.add(id, body);
        const child = await Child.getById(childId[0]).first();
        res.status(201).send(child);
    } catch (error) {
        next({ status: 500, message: "Could not add child" });
    }
});

module.exports = router;
