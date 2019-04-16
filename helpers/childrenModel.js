const db = require("./dbConfig.js");

module.exports = {
  getById: id => {
    return db("children")
      .select(
        "children.id",
        "children.name",
        "children.pet_name",
        "children.pet_level",
        "children.pet_id",
        "pets.happy",
        "pets.ok",
        "pets.sad",
        "pets.sick",
        "pets.eating"
      )
      .innerJoin("pets", "children.pet_id", "pets.id")
      .where({ "children.id": id });
  },

  update: (id, body) => {
    return db("children")
      .where({ id })
      .update(body)
      .then(num => num);
  },

  remove: id => {
    return db("children")
      .where({ id })
      .delete()
      .then(num => num);
  }
};
