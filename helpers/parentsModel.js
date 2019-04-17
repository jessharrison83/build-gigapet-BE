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
                "children.pet_id",
                "pets.happy",
                "pets.ok",
                "pets.sad",
                "pets.sick",
                "pets.eating"
            )
            .innerJoin("parentsChildren", "parents.id", "parentsChildren.parent_id")
            .innerJoin("children", "parentsChildren.child_id", "children.id")
            .innerJoin("pets", "children.pet_id", "pets.id");

        const childArray = parentChildren.reduce((acc, each) => {
            acc.push({ ...each });
            return acc;
        }, []);

        const parentObj = {
            id: parent.id,
            name: parent.name,
            img_url: parent.img_url,
            childArray
        };

        return parentObj;
    } catch (error) {
        return error;
    }
}

module.exports = { get };
