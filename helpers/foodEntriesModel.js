let idRef = 3;

const dummyData = {
    data: [{
        id: 1,
        name: "Porridge",
        quantity: 2,
        meal: "Breakfast",
        category: "Carbs",
        date: "2019--04-15",
        child_id: 1
    },
    {
        id: 2,
        name: "Soup",
        quantity: 1,
        meal: "Lunch",
        category: "Vegetables",
        date: "2019--04-15",
        child_id: 1
    }],
    where: (id) => dummyData.data.filter(each => each.child_id == id),
    insert: (child_id, entry) => {
        const entryPlusId = { 
            id: idRef, 
            child_id, 
            ...entry 
        };
        dummyData.data.push(entryPlusId);
        idRef++;
        return dummyData.data; 
    },
    update: (id, entry) => {
        return dummyData.data.map(each => {
            if (each.id == id) {
                return {
                    id: each.id,
                    ...entry
                };
            }
            return each;
        });
    },
    remove: (id) => dummyData.data.filter(each => each.id != id),
};

const db = require("./dbConfig");

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
        const entries = dummyData.update(id, entry);
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

async function getFilter(query) {
    try {
        const entries = ["working"];
        return entries;
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
