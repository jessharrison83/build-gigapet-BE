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

async function get(id) {
    try {
        const entries = dummyData.where(id);
        return entries;
    } catch (error) {
        return error;
    }   
}

async function add(id, entry) {
    try {
        const entries = dummyData.insert(id, entry);
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
        const entries = dummyData.remove(id);
        return entries;
    } catch (error) {
        return error;
    }
}

module.exports = {
    get,
    add,
    update,
    remove
};
