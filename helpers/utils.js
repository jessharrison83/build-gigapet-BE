const db = require("./dbConfig");

function filterData(entries) {
    const initialAcc = {
        protein: [],
        carbs: [],
        vegetables: [],
        fruit: [],
        dairy: [],
        treats: []
    };

    const sortedEntries = entries.reduce((acc, entry) => {
        acc[entry.category.toLowerCase()].push(entry);
        return acc;
    }, initialAcc);

    return sortedEntries;
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

function formatDays(time_span) {
    const [dateFromRaw, dateToRaw] = time_span.split("to");
    const dateFromToParse = isNaN(dateFromRaw)
        ? dateFromRaw
        : dateFromRaw * 1000;
    const dateToToParse = isNaN(dateToRaw) ? dateToRaw : dateToRaw * 1000;
    const dateFrom = new Date(dateFromToParse).toISOString();
    const dateTo = new Date(dateToToParse).toISOString();
    return [dateFrom, dateTo];
}

async function getEntries(id, query) {
    const { time_span, specific_time_span } = query;
    if (time_span) {
        const days = setDays(query.time_span);

        const oneDay = 24 * 60 * 60 * 1000;
        const dayFrom = new Date(Date.now() - oneDay * days).toISOString();

        const res = await db("food_entry")
            .where({ child_id: id })
            .where("date_added", ">", dayFrom);
        return res;
    }
    if (specific_time_span) {
        const [dateFrom, dateTo] = formatDays(specific_time_span);
        const res = await db("food_entry")
            .where({ child_id: id })
            .where("date_added", ">", dateFrom)
            .where("date_added", "<", dateTo);
        return res;
    }

    const res = await db("food_entry").where({ child_id: id });
    return res;
}

module.exports = {
    filterData,
    getEntries
};