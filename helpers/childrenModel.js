const db = require("./dbConfig.js");

module.exports = {
    getById: id => {
        return db("children")
            .select(
                "children.id",
                "children.name",
                "children.pet_id",
                "children.pet_name",
                "children.pet_experience",
                "pets.happy",
                "pets.ok",
                "pets.sad",
                "pets.sick",
                "pets.eating"
            )
            .innerJoin("pets", "children.pet_id", "pets.id")
            .where({ "children.id": id });
    },

    add: (id, body) => {
        return db
            .insert(body)
            .into("children")
            .then(num =>
                db
                    .insert({ child_id: num[0], parent_id: id })
                    .into("parentsChildren")
            )
            .then(r => r)
            .catch(e => e);
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
