exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("children")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("children").insert([
        { id: 1, name: "Charlie", pet_name: "Acorn", pet_level: 1, pet_id: 1 },
        { id: 2, name: "Jacob", pet_name: "Biscuit", pet_level: 2, pet_id: 1 },
        { id: 3, name: "Alfie", pet_name: "Cosmo", pet_level: 3, pet_id: 1 },
        { id: 4, name: "Olivia", pet_name: "Daisy", pet_level: 1, pet_id: 1 },
        { id: 5, name: "Amelia", pet_name: "Fig", pet_level: 2, pet_id: 1 }
        { id: 5, name: "Isabella", pet_name: "Maggie", pet_level: 3, pet_id: 6 }
      ]);
    });
};
