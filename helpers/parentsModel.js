const db = require("./dbConfig");

async function get(id) {
    try {
        const parent = await db("parents").where({ id }).first();
        return parent;
    } catch (error) {
        return error;
    }
}

module.exports = { get };