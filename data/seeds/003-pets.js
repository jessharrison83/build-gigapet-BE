exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("pets")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("pets").insert([
        { id: 1, species: "rowValue1", description: "", img_url: "" },
        { id: 2, species: "rowValue2", description: "", img_url: "" },
        { id: 3, species: "rowValue3", description: "", img_url: "" }
      ]);
    });
};
