
const dummyData = {
    where: (id) => this.data.filter(each => each.id === id),
    data: [{
        id: 1,
        name: "Porridge",
        quantity: 2,
        meal: "Breakfast",
        category: "Carbs",
        date: "2019--04-15",
        child_id: 1
    }]};
    
async function get(id) {
    try {
        const entries = dummyData.where(id);
        return entries;
    } catch (error) {
        return error;
    }   
}

function add(id) {
    // 
    return `added food for child ${id}`;
}

module.exports = {
    get,
    add,
};