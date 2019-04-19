const db = require("./dbConfig");

const utils = require("./utils");

async function get(id) {
    try {
        const entries = await db("food_entry").where({ child_id: id });
        return entries;
    } catch (error) {
        return error;
    }
}

async function getById(id) {
    try {
        const entries = await db("food_entry")
            .where({ id })
            .first();
        return entries;
    } catch (error) {
        return error;
    }
}

async function add(id, entry) {
    const newEntry = {
        child_id: id,
        ...entry
    };

    try {
        const entryId = await db.insert(newEntry).into("food_entry");
        const entries = await getById(entryId[0]);
        return entries;
    } catch (error) {
        return error;
    }
}

function update(id, entry) {
    return db("food_entry")
        .where({ id })
        .update(entry)
        .then(num => num);
}

async function remove(id) {
    return db("food_entry")
        .where({ id })
        .delete()
        .then(num => num);
}

async function getFilter(id, query) {
    const { category } = query;
    try {
        const entries = await utils.getEntries(id, query);
        const sortedEntries = utils.filterData(entries);

        let queryResult = sortedEntries;

        if (category) {
            queryResult = { [category]: queryResult[category] };
        }
        return queryResult;
    } catch (error) {
        return error;
    }
}

module.exports = {
    get,
    getById,
    add,
    update,
    remove,
    getFilter
};
