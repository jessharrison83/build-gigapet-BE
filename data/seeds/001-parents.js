exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("parents")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("parents").insert([
        {
          id: 1,
          name: "Jeremy",
          email: "jeremy@jeremy.com",
          username: "jeremy",
          password: "jeremy",
          img_url:
            "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
        },
        {
          id: 2,
          name: "Steve",
          email: "steve@steve.com",
          username: "steve",
          password: "steve",
          img_url:
            "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
        }
      ]);
    });
};
