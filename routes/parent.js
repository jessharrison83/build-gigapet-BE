const router = require("express").Router();
const Parent = require("../helpers/parentsModel");

router.get("/:id", async (req, res, next) => {
  const { id } = req.params;
  try {
    const parent = await Parent.get(id);
    res.status(200).json(parent);
  } catch (error) {
    next({ status: 500, message: "Could not find user" });
  }
});

module.exports = router;
