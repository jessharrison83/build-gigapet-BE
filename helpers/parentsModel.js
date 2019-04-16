const db = require("./dbConfig");

async function get(id) {
    try {
        const parent = await db("parents").where({ id }).first();
        const parentChildren = await db("parents")
            .where("parents.id", id)
            .select(
                { child_name: "children.name" },
                "children.pet_name",
                "children.pet_level",
                "children.pet_id"
            )
            .innerJoin("parentsChildren", "parents.id", "parentsChildren.parent_id")
            .innerJoin("children", "parentsChildren.child_id", "children.id");

        const childArray = parentChildren.reduce((acc, { child_name, pet_name, pet_level, pet_id }) => {
            acc.push({
                child_name,
                pet_name,
                pet_level,
                pet_id
            });

            return acc;
        }, []);
        
        const parentObj = {
            id: parent.id, 
            name: parent.name,
            childArray
        };

        return parentObj;
    } catch (error) {
        return error;
    }
}

get(1);

module.exports = { get };
