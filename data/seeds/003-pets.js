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
          description: "Round and purple like a grape",
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
        },
        {
          id: 2,
          species: "Pink Egg",
          description: "Chews a lot of bubble gum, doesn't smile very often",
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
        },
        {
          id: 3,
          species: "Green Egg",
          description: "Known to put broccoli on Pizza",
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
        },
        {
          id: 4,
          species: "Blue Egg",
          description: "Loves listening to Jazz",
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
        },
        {
          id: 5,
          species: "Yellow Egg",
          description: "Chips, bread, pasta, potatoes. The plainer the better",
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
        },
        {
          id: 6,
          species: "Red Egg",
          description: "Loves to eat berries!",
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
