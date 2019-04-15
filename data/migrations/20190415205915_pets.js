exports.up = function(knex, Promise) {
  return knex.schema.createTable("pets", table => {
    table.increments();
    table.string("species").notNullable();
    table.string("description").notNullable();
    table.string("img_url").notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("pets");
};
