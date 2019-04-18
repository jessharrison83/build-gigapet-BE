const db = require("./dbConfig.js");

module.exports = {
    get: () => {
        return db("pets");
    }
};
