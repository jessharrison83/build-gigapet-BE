const express = require("express");
const bcrypt = require("bcryptjs");
const router = express.Router();
const db = require("../helpers/dbConfig");

const { generateToken } = require("../middleware/auth");

router.post("/register", async (req, res) => {
  let parent = req.body;
  const hash = bcrypt.hashSync(parent.password, 10);
  parent.password = hash;

  try {
    const id = await db("parents").insert(parent);
    const newParent = await db("parents")
      .where({ id: id[0] })
      .first();
    const token = generateToken(newParent);

    res.status(201).json({ token, id: id[0] });
  } catch (error) {
    res.status(500).json({ message: `The user could not be created` });
  }
});

router.post("/login", async (req, res) => {
  let { username, password } = req.body;

  try {
    const parent = await db("parents")
      .where({ username })
      .first();
    const passwordsMatch = bcrypt.compareSync(password, parent.password);

    if (parent && passwordsMatch) {
      const token = generateToken(parent);
      res.status(200).json({ token, id: parent.id });
    } else {
      res.status(401).json({ message: `Invalid Credentials` });
    }
  } catch (error) {
    res.status(500).json({ message: `User could not be found` });
  }
});

module.exports = router;
