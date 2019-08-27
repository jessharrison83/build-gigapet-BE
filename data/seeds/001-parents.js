const bcrypt = require("bcryptjs");

let jeremyPassword = bcrypt.hashSync("jeremy", 10);
let stevePassword = bcrypt.hashSync("steve", 10);
let bwPW = bcrypt.hashSync("bu1ldt3am", 10);

exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex("parents")
        .then(function() {
            // Inserts seed entries
            return knex("parents").insert([
                {
                    id: 1,
                    name: "Jeremy",
                    email: "jeremy@jeremy.com",
                    username: "jeremy",
                    password: jeremyPassword,
                    pin: 1234,
                    img_url:
                        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                },
                {
                    id: 2,
                    name: "Steve",
                    email: "steve@steve.com",
                    username: "steve",
                    password: stevePassword,
                    pin: 1234,
                    img_url:
                        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                },
                {   
                    id: 3,
                    name: "bwteam",
                    email: "bw@lambda.com",
                    username: "GigaPet1",
                    password: bwPW,
                    pin: 1234,
                    img_url: "https://cdn.pixabay.com/photo/2017/02/01/11/17/alien-2029727_960_720.png"
                }
            ]);
        });
};
