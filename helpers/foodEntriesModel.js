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
    insert: (entry) => {
        dummyData.data.push(entry);
        return dummyData.data; 
    },
};

async function get(id) {
    try {
        const entries = dummyData.where(id);
        return entries;
    } catch (error) {
        return error;
    }   
}

function add(entry) {
    try {
        const entries = dummyData.insert(entry);
        return entries;
    } catch (error) {
        return error;
    }
}

module.exports = {
    get,
    add,
};