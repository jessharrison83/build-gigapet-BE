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