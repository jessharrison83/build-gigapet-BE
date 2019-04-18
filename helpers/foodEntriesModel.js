const db = require("./dbConfig");

// function filterData(entries) {
//     const initialAcc = {
//         protein: [],
//         carbs: [],
//         vegetables: [],
//         fruit: [],
//         dairy: [],
//         treats: []
//     };

//     const sortedEntries = entries.reduce((acc, entry) => {
//         acc[entry.category.toLowerCase()].push(entry);
//         return acc;
//     }, initialAcc);

//     return sortedEntries;
// }

// async function get(id) {
//     try {
//         const entries = await db("food_entry").where({ child_id: id });
//         const sortedEntries = filterData(entries);

//         return sortedEntries;
//     } catch (error) {
//         return error;
//     }
// }

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

function setDays(timeSpan) {
    switch (timeSpan) {
    case "day":
        return 1;
    case "week":
        return 7;
    case "month":
        return 30;
    default:
        return 365;
    }
}

async function getEntries(id, query) {
    if (query.time_span) {
        const days = setDays(query.time_span);

        const oneDay = 24 * 60 * 60 * 1000;
        const dayFrom = new Date(Date.now() - oneDay * days).toISOString();

        const res = await db("food_entry")
            .where({ child_id: id })
            .where("date_added", ">", dayFrom);
        return res;
    }
    if (query.specific_time_span) {
        const [dateFromRaw, dateToRaw] = query.specific_time_span.split("to");
        const dateFromToParse = isNaN(dateFromRaw)
            ? dateFromRaw
            : dateFromRaw * 1000;
        const dateToToParse = isNaN(dateToRaw) ? dateToRaw : dateToRaw * 1000;
        const dateFrom = new Date(dateFromToParse).toISOString();
        const dateTo = new Date(dateToToParse).toISOString();

        const res = await db("food_entry")
            .where({ child_id: id })
            .where("date_added", ">", dateFrom)
            .where("date_added", "<", dateTo);
        return res;
    }

    const res = await db("food_entry").where({ child_id: id });
    return res;
}

// async function getFilter(id, query) {
//     try {
//         const entries = await getEntries(id, query);

//         const sortedEntries = filterData(entries);

//         let queryResult = sortedEntries;

//         if (query.category) {
//             queryResult = { [query.category]: sortedEntries[query.category] };
//         }
//         return queryResult;
//     } catch (error) {
//         return error;
//     }
// }

async function getFilter(id, query) {
    try {
        const entries = await getEntries(id, query);

        // const sortedEntries = filterData(entries);

        let queryResult = entries;

        if (query.category) {
            queryResult = { [query.category]: queryResult[query.category] };
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
