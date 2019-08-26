exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("pets")
    .then(function() {
      // Inserts seed entries
      return knex("pets").insert([
        {
          id: 1,
          species: "Purple Egg",
          description: "Round and purple like a grape",
          happy:
            "https://res.cloudinary.com/duf2xn4qf/image/upload/v1555443414/pets/violet-happy.png",
          ok:
            "https://res.cloudinary.com/duf2xn4qf/image/upload/v1555443414/pets/violet-okay.png",
          sad:
            "https://res.cloudinary.com/duf2xn4qf/image/upload/v1555443414/pets/violet-sad.png",
          sick:
            "https://res.cloudinary.com/duf2xn4qf/image/upload/v1555443414/pets/violet-sick.png",
          eating:
            "https://res.cloudinary.com/duf2xn4qf/image/upload/v1555443414/pets/violet-eating.png"
        },
        {
          id: 2,
          species: "Pink Egg",
          description: "Chews a lot of bubble gum, doesn't smile very often",
          happy:
            "https://res.cloudinary.com/duf2xn4qf/image/upload/v1555443414/pets/pink-happy.png",
          ok:
            "https://res.cloudinary.com/duf2xn4qf/image/upload/v1555443414/pets/pink-okay.png",
          sad:
            "https://res.cloudinary.com/duf2xn4qf/image/upload/v1555443415/pets/pink-sad.png",
          sick:
            "https://res.cloudinary.com/duf2xn4qf/image/upload/v1555443414/pets/pink-sick.png",
          eating:
            "https://res.cloudinary.com/duf2xn4qf/image/upload/v1555443414/pets/pink-eating.png"
        },
        {
          id: 3,
          species: "Green Egg",
          description: "Known to put broccoli on Pizza",
          happy:
            "https://res.cloudinary.com/duf2xn4qf/image/upload/v1555443413/pets/green-happy.png",
          ok:
            "https://res.cloudinary.com/duf2xn4qf/image/upload/v1555443413/pets/green-okay.png",
          sad:
            "https://res.cloudinary.com/duf2xn4qf/image/upload/v1555443413/pets/green-sad.png",
          sick:
            "https://res.cloudinary.com/duf2xn4qf/image/upload/v1555443413/pets/green-sick.png",
          eating:
            "https://res.cloudinary.com/duf2xn4qf/image/upload/v1555443413/pets/green-eating.png"
        },
        {
          id: 4,
          species: "Blue Egg",
          description: "Loves listening to Jazz",
          happy:
            "https://res.cloudinary.com/duf2xn4qf/image/upload/v1555443413/pets/blue-happy.png",
          ok:
            "https://res.cloudinary.com/duf2xn4qf/image/upload/v1555443413/pets/blue-okay.png",
          sad:
            "https://res.cloudinary.com/duf2xn4qf/image/upload/v1555443413/pets/blue-sad.png",
          sick:
            "https://res.cloudinary.com/duf2xn4qf/image/upload/v1555443413/pets/blue-sick.png",
          eating:
            "https://res.cloudinary.com/duf2xn4qf/image/upload/v1555443413/pets/blue-eating.png"
        },
        {
          id: 5,
          species: "Yellow Egg",
          description: "Chips, bread, pasta, potatoes. The plainer the better",
          happy:
            "https://res.cloudinary.com/duf2xn4qf/image/upload/v1555443413/pets/yellow-happy.png",
          ok:
            "https://res.cloudinary.com/duf2xn4qf/image/upload/v1555443413/pets/yellow-okay.png",
          sad:
            "https://res.cloudinary.com/duf2xn4qf/image/upload/v1555443413/pets/yellow-sad.png",
          sick:
            "https://res.cloudinary.com/duf2xn4qf/image/upload/v1555443413/pets/yellow-sick.png",
          eating:
            "https://res.cloudinary.com/duf2xn4qf/image/upload/v1555443413/pets/yellow-eating.png"
        },
        {
          id: 6,
          species: "Red Egg",
          description: "Loves to eat berries!",
          happy:
            "https://res.cloudinary.com/duf2xn4qf/image/upload/v1555443413/pets/red-happy.png",
          ok:
            "https://res.cloudinary.com/duf2xn4qf/image/upload/v1555443414/pets/red-okay.png",
          sad:
            "https://res.cloudinary.com/duf2xn4qf/image/upload/v1555443414/pets/red-sad.png",
          sick:
            "https://res.cloudinary.com/duf2xn4qf/image/upload/v1555443414/pets/red-sick.png",
          eating:
            "https://res.cloudinary.com/duf2xn4qf/image/upload/v1555443413/pets/red-eating.png"
        }
      ]);
    });
};
