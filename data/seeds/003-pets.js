exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("pets")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("pets").insert([
        {
          id: 1,
          species: "egg",
          description: "Round and sweet",
          img_url: ""
        },
        {
          id: 2,
          species: "egg",
          description: "Round and sweet",
          img_url: ""
        },
        {
          id: 3,
          species: "egg",
          description: "Round and sweet",
          img_url: ""
        }
      ]);
    });
};
