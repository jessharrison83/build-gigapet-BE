exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("pets")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("pets").insert([
        {
          id: 1,
          species: "Purple Egg",
          description:
            "Round and purple like a grape, this pet loves to eat berries!",
          happy:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Egg_upright.jpg/1200px-Egg_upright.jpg",
          ok:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Egg_upright.jpg/1200px-Egg_upright.jpg",
          sad:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Egg_upright.jpg/1200px-Egg_upright.jpg",
          sick:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Egg_upright.jpg/1200px-Egg_upright.jpg",
          eating:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Egg_upright.jpg/1200px-Egg_upright.jpg"
        }
      ]);
    });
};
