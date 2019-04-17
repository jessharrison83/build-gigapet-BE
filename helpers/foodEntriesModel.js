const db = require("./dbConfig");

function filterData(entries) {
    const initialAcc = { 
        protein: [],
        carbs: [],
        vegetables: [],
        fruit: [],
        diary: [],
        treats: [],
    };

    const sortedEntries = entries.reduce((acc, entry) => {
        acc[entry.category.toLowerCase()].push(entry);
        return acc;
    }, initialAcc);

    return sortedEntries;
}

async function get(id) {
    try {
        const entries = await db("food_entry").where({ child_id: id });   
        const sortedEntries = filterData(entries);

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

function setDays(timeSpan) {
    switch (timeSpan) {
    case "day":
        return 1;
    case "week":
        return 7;
    case "month":
        return 30;
    }
}

async function getFilter(id, query) {
    const days = setDays(query.time_span) || 365;
   
    const oneDay = 24 * 60 * 60 * 1000;
    const dayFrom = new Date(Date.now() - (oneDay * days));

    try {
        const entries = await db("food_entry")
            .where({ id })
            .where("date_added", ">", dayFrom);
        
        const sortedEntries = filterData(entries);

        let queryResult = sortedEntries;

        if (query.category) {
            queryResult = { [query.category]: sortedEntries[query.category] };
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
