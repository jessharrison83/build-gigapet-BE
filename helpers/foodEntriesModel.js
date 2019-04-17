const db = require("./dbConfig");

async function get(id) {
    try {
        const entries = await db("food_entry").where({ child_id: id });
        const initialAcc = { 
            protein: [],
            carbs: [],
            vegetables: [],
            fruit: [],
            diary: []
        };

        const sortedEntries = entries.reduce((acc, entry) => {
            acc[entry.category.toLowerCase()].push(entry);
            return acc;
        }, initialAcc);

        return sortedEntries;
    } catch (error) {
        return error;
    }   
}

async function getById(id) {
    try {
        const entries = await db("food_entry").where({ id });
        return entries;
    } catch (error) {
        return error;
    }   
}

async function add(id, entry) {
    const newEntry = {
        child_id: id,
        ...entry,
    };
    
    try {
        const entryId = await db.insert(newEntry).into("food_entry");
        const entries = await getById(entryId);
        return entries;
    } catch (error) {
        return error;
    }
}

async function update(id, entry) {
    try {
        const entries = db("food_entry")
            .where({ id })
            .update(id, entry);
        return entries;
    } catch (error) {
        return error;
    }
}

async function remove(id) {
    try {
        const entryToDelete = await getById(id);
        await db("food_entry").where({ id }).del();
        return entryToDelete;
    } catch (error) {
        return error;
    }
}

async function getFilter(id, query) {
    try {
        const entries = await db("food_entry").where({ child_id: id });
        const initialAcc = { 
            protein: [],
            carbs: [],
            vegetables: [],
            fruit: [],
            diary: []
        };

        const sortedEntries = entries.reduce((acc, entry) => {
            acc[entry.category.toLowerCase()].push(entry);
            return acc;
        }, initialAcc);

        return sortedEntries;
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
