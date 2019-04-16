exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("parents-children")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("parents-children").insert([
        { id: 1, parent_id: 1, child_id: 1 },
        { id: 2, parent_id: 2, child_id: 2 },
        { id: 3, parent_id: 1, child_id: 3 },
        { id: 4, parent_id: 2, child_id: 4 },
        { id: 5, parent_id: 1, child_id: 5 }
      ]);
    });
};
