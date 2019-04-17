const db = require("./dbConfig");

async function get(id) {
  try {
    const parent = await db("parents")
      .where({ id })
      .first();
    const parentChildren = await db("parents")
      .where("parents.id", id)
      .select(
        { child_id: "children.id" },
        { child_name: "children.name" },
        "children.pet_name",
        "children.pet_experience",
        "children.pet_id"
      )
      .innerJoin("parentsChildren", "parents.id", "parentsChildren.parent_id")
      .innerJoin("children", "parentsChildren.child_id", "children.id");

    const childArray = parentChildren.reduce(
      (acc, { child_id, child_name, pet_name, pet_experience, pet_id }) => {
        acc.push({
          child_id,
          child_name,
          pet_name,
          pet_experience,
          pet_id
        });

        return acc;
      },
      []
    );

    const parentObj = {
      id: parent.id,
      name: parent.name,
      pin_code: parent.pin_code,
      childArray
    };

    return parentObj;
  } catch (error) {
    return error;
  }
}

module.exports = { get };
