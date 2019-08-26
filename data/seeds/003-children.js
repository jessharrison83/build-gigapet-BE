exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex("children")
        .truncate()
        .then(function() {
            // Inserts seed entries
            return knex("children").insert([
                {
                    id: 1,
                    name: "Charlie",
                    pet_name: "Acorn",
                    pet_experience: 55,
                    pet_id: 1
                },
                {
                    id: 2,
                    name: "Jacob",
                    pet_name: "Biscuit",
                    pet_experience: 16,
                    pet_id: 2
                },
                {
                    id: 3,
                    name: "Alfie",
                    pet_name: "Cosmo",
                    pet_experience: 65,
                    pet_id: 3
                },
                {
                    id: 4,
                    name: "Olivia",
                    pet_name: "Daisy",
                    pet_experience: 94,
                    pet_id: 4
                },
                {
                    id: 5,
                    name: "Amelia",
                    pet_name: "Fig",
                    pet_experience: 91,
                    pet_id: 5
                },
                {
                    id: 6,
                    name: "Isabella",
                    pet_name: "Maggie",
                    pet_experience: 78,
                    pet_id: 6
                }
            ]);
        });
};
