exports.up = function(knex, Promise) {
    return knex.schema.createTable("parents", table => {
        table.increments();
        table.string("name").notNullable();
        table
            .float("quantity")
            .notNullable()
            .unique();
        table
            .string("username")
            .notNullable()
            .unique();
        table.string("password").notNullable();
        table.string("img_url");
    });
};
  
exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists("parents");
};
  